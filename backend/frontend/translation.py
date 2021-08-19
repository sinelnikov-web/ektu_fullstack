from modeltranslation.translator import register, TranslationOptions
from .models import File

@register(File)
class FileTranslationOptions(TranslationOptions):
    fields = ('title', )