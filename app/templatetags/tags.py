from django import template
register = template.Library()


@register.filter
def get_home_blogs(blogs):
    return blogs.filter(is_home=True)[:2]


@register.filter
def get_blogs(blogs):
    return blogs.filter(is_home=False)[:3]


@register.filter
def add_one(number):
    return number + 1


@register.filter
def subtract(number):
    return number - 1

