from todo import views
from django.urls import path,os

urlpatterns = [
    path('',views.home ,name='home'),
    path('product',views.product ,name='store'),
    
]
