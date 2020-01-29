from django.urls import path
from adminpage import views

urlpatterns = [
    path('request/', views.request),
    path('', views.dashboard, name='dashboard'), #dashboard
    path('show/', views.show, name='show'), #all requests
]