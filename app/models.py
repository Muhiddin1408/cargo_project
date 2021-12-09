from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
import uuid
import os


def set_blog(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('blog', filename)


def set_gallery(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('gallery', filename)


def set_avatar(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('profile', filename)


class Profile(models.Model):
    full_name = models.CharField(max_length=64)
    avatar = models.ImageField(blank=True, null=True, upload_to=set_avatar)
    responsibility_uz = models.CharField(max_length=64, blank=True, null=True)
    responsibility_en = models.CharField(max_length=64, blank=True, null=True)
    responsibility_ru = models.CharField(max_length=64, blank=True, null=True)
    responsibility_tk = models.CharField(max_length=64, blank=True, null=True)
    description_en = RichTextUploadingField(blank=True, null=True)
    description_uz = RichTextUploadingField(blank=True, null=True)
    description_ru = RichTextUploadingField(blank=True, null=True)
    description_tk = RichTextUploadingField(blank=True, null=True)
    facebook = models.CharField(max_length=64, blank=True, null=True)
    twitter = models.CharField(max_length=64, blank=True, null=True)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.full_name


class Service(models.Model):
    title_en = models.CharField(max_length=255)
    title_uz = models.CharField(max_length=255, blank=True, null=True)
    title_ru = models.CharField(max_length=255, blank=True, null=True)
    title_tk = models.CharField(max_length=255, blank=True, null=True)
    description_en = RichTextUploadingField(blank=True, null=True)
    description_uz = RichTextUploadingField(blank=True, null=True)
    description_ru = RichTextUploadingField(blank=True, null=True)
    description_tk = RichTextUploadingField(blank=True, null=True)
    image = models.ImageField(upload_to=set_blog)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title_en


class ServiceImage(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='services')
    image = models.ImageField(blank=True, upload_to=set_blog, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.service.title_en


class Blog(models.Model):
    BLOG_TYPE = (
        ('blog', 'BLOG'),
        ('about', 'ABOUT'),
        ('client', 'CLIENT'),
        ('people', 'PEOPLE'),
        ('company', 'COMPANY'),
        ('career', 'CAREER'),
        ('faq', 'FAQ')
    )
    title_en = models.CharField(max_length=255)
    title_uz = models.CharField(max_length=255, blank=True, null=True)
    title_ru = models.CharField(max_length=255, blank=True, null=True)
    title_tk = models.CharField(max_length=255, blank=True, null=True)
    description_en = RichTextUploadingField(blank=True, null=True)
    description_uz = RichTextUploadingField(blank=True, null=True)
    description_ru = RichTextUploadingField(blank=True, null=True)
    description_tk = RichTextUploadingField(blank=True, null=True)
    is_home = models.BooleanField(default=False)
    status = models.BooleanField(default=True)
    image = models.ImageField(blank=True, null=True)
    type = models.CharField(choices=BLOG_TYPE, default='blog', max_length=64)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title_en


class BlogImage(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True, upload_to=set_blog)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.blog.title_en


class Contact(models.Model):
    address_en = models.CharField(max_length=128)
    address_uz = models.CharField(max_length=128, blank=True, null=True)
    address_ru = models.CharField(max_length=128, blank=True, null=True)
    address_tk = models.CharField(max_length=128, blank=True, null=True)
    phone = models.CharField(max_length=128)
    opening_times_en = models.CharField(max_length=128, blank=True, null=True)
    opening_times_uz = models.CharField(max_length=128, blank=True, null=True)
    opening_times_ru = models.CharField(max_length=128, blank=True, null=True)
    opening_times_tk = models.CharField(max_length=128, blank=True, null=True)
    fax = models.CharField(max_length=128, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    country_en = models.CharField(max_length=64)
    country_uz = models.CharField(max_length=64, blank=True, null=True)
    country_ru = models.CharField(max_length=64, blank=True, null=True)
    country_tk = models.CharField(max_length=64, blank=True, null=True)
    image = models.ImageField(blank=True, null=True)
    is_home_page = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.country_en


class Gallery(models.Model):
    GALLERY_CHOICE = (
        ('gallery', 'GALLERY'),
        ('carousel', 'CAROUSEL')
    )
    title_en = models.CharField(max_length=255)
    title_uz = models.CharField(max_length=255, blank=True, null=True)
    title_ru = models.CharField(max_length=255, blank=True, null=True)
    title_tk = models.CharField(max_length=255, blank=True, null=True)
    description_en = RichTextUploadingField(blank=True, null=True)
    description_uz = RichTextUploadingField(blank=True, null=True)
    description_ru = RichTextUploadingField(blank=True, null=True)
    description_tk = RichTextUploadingField(blank=True, null=True)
    image = models.ImageField(upload_to=set_gallery, blank=True, null=True)
    type = models.CharField(choices=GALLERY_CHOICE, max_length=64, default='gallery')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title_en


class Comment(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=128, blank=True, null=True)
    phone = models.CharField(max_length=128, blank=True, null=True)
    message = models.TextField()
    detail = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


