from django.shortcuts import render
from .models import Task
from .serializers import TaskSerializer
from rest_framework import generics, viewsets

# Create your views here.

class TaskViewSet(generics.ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class CreateTaskView(generics.CreateAPIView):
    serializer_class = TaskSerializer

class CreateTaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

