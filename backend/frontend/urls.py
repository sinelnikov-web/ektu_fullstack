from django.urls import path
from . import views

urlpatterns = [
    path('doc/', views.doc),
    path('docs/', views.doc),
    path('', views.index),
]