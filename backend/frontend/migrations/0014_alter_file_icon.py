# Generated by Django 3.2.6 on 2021-08-22 15:17

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0013_auto_20210821_1734'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='icon',
            field=imagekit.models.fields.ProcessedImageField(upload_to='images'),
        ),
    ]