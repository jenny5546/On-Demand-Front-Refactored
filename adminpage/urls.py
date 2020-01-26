from django.urls import path
from adminpage import views

urlpatterns = [

    path('plan/', views.plan),
    # path('theme/', views.theme),
    # path('request/', views.request),
    path('', views.index, name='index'),
]