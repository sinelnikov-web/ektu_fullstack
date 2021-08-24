# Generated by Django 3.2.6 on 2021-08-14 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0003_auto_20210814_2348'),
    ]

    operations = [
        migrations.AddField(
            model_name='file',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='files/%Y/%m/%d/'),
        ),
        migrations.AlterField(
            model_name='file',
            name='link',
            field=models.URLField(blank=True, null=True),
        ),
    ]