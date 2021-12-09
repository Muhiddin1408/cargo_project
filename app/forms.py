from django import forms
from .models import Comment


class CommentCreateForms(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['name', 'email', 'phone', 'message']
