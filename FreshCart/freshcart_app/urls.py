from django.urls import path
from . import views
from django.views.generic import TemplateView
from .views import ChangePasswordView

urlpatterns = [
    path('home', views.home, name='home'), 
    path('about', views.about, name='about'), 
    path('checkout', views.checkout, name='checkout'), 
    path('contact', views.contact, name='contact'),  
    path('account', views.account, name='account'), 
    
     
    path('vegetables', views.vegetables, name='vegetables'), 
    path('dairy', views.dairy, name='dairy'), 
    path('fruits', views.fruits, name='fruits'), 
    path('', views.login, name='login'), 
    path('logout', views.logout, name='logout'), 
    path('register', views.register, name='register'), 
    path('order', views.order, name='order'), 
    
    #login and password
    path('changePassword/', ChangePasswordView.as_view(), name='changePassword'),
    path('password-change-done/',TemplateView.as_view(template_name='password_change_done.html'), name='password_change_done'),  # success page
    path('product/<str:product_name>/', views.product_view, name='product'),
    
    
    # Cart   
    path('cart', views.cart_view, name='cart'), 
    path('add_to_cart/<str:product_name>/', views.add_to_cart, name='add_to_cart'),
    path('cart/update/', views.update_cart, name='update_cart'),
     path('cart/remove/<int:item_id>/', views.remove_from_cart, name='remove_from_cart'),
     
     #wishlist
    path('wishlist/', views.wishlist_view, name='wishlist'),
    path('add_to_wishlist/<str:product_name>/', views.add_to_wishlist, name='add_to_wishlist'),
    path('remove_from_wishlist/<int:item_id>/', views.remove_from_wishlist, name='remove_from_wishlist'),
]

