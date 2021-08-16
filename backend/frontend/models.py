from django.conf import settings
from django.db import models


# Create your models here.

class File(models.Model):
    FILE_TYPE_CHOICES = [
        ('folder', 'folder'),
        ('image', 'image'),
        ('office', 'office'),
        ('widget', 'widget'),
    ]
    title = models.CharField(max_length=255)
    icon = models.ImageField(upload_to='images')
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
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField()

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'

    def __str__(self):
        return self.title
