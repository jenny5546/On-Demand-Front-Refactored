from django.urls import path
from adminpage import views

urlpatterns = [
    path('', views.index, name='index'),
]