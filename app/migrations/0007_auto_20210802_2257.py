# Generated by Django 3.1 on 2021-08-02 17:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_service_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceimage',
            name='service',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='services', to='app.service'),
        ),
    ]
