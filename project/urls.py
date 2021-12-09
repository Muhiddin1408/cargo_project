"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.conf import settings
from app.views import HomePageView, ServicesDetail, ServicesListView, BlogListView, BlogDetailView, AboutPageView, \
    GalleryView, ContactPageView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('i18n/', include('django.conf.urls.i18n')),
]

urlpatterns += i18n_patterns(
    path('', HomePageView.as_view(), name='home'),
    path('blogs', BlogListView.as_view(), name='blogs'),
    path('blogs/<int:id>', BlogDetailView.as_view(), name='blogs-detail'),
    path('about', AboutPageView.as_view(), name='about'),
    path('contact', ContactPageView.as_view(), name='contact'),
    path('services', ServicesListView.as_view(), name='services'),
    path('services/<int:id>', ServicesDetail.as_view(), name='services-detail'),
    path('gallery', GalleryView.as_view(), name='gallery'),
    path('ckeditor', include('ckeditor_uploader.urls')),
)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
