# Generated by Django 3.2.6 on 2021-08-19 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0008_auto_20210820_0033'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='description_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='activity',
            name='description_kk',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='activity',
            name='description_ru',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='activity',
            name='title_en',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='activity',
            name='title_kk',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='activity',
            name='title_ru',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
