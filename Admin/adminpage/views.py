from django.shortcuts import render, redirect
from .models import Request, Plan, SelectedTheme, UploadedTheme, SentFile, ReceivedFile, SentMessage, ReceivedMessage, Notification
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect, FileResponse, JsonResponse
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
from email.header import decode_header
import base64


# <html-email>
from django.core.mail import send_mail, EmailMessage
from django.template.loader import render_to_string
from django.conf import settings

def send_html_email(to_list, subject, template_name, context, sender=settings.DEFAULT_FROM_EMAIL, attachments=[]):
    msg_html = render_to_string(template_name, context)
    msg = EmailMessage(subject=subject, body=msg_html, from_email=sender, bcc=to_list)
    msg.content_subtype = "html"  # Main content is now text/html
    for att in attachments:
      msg.attach(att.name, att.read(), att.content_type)
    
    return msg.send()

# email parsing 함수
def decode_mime_words(s):
  return u''.join(
    word.decode(encoding or 'utf-8') if isinstance(word, bytes) else word
    for word, encoding in email.header.decode_header(s))

# 변경 
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) # email info locate outside of app folder

user = "none"
password = "none"

thread_num = 0

secret_file = os.path.join(BASE_DIR, 'secret.json') # email address & password
with open(secret_file) as f:
  secret = json.loads(f.read())
  user = secret["Email"]
  password = secret["Password"]


# 메일을 받는 함수(imap4)
def check_mail_imap(user, password):

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

    # 메일리스트를 받아서 내용을 파일로 저장하는 함수
    for each_mail in id_list:

        mail_struct = []
        filenames_list = []
        result, data = imapserver.fetch(each_mail, "(RFC822)")
        msg = email.message_from_bytes(data[0][1])

        message_subject = decode_mime_words(str(msg['Subject']))
        from_address = email.utils.parseaddr(msg['From'])[1]
        mail_struct.append(from_address)
        mail_struct.append(message_subject)

        message_timestamp = datetime.strptime(msg['Date'][:31],'%a, %d %b %Y %H:%M:%S %z')
  
        '''
        <CONTENTS DATA INPUT>
        '''
        raw_email = data[0][1]
        raw_email_string = raw_email.decode('utf-8')
        email_message = email.message_from_string(raw_email_string)

        for part in email_message.walk():
          if part.get_content_type() == 'text/html':
            body = part.get_payload(decode=True)
            message_content = BeautifulSoup(body.decode('UTF-8'), "html.parser")
            for script in message_content(["script", "style"]):
              script.extract()

            mail_struct.append(message_content.get_text())
            mail_struct.append(message_timestamp)
            print(mail_struct)


        mail_struct.append([])
        #print(mail_struct)
        for part in email_message.walk():

          if part.get_content_disposition() == 'attachment':
            filename = part.get_filename()

            if decode_header(filename)[0][1] is not None:

              filename = decode_header(filename)[0][0]
              filename = filename.decode()
              #print(filename)
              att_path = os.path.join('./media/received_file', str(filename))
              
              mail_struct[4].append(att_path)
              
              if not os.path.isfile(att_path):
                  fp = open(att_path, 'wb')
                  fp.write(part.get_payload(decode=True))
                  fp.close()
                  
        print(mail_struct)
        # update
        details.append(mail_struct)
          
    imapserver.close()
    imapserver.logout()

    return details # details = [{mail: (보낸사람 이메일, 메일 제목, 메일 내용, 메일 보낸 시간)},{},{}]

@csrf_exempt

def request(request):

  if request.method == 'POST':

    #연결해야하는 부분 
    #요청한 사람 정보(user)
    print('gotit')
    ################## User email info ###################
    username = generate_username(1)[0] #임시로 더미 만들기
    # useremail = 'jenny5546@naver.com' #연결할때, front에서 들고오기
    ######################################################


    # print(user)
    useremail= request.POST.get('contact_info')
    print(useremail)
    floor_type = request.POST.get('floor_type')
    commercial_type = request.POST.get('commercial_type')
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
      floor_size = floor_size,
      floor_size_unit = floor_size_unit,
      floor_height = floor_height,
      floor_height_unit = floor_height_unit, 
      floor_address = floor_address,
      add_request = add_request

    )
    newNotification = Notification.objects.create(
      request=newRequest
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

  global thread_num

  if(thread_num < 1):
    checking()
    thread_num += 1

  if request.method == 'GET':

    if request.is_ajax():
      unread = Notification.objects.all().count() #당시의 알람 개수
      return JsonResponse({'unread': unread }) # 보내기

    else:
      requests = Request.objects.all()
      notifications = Notification.objects.all()
      queryset = Request.objects.order_by('-progress')[:]
      onrunRequests = Request.objects.exclude(progress = 5) 
      unreadMails = Notification.objects.filter(received_message__isnull=False).count()
      
      progress = [0]*5

      line_data = [0] * 12
      #progress 별 counting
      for user in queryset:
        for i in range(5):
          if(user.progress == i+1):
            progress[i] += 1

      labels = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
      data = progress.copy()  

      for req in requests:
        line_data[req.requested_at.month-1]+=1

      return render(request, 'adminpage/dashboard.html', {
        'onrunRequests': onrunRequests,
        'requests': requests,
        'labels': labels,
        'data': data,
        'line_data' : line_data,
        'unread_mails': unreadMails,
        'notifications': notifications,
      })

  
def checking():

  details = check_mail_imap(user, password) 
  if(str(type(details)) == "<class 'list'>" and details != []): # 안 읽은 메일이 존재한다면.
    for eachmail in details: # 안 읽은 메일 중에서 
      if Request.objects.filter(useremail = eachmail[0]).exists(): # 리퀘 보낸 사람이 있다면 

        for req in Request.objects.filter(useremail = eachmail[0]):
          # req = Request.objects.get(useremail = eachmail[0]) # 리퀘 찾기. 
          newReceivedMessage = ReceivedMessage.objects.create(
                request = req,
                username = req.username,
                sender = eachmail[0],
                title = eachmail[1],
                content = eachmail[2],
                timestamp = eachmail[3]
          )
          for att in eachmail[4]:
            filenames = ReceivedFile()
            filenames.attach = att
            filenames.save()
            newReceivedMessage.attachment_file.add(filenames)
            newReceivedMessage.save()
    
          newNotification = Notification.objects.create(
            request=req,
            received_message = newReceivedMessage,
          )

  threading.Timer(3, checking).start()


def show(request):

  global thread_num
  
  if request.method == 'GET':

    onrunRequests = Request.objects.exclude(progress = 5) #on run: filter (step 5 이하, step 5이면 제외)
    totalRequests = Request.objects.all()
    notifications= Notification.objects.all()
    '''
    if(thread_num < 1):
      checking()
      thread_num += 1
    '''

    if request.is_ajax():
      unread = Notification.objects.all().count() #당시의 알람 개수
      return JsonResponse({'unread': unread }) # 보내기

    else:
      return render(request, 'adminpage/show.html', {
      'totalRequests': totalRequests, 
      'onrunRequests': onrunRequests, 
      'notifications': notifications,
    })


def each(request, id):
  
  global thread_num
  if request.method == 'GET':

    '''
    if(thread_num < 1):
      checking()
      thread_num += 1
    '''


    if request.is_ajax():
      unread = Notification.objects.all().count() #당시의 알람 개수
      return JsonResponse({'unread': unread }) # 보내기
    
    else:
      arequest= Request.objects.get(id = id)
      sentMessages = SentMessage.objects.filter(request = arequest)
      
      # 해당하는 알림 지우기
      if Notification.objects.filter(request = arequest).exists():
        Notification.objects.filter(request = arequest).delete()


      receivedMessages = ReceivedMessage.objects.filter(request = arequest)
      notifications= Notification.objects.all()

      message_list = sorted(
        chain(sentMessages,receivedMessages),
        key = lambda message: message.timestamp, reverse=False
      )
      return render(request, 'adminpage/request.html', {'arequest': arequest, 'message_list': message_list, 'notifications': notifications, 'sentMessages': sentMessages})
  
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
    attachments = None
    inline= None

    if request.FILES:
      att_list = request.FILES.getlist('msg_attachments')

    if (message_content != ''):
      
      send_html_email(
        [receiver,'jenny5546@naver.com'], # receiver list 
        ' Thank you for using Archisketch On Demand ',  # subject
        'email_reply.html',  # email template 
        { # context
          'username': arequest.username,
          'content' : message_content,
        },
        'jangjangman5546@gmail.com', # sender
        att_list,
      )
      newSentMessage = SentMessage.objects.create(
        request = arequest,
        content = message_content,
      )

      for afile in request.FILES.getlist('msg_attachments'):
        files = SentFile()
        files.attach = afile
        files.save()
        newSentMessage.attachment_file.add(files)
        print(newSentMessage.attachment_file)
        newSentMessage.save()
        print(type(afile))

    arequest.due_at = due_at
    arequest.progress = progress
    arequest.add_request = add_request
    arequest.save()
    arequest.update_date()

    return redirect('/'+str(id))

def edit(request, id):

  notifications= Notification.objects.all()
  arequest = Request.objects.get(id=id)
  return render(request, 'adminpage/edit.html', {
      'arequest':arequest,
      'notifications': notifications
  })


def download(request, req_id, file_id):
  arequest= Request.objects.get(id = req_id)
  afile = arequest.floor_plan.get(id = file_id)
  fs = FileSystemStorage('./media')
  response = FileResponse(fs.open(str(afile.photo), 'rb'), content_type='application/force-download')
  response['Content-Disposition'] = 'attachment; filename= {}'.format(afile.photo)
  return response


def delete(request, id):

  arequest = Request.objects.get(id = id)
  arequest.delete()
  return redirect('/show')

def messages(request):

   if request.method == 'GET':

    if request.is_ajax():
      unread = Notification.objects.all().count() #당시의 알람 개수
      return JsonResponse({'unread': unread }) # 보내기
      
    else:
      notifications= Notification.objects.all()
      requests = Request.objects.all()
      return render(request, 'adminpage/messages.html', {'requests': requests, 'notifications': notifications})

def output(request, id):
  
  notifications= Notification.objects.all()
  arequest = Request.objects.get(id = id)
  
  if request.method == 'GET':


      newSentMessage = SentMessage.objects.create(
        request = arequest,
        content = "ondemand output",
      )

      receiver = arequest.useremail
      send_html_email(
        [receiver], # receiver list 
        '[Archisketch] Your request has been Completed',  # subject
        'email_output.html',  # email template 
        { # context
          'username': arequest.username,
        },
        'jangjangman5546@gmail.com' # sender
      )
      
      return redirect('/'+str(id))

  

