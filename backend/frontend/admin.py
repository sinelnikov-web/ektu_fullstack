from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
# Register your models here.
from django.utils.safestring import mark_safe
from frontend.models import File, Activity, Article


class FileInline(admin.StackedInline):
    model = File
    extra = 1


@admin.register(File)
class FileAdmin(TranslationAdmin):
    list_display = ['title', 'id', 'image_preview', 'type', 'link', 'parent']
    inlines = [FileInline, ]

    def parent(self, obj):
        return obj.parent.title

    def image_preview(self, obj):
        # ex. the name of column is "image"
        if obj.icon:
            return mark_safe(
                '<img src="{0}" width="64" height="64" style="object-fit:contain" />'.format(obj.get_absolute_url()))
        else:
            return '(No image)'


@admin.register(Activity)
class ActivityAdmin(TranslationAdmin):
    list_display = ['title', 'id', 'description']


@admin.register(Article)
class ArticleAdmin(TranslationAdmin):
    list_display = ['title', 'id', 'text']
