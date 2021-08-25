from django.urls import path
from . import views
from .views import FileView, ActivityView, index, ArticleView, SocialView

urlpatterns = [
    path('api/files', FileView.as_view()),
    path('api/activities', ActivityView.as_view()),
    path('api/articles', ArticleView.as_view()),
    path('api/socials', SocialView.as_view()),
    path('', index)
]