from django.urls import path
from adminpage import views

urlpatterns = [

    path('plan/', views.plan),
    path('themeSelect/', views.themeSelect),
    path('themeUpload/', views.themeUpload),
    # path('request/', views.request),
    path('', views.index, name='index'),
]