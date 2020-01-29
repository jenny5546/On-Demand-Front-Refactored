from django.urls import path
from adminpage import views

urlpatterns = [
    path('request/', views.request),
    #path('', views.index, name='index'),
    #path('', views.Classname.as_view(), name='example'),
    #path('detail/<int:pk>', views.BlogDetail.as_view(), name='detail'),
    path('', views.ondemand, name="ondemand"),
    path('dashboard/', views.ondemand, name="ondemand"),
    path('show/', views.show, name="ondemand"),
    #path('rest/', include(router.urls)),
]