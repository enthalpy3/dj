# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-25 08:24
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('addr', '0003_auto_20180625_1717'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Addr',
            new_name='Friend',
        ),
    ]