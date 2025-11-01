from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Product, Fruits, Dairy, CartItem, WishlistItem

# Register the models to make them accessible via the admin interface
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'origprice', 'new', 'sale')
    search_fields = ('name',)
    list_filter = ('new', 'sale')

@admin.register(Fruits)
class FruitsAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'origprice', 'new', 'sale')
    search_fields = ('name',)
    list_filter = ('new', 'sale')

@admin.register(Dairy)
class DairyAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'origprice', 'new', 'sale')
    search_fields = ('name',)
    list_filter = ('new', 'sale')

@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ('product', 'fruit', 'dairy', 'quantity', 'total_price')
    search_fields = ('product__name', 'fruit__name', 'dairy__name')

@admin.register(WishlistItem)
class WishlistItemAdmin(admin.ModelAdmin):
    list_display = ('product', 'fruit', 'dairy', 'quantity')
    search_fields = ('product__name', 'fruit__name', 'dairy__name')
