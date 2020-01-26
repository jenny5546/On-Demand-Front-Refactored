from django.db import models
from django.utils import timezone
from django.contrib.postgres.fields import ArrayField
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Theme(models.Model):

    photo = models.TextField()

class FloorPlan(models.Model):

    photo = models.TextField()

class Request(models.Model):

    class FloorType(models.TextChoices):
        RESIDENTIAL = 'RES', _('Residential')
        COMMERCIAL  = 'COM', _('Commercial')

    class Unit(models.TextChoices):
        METER = 'MT', _('Meter')
        FEET = 'FT', _('Feet')

    floor_type = models.CharField(
        max_length = 3,
        choices = FloorType.choices,
        default = FloorType.RESIDENTIAL,
    )
    
    commercial_type = models.CharField(
        max_length = 256, 
        default = ''
    )
    floor_plan = models.ManyToManyField(
        FloorPlan, 
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
        choices = Unit.choices,
        default = Unit.METER,
    )
    floor_height = models.IntegerField(
        blank = True,
        null = True,
    )
    floor_height_unit = models.CharField(
        max_length = 2,
        choices = Unit.choices,
        default = Unit.METER,
    )
    floor_address = models.TextField(
        null= True,
        blank = True,
    )
    floor_theme = models.ManyToManyField(
        Theme,
        blank=False, 
        related_name='theme_image'
    )
    add_request = models.TextField(
        null = True,
        blank = True
    )



 
