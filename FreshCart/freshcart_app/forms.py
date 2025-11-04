from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm
from django.forms.widgets import PasswordInput, TextInput
from django.contrib.auth.forms import PasswordChangeForm

from django import forms

#register user 
class CreateUser(UserCreationForm):
    class Meta:
        model=User
        fields=['username','password1','password2']
        
        
#login user
class LoginUser(AuthenticationForm):
    
    username=forms.CharField(widget=TextInput())
    password=forms.CharField(widget=PasswordInput())
        