import sys
from io import BytesIO

from PIL import Image, ImageOps
from django.conf import settings
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models
from django.core.files import File as DjangoFile

# Create your models here.
from imagekit.models import ProcessedImageField
from pilkit.processors import ResizeToFill

from .utils import compress


class Article(models.Model):
    title = models.CharField(max_length=500)
    icon = models.ImageField(upload_to='articles/%Y/%m/%d/', default=None)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    views = models.PositiveIntegerField(default=0)
    likes_count = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Like(models.Model):
    ip = models.CharField(max_length=255)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='likes')


class File(models.Model):
    FILE_TYPE_CHOICES = [
        ('folder', 'folder'),
        ('image', 'image'),
        ('office', 'office'),
        ('widget', 'widget'),
        ('browser', 'browser'),
    ]
    title = models.CharField(max_length=255)
    icon = ProcessedImageField(upload_to='images',
                                           processors=[ResizeToFill(300, 300)],
                                           format='PNG',
                                           options={'quality': 80})
    type = models.CharField(max_length=255, choices=FILE_TYPE_CHOICES)
    isOpen = models.BooleanField(default=False)
    isFocusedOnWindow = models.BooleanField(default=False)
    isMinimized = models.BooleanField(default=False)
    file = models.FileField(upload_to='files/%Y/%m/%d/', null=True, blank=True)
    link = models.CharField(max_length=1000, null=True, blank=True)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, related_name='innerFiles', null=True, blank=True)

    class Meta:
        verbose_name = 'Файл'
        verbose_name_plural = 'Файлы'

    def get_absolute_url(self):
        return settings.MAIN_URL + self.icon.url

    def __str__(self):
        return self.title



class Activity(models.Model):
    REGION_CHOICES = [
        ('Региональные', 'Региональные'),
        ('Тараз', 'Тараз'),
        ('Байзакский район', 'Байзакский район'),
        ('Жамбылский район', 'Жамбылский район'),
        ('Жуалынский район', 'Жуалынский район'),
        ('Кордайский район', 'Кордайский район'),
        ('Меркенский район', 'Меркенский район'),
        ('Мойынкумский район', 'Мойынкумский район'),
        ('Район имени Т.Рыскулова', 'Район имени Т.Рыскулова'),
        ('Сарысуский район', 'Сарысуский район'),
        ('Таласский район', 'Таласский район'),
        ('Шуский район', 'Шуский район'),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    region = models.CharField(max_length=255, choices=REGION_CHOICES, default='Региональные')

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'

    def __str__(self):
        return self.title


class Social(models.Model):
    title = models.CharField(max_length=255)
    icon = ProcessedImageField(upload_to='images',
                                           processors=[ResizeToFill(300, 300)],
                                           format='PNG',
                                           options={'quality': 80})
    link = models.CharField(max_length=1000)

    class Meta:
        verbose_name = 'Социальные сети'
        verbose_name_plural = 'Социальные ссылки'

    def __str__(self):
        return self.title