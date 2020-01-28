from django.contrib import admin
from adminpage.models import UploadedTheme, SelectedTheme, Plan
# Register your models here.

admin.site.register(UploadedTheme)
admin.site.register(Plan)