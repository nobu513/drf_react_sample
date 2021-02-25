from django.urls import path, include
from .views import TaskViewSet, CreateTaskView, CreateTaskViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'task', CreateTaskViewSet)

urlpatterns = [
    path('tasks/', TaskViewSet.as_view(), name="tasks"),
    path('create/', CreateTaskView.as_view(), name="create"),
    path('', include(router.urls))
]
