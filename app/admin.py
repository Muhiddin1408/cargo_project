from django.contrib import admin
from .models import Comment, Contact, Service, ServiceImage, Blog, BlogImage, Gallery, Profile


class ProfileAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'status', 'updated_at']
    search_fields = ['full_name']


class BlogImageAdmin(admin.TabularInline):
    model = BlogImage
    extra = 3


class BlogAdmin(admin.ModelAdmin):
    list_display = ['title_en', 'type', 'updated_at']
    search_fields = ['title_en', 'title_uz', 'title_ru', 'title_tk']
    inlines = [BlogImageAdmin]


class CommentAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'created_at', 'updated_at']
    search_fields = ['name', 'email', 'phone']


class ServiceImageAdmin(admin.TabularInline):
    model = ServiceImage
    extra = 3


class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title_en', 'image', 'status', 'created_at', 'updated_at']
    search_fields = ['title_en', 'title_uz', 'title_ru', 'title_tk', 'description_en']
    inlines = [ServiceImageAdmin]


class GalleryAdmin(admin.ModelAdmin):
    list_display = ['title_en', 'type', 'updated_at']
    search_fields = ['title_en', 'title_uz', 'title_tk', 'title_ru', 'type']


admin.site.register(Profile, ProfileAdmin)
admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Contact)
admin.site.register(Blog, BlogAdmin)
admin.site.register(Comment, CommentAdmin)
