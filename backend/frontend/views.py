import os

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from frontend.models import File, Activity

from frontend.serializers import FileSerializer, ActivitySerializer


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