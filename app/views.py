from django.core.exceptions import ObjectDoesNotExist
from django.views.generic import TemplateView, ListView, DetailView, View, CreateView
from django.views.generic.edit import FormMixin

from .models import Service, Gallery, Contact, Blog, Profile, Comment
from django.contrib import messages
from django.shortcuts import redirect, HttpResponseRedirect, render
from django.urls import reverse_lazy
from .forms import CommentCreateForms
from django.db.models import Q


class HomePageView(ListView):
    paginate_by = 16
    template_name = 'index.html'
    queryset = Service.objects.all()

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        context['carousel'] = Gallery.objects.filter(type='carousel').last()
        context['contact'] = Contact.objects.filter(is_home_page=True).first()
        context['services'] = Service.objects.filter(status=True)
        blogs = Blog.objects.filter(status=True).order_by('-id')
        context['blogs'] = blogs.filter(type='blog')
        context['about'] = blogs.filter(type='about').first()
        return context


class ServicesListView(ListView):
    paginate_by = 12
    template_name = 'services.html'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(ServicesListView, self).get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        query = self.request.GET.get('search')
        context["query"] = query
        context['services'] = Service.objects.all()
        context['about'] = Blog.objects.filter(type='about').first()

        return context

    def get_queryset(self, *args, **kwargs):
        query = self.request.GET.get('search', None)
        print('request', self.request.GET)

        if query is not None:
            return Service.objects.search(query)
        if 'ordering' in self.request.GET:
            value = self.request.GET['ordering']
            return Service.objects.filter(status=True).order_by(value)

        return Service.objects.filter(status=True).order_by('-id')

    def get(self, request, *args, **kwargs):
        print('here')
        return super(ServicesListView, self).get(request, *args, **kwargs)


class ServicesDetail(DetailView, ListView):
    model = Service
    template_name = 'service-detail.html'
    paginate_by = 5
    pk_url_kwarg = 'id'

    def get_context_data(self, *args, **kwargs):

        self.object_list = super().get_queryset()
        context = super(ServicesDetail, self).get_context_data(**kwargs)
        service = Service.objects.filter(id=self.kwargs.get('id')).first()
        # context["publish"] = ProductPricePublish.objects.last()
        context["colors"] = None
        context['services'] = Service.objects.all()
        context['about'] = Blog.objects.filter(type='about').first()
        # if product:
        #     images = ProductImage.objects.filter(product=product)
        #     colors = ProductColor.objects.filter(id__in=[image.color.id for image in images])
        #     context["images"] = images
        #     second_images = []
        #     color_list = []
        #     for image in images:
        #         if image.color.color_uz not in color_list:
        #             color_list.append(image.color.color_uz)
        #
        #     color_list.remove(images.first().color.color_uz)
        #
        #     for image in images:
        #         if image.color.color_uz in color_list:
        #             second_images.append(image)
        #             color_list.remove(image.color.color_uz)
        #
        #     context["hidden_images"] = second_images
        #     context["colors"] = colors

        return context

    def get_object(self, *args, **kwargs):
        try:
            item = Service.objects.get(id=self.kwargs.get('id'))
        except ObjectDoesNotExist:
            messages.info(self.request, "Product id is not found")
            return redirect('/')

        return item

    def get_queryset(self):
        return super().get_queryset()


class BlogDetailView(DetailView):
    model = Blog
    template_name = 'blogs-detail.html'
    pk_url_kwarg = 'id'

    def get_context_data(self, **kwargs):
        content =super(BlogDetailView, self).get_context_data(**kwargs)
        content['services'] = Service.objects.all()
        content['about'] = Blog.objects.filter(type='about').first()
        return content


class BlogListView(ListView):
    paginate_by = 9
    template_name = 'blogs.html'
    queryset = Blog.objects.filter(status=True, is_home=False, type='blog')

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(BlogListView, self).get_context_data(**kwargs)
        # Add in a QuerySet of all the books
        context['about'] = Blog.objects.filter(type='about').first()
        return context


class AboutPageView(TemplateView):
    template_name = 'about.html'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(AboutPageView, self).get_context_data(**kwargs)
        context['about'] = Blog.objects.filter(type='about').first()

        return context


class GalleryView(TemplateView):
    template_name = 'gallery.html'

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(GalleryView, self).get_context_data(**kwargs)
        context['galleries'] = Gallery.objects.all()
        context['about'] = Blog.objects.filter(type='about').first()

        return context


class ContactPageView(CreateView):
    queryset = Comment.objects.all()
    template_name = 'contact.html'
    form_class = CommentCreateForms

    def get_context_data(self, **kwargs):
        # Call the base implementation first to get a context
        context = super(ContactPageView, self).get_context_data(**kwargs)
        context['contacts'] = Contact.objects.all()
        context['about'] = Blog.objects.filter(type='about').first()

        return context

    def post(self, request, *args, **kwargs):

        form = self.get_form()
        if form.is_valid():
            comment = form.save()
            comment.save()
            print('save')
            return HttpResponseRedirect(reverse_lazy('contact'))
        print("fasd")
        return render(request, 'contact.html', {'form': form})


