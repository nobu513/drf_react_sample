from django.db import models

# Create your models here.
class Task(models.Model):
    Priority = (("#F4B9C2","high"), ("#A6EB99","middle"), ("#F8F8FE","low"))
    title = models.CharField(max_length=50)
    text = models.TextField()
    priority = models.CharField(choices=Priority, default="#A6EB99", max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title