from django.urls import path
from . import views

app_name='search_app'
urlpatterns=[
    path('',views.SearchResult,name='SearchResult'),
    ]