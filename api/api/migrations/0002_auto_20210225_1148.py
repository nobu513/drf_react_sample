# Generated by Django 2.1.15 on 2021-02-25 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='priority',
            field=models.CharField(choices=[('#F4B9C2', 'high'), ('#A6EB99', 'middle'), ('#F8F8FE', 'low')], default='#A6EB99', max_length=50),
        ),
    ]
