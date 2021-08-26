import os

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from frontend.models import File, Activity, Article, Social
from frontend.serializers import FileSerializer, ActivitySerializer, ArticleSerializer, SocialSerializer


class FileView(APIView):

    def get(self, request):
        files = File.objects.filter(parent=None)
        serializer = FileSerializer(files, many=True)
        return Response(serializer.data)


class ActivityView(APIView):

    def get(self, request):
        activities = Activity.objects.all()
        serializer = ActivitySerializer(activities, many=True)
        return Response(serializer.data)


class ArticleView(APIView):

    def get(self, request):
        articles = Article.objects.order_by('-created')
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)


def index(request):
    return render(request, 'build/index.html')


class SocialView(APIView):

    def get(self, request):
        socials = Social.objects.all()
        serializer = SocialSerializer(socials, many=True)
        return Response(serializer.data)
