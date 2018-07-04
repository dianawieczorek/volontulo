# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-15 20:36
from __future__ import unicode_literals

import apps.volontulo.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('volontulo', '0009_auto_20170925_2217'),
    ]

    operations = [
        migrations.AddField(
            model_name='offer',
            name='reserve_volunteers_limit',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='offerimage',
            name='path',
            field=models.ImageField(upload_to=apps.volontulo.models.upload_to_offers),
        ),
        migrations.AlterField(
            model_name='usergallery',
            name='image',
            field=models.ImageField(),
        ),
    ]
