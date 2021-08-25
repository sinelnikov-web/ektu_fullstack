from modeltranslation.translator import register, TranslationOptions
from .models import File, Activity, Article, Social


@register(File)
class FileTranslationOptions(TranslationOptions):
    fields = ('title', 'link', 'file')


@register(Activity)
class ActivityTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


@register(Article)
class ArticleTranslationOptions(TranslationOptions):
    fields = ('title', 'text')

@register(Social)
class ArticleTranslationOptions(TranslationOptions):
    fields = ('title',)
