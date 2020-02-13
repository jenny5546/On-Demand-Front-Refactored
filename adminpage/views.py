from django.shortcuts import render, redirect
from .models import Request, Plan, SelectedTheme, UploadedTheme, SentMessage, ReceivedMessage
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect, FileResponse
from django.views.decorators.csrf import csrf_exempt
from random_username.generate import generate_username
from django.core.files.storage import FileSystemStorage
from datetime import datetime
import json, os, time, threading
from itertools import chain
from bs4 import BeautifulSoup

# email
import smtplib, imaplib, email
import email.header
from email.mime.multipart import MIMEMultipart 
from email.mime.image import MIMEImage
from email.mime.text import MIMEText 
from email.mime.base import MIMEBase 
from templated_email import send_templated_mail, InlineImage

# email parsing 함수

def decode_mime_words(s):
  return u''.join(
    word.decode(encoding or 'utf-8') if isinstance(word, bytes) else word
    for word, encoding in email.header.decode_header(s))

# 변경 
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) # email info locate outside of app folder
user = "none"
password = "none"
target_mail = "none"
thread_num = 0
unread_mail_num = 0
unread_mail = []
unread_mail_id = []
unmade_model_num = 0

secret_file = os.path.join(BASE_DIR, 'secret.json') # email address & password

with open(secret_file) as f:
  secret = json.loads(f.read())
  user = secret["Email"]
  password = secret["Password"]


# 메일을 받는 함수(imap4)
def check_mail_imap(user, password, target='none'):
  details = []
  # imap server
  imapsrv = "imap.gmail.com"
  imapserver = imaplib.IMAP4_SSL(imapsrv, "993")
  imapserver.login(user, password)
  imapserver.select('INBOX')
  res, unseen_data = imapserver.search(None, '(UNSEEN)')
  # print("unseen_data", unseen_data)
  if (unseen_data[0]):
    ids = unseen_data[0] 
    lists = ids.split()
    
    id_list = list(reversed(lists))
    # print(id_list.__len__()) # length of unseen mails

    # latest_email_id = id_list[-10:] 
    # 메일리스트를 받아서 내용을 파일로 저장하는 함수
    for each_mail in id_list:

        mail_struct = []
      # fetch the email body (RFC822) for the given ID
        result, data = imapserver.fetch(each_mail, "(RFC822)")
        msg = email.message_from_bytes(data[0][1])
        print(msg)
        message_subject = decode_mime_words(str(msg['Subject']))
        from_address = email.utils.parseaddr(msg['From'])[1]
        mail_struct.append(from_address)
        mail_struct.append(message_subject)

        message_timestamp = datetime.strptime(msg['Date'][:31],'%a, %d %b %Y %H:%M:%S %z')
        print('date:' + msg['Date'])
        # print(message_timestamp)
        '''
        <CONTENTS DATA INPUT>
        '''
        raw_email = data[0][1]
        raw_email_string = raw_email.decode('utf-8')
        email_message = email.message_from_string(raw_email_string)
        for part in email_message.walk():
          # print('type'+ part.get_content_maintype())
          if part.get_content_type() == "text/plain":
            body = part.get_payload(decode=True)
            message_content = body.decode('utf-8')
            mail_struct.append(message_content)
            mail_struct.append(message_timestamp)

          elif part.get_content_type() == 'text/html':
            body = part.get_payload(decode=True)
            message_content = BeautifulSoup(body.decode('UTF-8'), "html.parser")
            mail_struct.append(message_content.get_text())
            mail_struct.append(message_timestamp)
                
        # update
        details.append(mail_struct)
          
    imapserver.close()
    imapserver.logout()
    # print("hahah", type(details))
    #threading.Timer(3, check_mail_test).start()
    return details

@csrf_exempt

def request(request):

  if request.method == 'POST':

    #연결해야하는 부분 
    #요청한 사람 정보(user)
    username = generate_username(1)[0]
    useremail = 'jenny5546@naver.com' #연결할때, front에서 들고오기
    # print(user)
    floor_type = request.POST.get('floor_type')
    commercial_type = request.POST.get('commercial_type')
    floor_number = request.POST.get('floor_number')
    floor_size = request.POST.get('floor_size')
    floor_size_unit = request.POST.get('floor_size_unit')
    floor_height = request.POST.get('floor_height')
    floor_height_unit = request.POST.get('floor_height_unit')
    floor_address = request.POST.get('floor_address')
    add_request = request.POST.get('add_req')
    newRequest = Request.objects.create(
      username = username,
      useremail = useremail,
      floor_type = floor_type,
      commercial_type = commercial_type,
      floor_number = floor_number,
      floor_size = floor_size,
      floor_size_unit = floor_size_unit,
      floor_height = floor_height,
      floor_height_unit = floor_height_unit, 
      floor_address = floor_address,
      add_request = add_request
    )

    #file 처리 
    for afile in request.FILES.getlist('floor_plan'):
      files = Plan()
      files.photo = afile
      files.save()
      newRequest.floor_plan.add(files)
      newRequest.save()

    for afile in request.FILES.getlist('uploaded_theme'):
      files = UploadedTheme()
      files.photo = afile
      files.save()
      newRequest.uploaded_theme.add(files)
      newRequest.save()


    for afile in request.POST.getlist('selected_theme'):
      themes = SelectedTheme()
      newfile = str(afile.split(".")[0]) + ".jpg"
      themes.option = newfile
      themes.save()
      newRequest.selected_theme.add(themes)
      newRequest.save()
    
    return HttpResponse(status=200)

  else:
    return HttpResponseNotAllowed(['POST'])


def dashboard(request):
  global unread_mail_num
  global unread_mail
  global thread_num
  if(thread_num < 1):
    checking()
    thread_num += 1
  if request.method == 'GET':

    requests = Request.objects.all()
    queryset = Request.objects.order_by('-progress')[:]
    onrunRequests = Request.objects.exclude(progress = 5) #on run: filter (step 5 이하, step 5이면 제외)
    unread_mail_num = len(unread_mail) # 1개 메일당 contents가 4개니까
    progress = [0,0,0,0,0]

    # temp data edit it!
    line_data = [0] * 12
    #progress 별 counting
    for user in queryset:
      for i in range(5):
        if(user.progress == i+1):
          progress[i] += 1

    labels = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
    data = progress.copy()
    #print(Request.objects.filter(requested_at__contains=datetime.date(2020, 1, 20)))    

    for req in requests:
      line_data[req.requested_at.month-1]+=1

    return render(request, 'adminpage/dashboard.html', {
      'onrunRequests': onrunRequests,
      'requests': requests,
      'labels': labels,
      'data': data,
      'line_data' : line_data,
      "unread_mail_num" : unread_mail_num,
    })

def checking():
  global unread_mail_num
  global unread_mail
  global unmade_model_num
  details = check_mail_imap(user, password) # pull total unread mails
  totalRequests = Request.objects.all()
  # 감소하는 코드는 없음. detail로 들어가서 확인해야 없어지도록 할 것.
  if(str(type(details)) == "<class 'list'>" and details != []):
    unread_mail = details
    unmade_model_num += len(unread_mail)
    
  unread_mail_num = len(unread_mail)
  print('checking: ', unread_mail)
  print("mailnumber : ", unread_mail_num)
  print("unmad model num: ", unmade_model_num)
  print("unread_mail_id: ", unread_mail_id)

  if(unread_mail_num):
    for req in totalRequests:
      if(unmade_model_num):
        for mail in unread_mail:
          if(mail[0]==req.useremail):
            newReceivedMessage = ReceivedMessage.objects.create(
              request = req,
              username = req.username,
              sender = mail[0],
              title = mail[1],
              content = mail[2],
              timestamp = mail[3]
            )
            unread_mail_id.append(req.id)
    unmade_model_num = 0
  
  # checking mailbox every 3 seconds
  threading.Timer(3, checking).start()

def show(request):
  global thread_num
  global unread_mail_num
  global unread_mail
  global unmade_model_num
  if request.method == 'GET':
    onrunRequests = Request.objects.exclude(progress = 5) #on run: filter (step 5 이하, step 5이면 제외)
    totalRequests = Request.objects.all()
    if(thread_num < 1):
      checking()
      thread_num += 1
   
    return render(request, 'adminpage/show.html', {
      'totalRequests': totalRequests, 
      'onrunRequests': onrunRequests, 
      "unread_mail_num" : unread_mail_num,
      "unread_mail_id" : unread_mail_id,
    })


def each(request, id):
  
  global thread_num
  global unread_mail_num
  global unread_mail
  global unread_mail_id
  test = 0
  i = 0
  j = 0
  delete_index = []
  delete_id_index = []
  if request.method == 'GET':
    
    arequest= Request.objects.get(id = id)
    sentMessages = SentMessage.objects.filter(request = arequest)
    # email check!
    target_mail = arequest.useremail
    
    # Delete read mail
    for elem in unread_mail:
      for sub_elem in elem:
        if(sub_elem == arequest.useremail):
          delete_index.append(i)
      i += 1
    
    for mail_id in unread_mail_id:
      if(mail_id == arequest.id):
        delete_id_index.append(j)
      j += 1


    '''
    details 는 [[발신자 이메일, 제목, 내용]] 으로 구성된 배열 
    unread_mail 은 [[mail_struct][mail_struct]....]
    mail_struct 는 [mail, title, content, timestamp]로 구성된 배열
    '''
    #만약 안읽은게 있다면
    if(unread_mail_num):
    # 이미 존재하는 이메일 / each의 target과 다른 이메일 필터링   
      delete_index.reverse()
      delete_id_index.reverse()
      for i in delete_index:
        unread_mail.pop(i) # mail
      for j in delete_id_index:
        unread_mail_id.pop(j)


    receivedMessages = ReceivedMessage.objects.filter(request = arequest)

    message_list = sorted(
      chain(sentMessages,receivedMessages),
      key = lambda message: message.timestamp, reverse=False
    )
  
    return render(request, 'adminpage/request.html', {
      'arequest': arequest, 
      'message_list': message_list,
      "unread_mail_num" : unread_mail_num,
      "test": test,
      })
  
  # 수정하기 + 메세지 보내기
  elif request.method == 'POST':
    
    # 수정 부분
    
    arequest= Request.objects.get(id = id)
    due_at = request.POST.get('due_at', arequest.due_at)
    progress = request.POST.get('progress', arequest.progress)
    add_request = request.POST.get('add_request', arequest.add_request)

    # Client에게 메일 보내기 
    message_content = request.POST.get('msg_content', '')
    receiver = arequest.useremail
    # 첨부파일 처리 
    att_list = [] 
    inline= None

    if request.FILES:
      att_list = request.FILES.getlist('msg_attachments')
      #popup
      #image = request.FILES.get('image', False).read()  # 이미지로 보이는 파일 
      #inline = InlineImage(filename="image.png", content=image) # 이미지로 보이는 파일 처리


    if (message_content != ''):
      
      #logo template 넘기기 위한 경로
      module_dir = os.path.dirname(__file__)
      logo_path = os.path.join(module_dir, 'static/Logo.png')
      bg_path = os.path.join(module_dir, 'static/email-header.png')
      #templated email로 이미지 넘겨주는 함수 
      with open(image_path, 'rb') as logo: 
        #archi_image = logo.read()
        #inline_logo = InlineImage(filename="Logo.png", content=archi_image)
        
        send_templated_mail( 
            template_name='output',
            from_email= 'jangjangman5546@gmail.com',
            recipient_list=[receiver],
            context={
                'username': arequest.username,
                'content' : message_content,
                #'logo' : inline_logo,
                #'image' : inline,
            },
            attachments = map(lambda i: MIMEImage(i.read(), name=os.path.basename(i.name)), att_list),
        )
        newSentMessage = SentMessage.objects.create(
          request = arequest,
          content = message_content
        )

    arequest.due_at = due_at
    arequest.progress = progress
    arequest.add_request = add_request
    arequest.save()
    arequest.update_date()

    return redirect('/'+str(id))

def edit(request, id):

  arequest = Request.objects.get(id=id)
  return render(request, 'adminpage/edit.html', {
      'arequest':arequest,
      "unread_mail_num" : unread_mail_num,
  })


def download(request, req_id, file_id):
  arequest= Request.objects.get(id = req_id)
  afile = arequest.floor_plan.get(id = file_id)
  fs = FileSystemStorage('../On-Demand-Back/media')
  response = FileResponse(fs.open(str(afile.photo), 'rb'), content_type='application/force-download')
  response['Content-Disposition'] = 'attachment; filename= floorplan.png'
  return response

def delete(request, id):

  arequest = Request.objects.get(id = id)
  arequest.delete()
  return redirect('/show')


def messages(request):

   if request.method == 'GET':
     requests = Request.objects.all()
     return render(request, 'adminpage/messages.html', {'requests': requests, "unread_mail_num" : unread_mail_num})

def settings(request):
  # something
  return render(request, 'adminpage/setting.html')

  

