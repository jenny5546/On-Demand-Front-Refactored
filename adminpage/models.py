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

class Request(models.Model):

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
    floor_height = models.IntegerField(
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
    floor_theme = models.ManyToManyField(
        UploadedTheme,
        blank=False, 
        related_name='theme_image'
    )
    add_request = models.TextField(
        null = True,
        blank = True
    )



 
