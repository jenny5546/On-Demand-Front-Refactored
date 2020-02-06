from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

# Create your models here.
class SelectedTheme(models.Model):
  option = models.TextField(blank=True, null=True)


class UploadedTheme(models.Model):
  photo = models.FileField(upload_to='floor_theme', blank=True, null=True)


class Plan(models.Model):
  photo = models.FileField(upload_to='floor_plan', blank=True, null=True)

  def int(self):
    return self.id

class Request(models.Model):

  username = models.CharField(
    max_length = 20,
    default = 'anonymous'
  )

  # 사용자 이메일 받아오기
  useremail = models.CharField(
    max_length = 256,
    default = 'kimtest0987678@gmail.com'
  )

  requested_at = models.DateTimeField(default=timezone.now)
  updated_at = models.DateTimeField(blank=True, null=True)

  def two_day_hence():
    return timezone.now() + timezone.timedelta(days=2)

  def update_date(self):
    self.updated_at = timezone.now()
    self.save()

  due_at = models.DateTimeField(default = two_day_hence)
  progress = models.IntegerField(default=1)
  floor_type = models.CharField(
    max_length = 20,
    default = 'Residential',
  )
  commercial_type = models.CharField(
    max_length = 256, 
    default = ''
  )

  floor_plan = models.ManyToManyField(
    Plan, 
    blank=False, 
    related_name='plan_image'
  )

  floor_number = models.IntegerField(
    default = 1
  )

  floor_size = models.IntegerField(
    default = 0
  )

  floor_size_unit = models.CharField(
    max_length = 2,
    default = 'm',
  )

  floor_height = models.CharField(
    max_length = 256,
    blank = True,
    null = True,
  )

  floor_height_unit = models.CharField(
    max_length = 2,
    default = 'm',
  )

  floor_address = models.TextField(
    null= True,
    blank = True,
  )

  uploaded_theme = models.ManyToManyField(
    UploadedTheme,
    blank=False, 
  )

  selected_theme = models.ManyToManyField(
    SelectedTheme,
    blank=False, 
  )

  add_request = models.TextField(
    null = True,
    blank = True
  )

# Client 에게 받은 email

class ReceivedMessage(models.Model):
  # client의 이메일 
  request = models.ForeignKey(Request, null=True, on_delete = models.CASCADE)
  sender = models.EmailField( 
    max_length = 254,
    default = 'requestor@gmail.com'
  )
  username = models.CharField(
    max_length = 20,
    default = 'anonymous'
  )
  title = models.TextField(default='')
  content = models.TextField()
  timestamp = models.DateTimeField(default=timezone.now)


# Client 에게 보낸 email
class SentMessage(models.Model):
  sender = models.CharField(max_length = 10, default='admin')
  request = models.ForeignKey(Request, null=True, on_delete = models.CASCADE)
  content = models.TextField()
  timestamp = models.DateTimeField(default=timezone.now)

