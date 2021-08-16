from rest_framework import serializers

from frontend.models import File, Activity

class RecursiveField(serializers.Serializer):
    def to_representation(self, value):
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data

class FileSerializer(serializers.ModelSerializer):

    innerFiles = RecursiveField(many=True)

    class Meta:
        model = File
        exclude = ['parent']


class ActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = Activity
        fields = '__all__'
