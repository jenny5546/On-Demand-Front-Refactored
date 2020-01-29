from django.urls import path
from adminpage import views

urlpatterns = [
    path('request/', views.request), #application back에서 생성

    path('', views.dashboard, name='dashboard'), #dashboard
    path('show/', views.show, name='show'), #all requests
    path('<int:id>/', views.each, name='each'), #each requests
]