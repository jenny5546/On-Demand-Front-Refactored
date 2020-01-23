
from django.contrib import admin
from django.urls import path
import adminpage.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', adminpage.views.index, name='index'),
]
