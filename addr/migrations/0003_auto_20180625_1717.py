# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-25 08:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('addr', '0002_auto_20180625_1701'),
    ]

    operations = [
        migrations.CreateModel(
            name='memo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
            ],
            options={
                'ordering': ('addr',),
            },
        ),
        migrations.RemoveField(
            model_name='addr',
            name='author',
        ),
        migrations.AddField(
            model_name='memo',
            name='addr',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='addr.Addr'),
        ),
    ]