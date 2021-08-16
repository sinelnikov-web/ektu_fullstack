from django.urls import path
from . import views
from .views import FileView, ActivityView

urlpatterns = [
    path('api/files', FileView.as_view()),
    path('api/activities', ActivityView.as_view()),

]