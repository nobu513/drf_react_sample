from .models import Task
from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'text', 'priority', 'created_at']
        extra_kwargs = {"created_at":{'read_only':True}}