from django.shortcuts import render, redirect
from .models import Request, Plan, SelectedTheme, UploadedTheme, SentMessage, ReceivedMessage
from django.http import HttpResponse, HttpResponseNotAllowed, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.http import FileResponse
from random_username.generate import generate_username
from django.core.files.storage import FileSystemStorage
from datetime import datetime
import json, os
import email.header

# email
import smtplib, imaplib, poplib, email
from email.mime.text import MIMEText

# email parsing 함수

def decode_mime_words(s):
  return u''.join(
    word.decode(encoding or 'utf-8') if isinstance(word, bytes) else word
    for word, encoding in email.header.decode_header(s))

# 변경 
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) # email info locate outside of app folder
user = "haha"
password = "haha"

secret_file = os.path.join(BASE_DIR, 'secret.json') # email address & password
with open(secret_file) as f:
  secret = json.loads(f.read())
  user = secret["Email"]
  password = secret["Password"]


def send_mail(user, password, sendto, msg_body):

  # smtp server

  smtpsrv = "smtp.gmail.com" # 발신 메일서버 주소
  smtpserver = smtplib.SMTP(smtpsrv, 587) # 발신 메일서버 포트

  smtpserver.ehlo()
  smtpserver.starttls()
  smtpserver.ehlo()
  smtpserver.login(user, password)

  msg = MIMEText(msg_body)
  msg['From'] = user
  msg['To'] = sendto
  msg['Subject'] = "[ARCHIDRAW 아키드로우] On-Demand 서비스 문의에 대한 답변이 도착했습니다."
  smtpserver.sendmail(user, sendto, msg.as_string())
  print('done!')
  smtpserver.close()

# 메일을 받는 함수(imap4)

def check_mail_imap(user, password, target):

  details = []
  # imap server
  imapsrv = "imap.gmail.com"
  imapserver = imaplib.IMAP4_SSL(imapsrv, "993")
  imapserver.login(user, password)
  imapserver.select('INBOX')
  res, unseen_data = imapserver.search(None, '(UNSEEN)')
  if (unseen_data[0]):
    ids = unseen_data[0] 
    lists = ids.split()
    id_list = list(reversed(lists))
    # latest_email_id = id_list[-10:] 
    # 메일리스트를 받아서 내용을 파일로 저장하는 함수
    for each_mail in id_list:

    #   # fetch the email body (RFC822) for the given ID
      result, data = imapserver.fetch(each_mail, "(RFC822)")
      msg = email.message_from_bytes(data[0][1])
      #From Address
      message_subject = decode_mime_words(str(msg['Subject']))
      from_address = email.utils.parseaddr(msg['From'])[1]
      details.append(from_address)
      details.append(message_subject)
      raw_email = data[0][1]
      raw_email_string = raw_email.decode('utf-8')
      email_message = email.message_from_string(raw_email_string)

      if target == from_address:
        for part in email_message.walk():
          if part.get_content_type() == "text/plain":
            body = part.get_payload(decode=True)
            message_content = body.decode('utf-8')
            # print(message_content)
            details.append(message_content)

    imapserver.close()
    imapserver.logout()

    return details







@csrf_exempt

def request(request):

  if request.method == 'POST':

    #연결해야하는 부분
    username = generate_username(1)[0]
    useremail = 'kimtest0987678@gmail.com'
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
  if request.method == 'GET':

    requests = Request.objects.all()
    queryset = Request.objects.order_by('-progress')[:]
    onrunRequests = Request.objects.exclude(progress = 5) #on run: filter (step 5 이하, step 5이면 제외)

    progress = [0,0,0,0,0]

    # temp data edit it!
    line_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    #progress 별 counting
    for user in queryset:
      for i in range(5):
        if(user.progress == i+1):
          progress[i] += 1
    labels = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
    data = progress.copy()
    #print(Request.objects.filter(requested_at__contains=datetime.date(2020, 1, 20)))    

    for req in requests:
      k = str(req.requested_at)
      a = k[5]+k[6]
      if(a == "01"):
        line_data[0] += 1
      elif(a == "02"):
        line_data[1]+=1
      elif(a == "03"):
        line_data[2]+=1
      elif(a == "04"):
        line_data[3]+=1
      elif(a == "05"):
        line_data[4]+=1
      elif(a == "06"):
        line_data[5]+=1
      elif(a == "07"):
        line_data[6]+=1
      elif(a == "08"):
        line_data[7]+=1
      elif(a == "09"):
        line_data[8]+=1
      elif(a == "10"):
        line_data[9]+=1
      elif(a == "11"):
        line_data[10]+=1
      elif(a == "12"):
        line_data[11]+=1

    return render(request, 'adminpage/dashboard.html', {
      'onrunRequests': onrunRequests,
      'requests': requests,
      'labels': labels,
      'data': data,
      'line_data' : line_data,
    })


def show(request):
  if request.method == 'GET':
    onrunRequests = Request.objects.exclude(progress = 5) #on run: filter (step 5 이하, step 5이면 제외)
    totalRequests = Request.objects.all()

    return render(request, 'adminpage/show.html', {'totalRequests': totalRequests, 'onrunRequests': onrunRequests})

def each(request, id):
  # 보여주기
  if request.method == 'GET':
    arequest= Request.objects.get(id = id)
    sentMessages = SentMessage.objects.filter(request = arequest)
    details = check_mail_imap(user, password, arequest.useremail)

    # details 는 [발신자 이메일, 제목, 내용] 으로 구성된 배열 
    #만약 안읽은게 있다면
    if(details):
    # 이미 존재하는 이메일이면!
      if ReceivedMessage.objects.filter(request = arequest, sender = details[0],title = details[1], content = details[2]):
        print("exists")

      else:
        newReceivedMessage = ReceivedMessage.objects.create(
          request = arequest,
          sender = details[0],
          title = details[1],
          content = details[2]
        )

    receivedMessages = ReceivedMessage.objects.filter(request = arequest)
    return render(request, 'adminpage/request.html', {'arequest': arequest, 'sentMessages': sentMessages, 'receivedMessages': receivedMessages})

  
  # 수정하기 + 메세지 보내기
  elif request.method == 'POST':
    # 수정 부분
    arequest= Request.objects.get(id = id)
    due_at = request.POST.get('due_at', arequest.due_at)
    progress = request.POST.get('progress', arequest.progress)
    add_request = request.POST.get('add_request', arequest.add_request)

    # Client에게 메일 보내기 
    message_content = request.POST['msg_content']
    receiver = arequest.useremail
    send_mail(user, password, receiver, message_content)
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


