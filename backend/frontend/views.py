import os

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def index(request):

    with open(os.path.join(settings.BASE_DIR, 'frontend/test2.docx'), 'rb') as file:
        return HttpResponse(file.read(), content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    # return render(request, 'build/index.html')


def doc(request):
    with open(os.path.join(settings.BASE_DIR, 'frontend/test2.docx'), 'rb') as file:
        return HttpResponse(file.read(), content_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    # return render(request, 'build/index.html')