
from django.contrib import admin
from django.urls import path
import adminpage.views
from django.conf.urls import include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', adminpage.views.index, name='index'),
    path('admin/', include('adminpage.urls')),
]
