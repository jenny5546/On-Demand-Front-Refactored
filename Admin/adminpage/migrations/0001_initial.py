# Generated by Django 3.0.2 on 2020-01-28 06:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.FileField(blank=True, null=True, upload_to='floor_plan')),
            ],
        ),
        migrations.CreateModel(
            name='SelectedTheme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UploadedTheme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option', models.FileField(blank=True, null=True, upload_to='floor_theme')),
            ],
        ),
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('floor_type', models.CharField(choices=[('RES', 'Residential'), ('COM', 'Commercial')], default='RES', max_length=3)),
                ('commercial_type', models.CharField(default='', max_length=256)),
                ('floor_number', models.IntegerField(default=1)),
                ('floor_size', models.IntegerField(default=0)),
                ('floor_size_unit', models.CharField(choices=[('MT', 'Meter'), ('FT', 'Feet')], default='MT', max_length=2)),
                ('floor_height', models.IntegerField(blank=True, null=True)),
                ('floor_height_unit', models.CharField(choices=[('MT', 'Meter'), ('FT', 'Feet')], default='MT', max_length=2)),
                ('floor_address', models.TextField(blank=True, null=True)),
                ('add_request', models.TextField(blank=True, null=True)),
                ('floor_plan', models.ManyToManyField(related_name='plan_image', to='adminpage.Plan')),
                ('floor_theme', models.ManyToManyField(related_name='theme_image', to='adminpage.UploadedTheme')),
            ],
        ),
    ]