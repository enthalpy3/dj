# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-25 08:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('addr', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='addr',
            name='email',
            field=models.EmailField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='addr',
            name='phone',
            field=models.IntegerField(null=True),
        ),
    ]
