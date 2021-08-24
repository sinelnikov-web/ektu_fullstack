# Generated by Django 3.2.6 on 2021-08-20 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0010_auto_20210820_1836'),
    ]

    operations = [
        migrations.AddField(
            model_name='file',
            name='file_en',
            field=models.FileField(blank=True, null=True, upload_to='files/%Y/%m/%d/'),
        ),
        migrations.AddField(
            model_name='file',
            name='file_kk',
            field=models.FileField(blank=True, null=True, upload_to='files/%Y/%m/%d/'),
        ),
        migrations.AddField(
            model_name='file',
            name='file_ru',
            field=models.FileField(blank=True, null=True, upload_to='files/%Y/%m/%d/'),
        ),
    ]