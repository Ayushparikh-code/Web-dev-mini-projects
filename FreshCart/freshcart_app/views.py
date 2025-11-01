from django.shortcuts import render,redirect, get_object_or_404
from django.templatetags.static import static
from . import models
from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages
from .forms import CreateUser, LoginUser
from .models import CartItem,Product,WishlistItem,Fruits,Dairy
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import PasswordChangeView
from django.urls import reverse_lazy,reverse
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.messages.views import SuccessMessageMixin
from django.contrib import messages


# Create your views here.

@login_required(login_url='login')
def home(request): 
    product1=models.home_page_categories() #product1 is an object of class home_page_categories
    product1.name='Vegetables'
    product1.img='static/images/categories_img_01.jpg'
    product1.url='vegetables'
    product2=models.home_page_categories() #product1 is an object of class home_page_categories
    product2.name='Fruits'
    product2.img='static/images/categories_img_02.jpg'
    product2.url='fruits'
    product3=models.home_page_categories() #product1 is an object of class home_page_categories
    product3.name='Dairy'
    product3.img='static/images/categories_img_03.jpg'
    product3.url='dairy'
    
    products=[product1,product2,product3]
    return render(request,'index.html', {'products':products})


#vegetables
@login_required(login_url='login')   
def vegetables(request): 
    products = Product.objects.all()  # Fetching all products from the database
    return render(request, 'vegetables.html', {'products': products})


#fruits

@login_required(login_url='login')   
def fruits(request): 
    fruit_products = Fruits.objects.all()  # Fetching all products from the database
    return render(request, 'fruits.html', {'fruit_products': fruit_products})

#dairy

@login_required(login_url='login')   
def dairy(request): 
    dairy_products = Dairy.objects.all()  # Fetching all products from the database
    return render(request, 'dairy.html', {'dairy_products': dairy_products})


#product view for vegetables
@login_required(login_url='login')
def product_view(request, product_name):
    # Try to fetch the product from Fruits model first
    try:
        product = Fruits.objects.get(name=product_name)
        product_type = 'fruit'
    except Fruits.DoesNotExist:
        # If not in Fruits, try to fetch from Vegetables model
        try:
            product = Product.objects.get(name=product_name)
            product_type = 'vegetable'
        except Product.DoesNotExist:
            # If not in Vegetables, try to fetch from Dairy model
            product = get_object_or_404(Dairy, name=product_name)
            product_type = 'dairy'

    product_img_url = static(product.img)  # Get the image URL from static files

    return render(request, 'product.html', {
        'product': product,
        'product_type': product_type,  # Pass product type to the template
        'img_url': product_img_url
    })


# CART

@login_required(login_url='login')
def add_to_cart(request, product_name):
    product = None
    fruit = None
    dairy = None

    # Try to fetch the product from the Fruits model first
    try:
        fruit = Fruits.objects.get(name=product_name)
    except Fruits.DoesNotExist:
        # If not in Fruits, try to fetch from the Product (vegetables) model
        try:
            product = Product.objects.get(name=product_name)
        except Product.DoesNotExist:
            # If not in Fruits or Vegetables, try to fetch from Dairy model
            dairy = get_object_or_404(Dairy, name=product_name)

    # Get quantity from POST data, default to 1 if not provided
    quantity = int(request.POST.get('quantity', 1))

    # Check if the item already exists in the user's cart and create or update accordingly
    if fruit:
        cart_item, created = CartItem.objects.get_or_create(user=request.user, fruit=fruit)
    elif product:
        cart_item, created = CartItem.objects.get_or_create(user=request.user, product=product)
    elif dairy:
        cart_item, created = CartItem.objects.get_or_create(user=request.user, dairy=dairy)
    
    if created:
        cart_item.quantity = quantity  # Set quantity if item is newly added
    else:
        cart_item.quantity += quantity  # Update quantity if already exists

    # Save the cart item
    cart_item.save()

    messages.success(request, 'Item added to Basket')
    return redirect(reverse('product', kwargs={'product_name': product_name}))




@login_required(login_url='login')
def cart_view(request):
    cart_items = CartItem.objects.filter(user=request.user)
    cart_total = sum(item.total_price for item in cart_items)

    context = {
        'cart_items': cart_items,
        'cart_total': cart_total,
    }
    return render(request, 'cart.html', context)

@login_required(login_url='login')
def checkout(request):
    cart_items = CartItem.objects.filter(user=request.user)
    cart_total = sum(item.total_price for item in cart_items)

    context = {
        'cart_items': cart_items,
        'cart_total': cart_total,
    } 
    return render(request,'checkout.html', context)

@login_required(login_url='login')
def update_cart(request):
    if request.method == 'POST':
        for item_id, quantity in request.POST.items():
            if item_id.isdigit():
                cart_item = get_object_or_404(CartItem, id=item_id, user=request.user)
                try:
                    new_quantity = int(quantity)
                    if new_quantity > 0:
                        cart_item.quantity = new_quantity
                        cart_item.save()
                          
                    else:
                        cart_item.delete()  # Optionally remove item if quantity is set to 0                       
                except ValueError:
                    # Handle invalid quantities, e.g., non-numeric input
                    pass
    messages.success(request, 'Basket Updated')            
    return redirect('cart')



@login_required(login_url='login')
def remove_from_cart(request, item_id):
    cart_item = get_object_or_404(CartItem, id=item_id, user=request.user)
    cart_item.delete()
    messages.success(request, 'Item removed')
    return redirect('cart')



@login_required(login_url='login')
def about(request): 
    return render(request,'about.html')


@login_required(login_url='login')
def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

       
        # Send email
        try:
            send_mail(
                f"Message from {name}: {subject}",
                message,
                email,  # Sender's email
                [settings.EMAIL_HOST_USER],  # Recipient email
                fail_silently=False,
            )
            messages.success(request, "Message sent successfully!")
        except Exception as e:
            print(f"Error sending email: {e}")
            messages.error(request, "Failed to send message.")

        return redirect('contact')  # Redirect after successful form submission
    
    return render(request, 'contact-us.html')

@login_required(login_url='login')
def account(request): 
    return render(request,'my-account.html')
def wishlist(request): 
    return render(request,'wishlist.html')
@login_required(login_url='login')
def cart(request): 
    return render(request,'cart.html')
def product(request):
    return render('product.html')
def order(request):
    return render(request,'order_place.html')
    



def login(request):
    form=LoginUser()
    if request.method == 'POST':
        form =LoginUser(request, data=request.POST)
        if form.is_valid():
            username=request.POST.get('username') 
            password=request.POST.get('password')
            user= authenticate(request,username=username,password=password) 
            if user is not None:
                auth.login(request,user)
                return redirect ('home')
    context={'form': form}
    return render(request,'login.html', context=context)            
                
def register(request):
    form=CreateUser() 
    if request.method == 'POST':
        form =CreateUser(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Account Created')
            return redirect('login')
    context={'form': form}
    return render(request,'register.html', context=context)            
    
def logout(request):
    auth.logout(request)
    return redirect('login')

class ChangePasswordView(SuccessMessageMixin, PasswordChangeView):
    template_name = 'change_password.html'  # Create this template for the change password page
    form_class = PasswordChangeForm
    success_url = reverse_lazy('password_change_done')  # Redirect after successful password change
   
    
    

# WISHLIST START

@login_required(login_url='login')
def add_to_wishlist(request, product_name):
    product = None
    fruit = None
    dairy = None

    # Try to fetch the product from the Fruits model first
    try:
        fruit = Fruits.objects.get(name=product_name)
    except Fruits.DoesNotExist:
        # If not in Fruits, try to fetch from the Product (vegetables) model
        try:
            product = Product.objects.get(name=product_name)
        except Product.DoesNotExist:
            # If not in Fruits or Vegetables, try to fetch from Dairy model
            dairy = get_object_or_404(Dairy, name=product_name)

    # Get quantity from POST data, default to 1 if not provided
    quantity = int(request.POST.get('quantity', 1))

    if product:
        wishlist_item, created = WishlistItem.objects.get_or_create(
            user=request.user, product=product, fruit=None  # Ensure fruit is None if product is being added
        )
    elif fruit:
        wishlist_item, created = WishlistItem.objects.get_or_create(
            user=request.user, fruit=fruit, product=None  # Ensure product is None if fruit is being added
        )
    elif dairy:
        wishlist_item, created = WishlistItem.objects.get_or_create(
            user=request.user, dairy=dairy, product=None  # Ensure product is None if dairy is being added
        )   
        
    wishlist_item.quantity = quantity  # Set quantity if the item is newly added
    wishlist_item.save()

    messages.success(request, 'Item added to Wishlist') 
    return redirect(reverse('product', kwargs={'product_name': product_name}))



@login_required(login_url='login')
def wishlist_view(request):
    wishlist_items = WishlistItem.objects.filter(user=request.user)
    context = {
        'wishlist_items': wishlist_items  # Pass actual data
    }
    return render(request, 'wishlist.html', context)


@login_required(login_url='login')
def update_wishlist(request):
    if request.method == 'POST':
        for item_id, quantity in request.POST.items():
            if item_id.isdigit():  # Ensure the item_id is valid
                wishlist_item = get_object_or_404(WishlistItem, id=item_id)
                wishlist_item.quantity = quantity
                wishlist_item.save()
    return redirect('wishlist')


@login_required(login_url='login')
def remove_from_wishlist(request, item_id):
    wishlist_item = get_object_or_404(WishlistItem, id=item_id, user=request.user)
    wishlist_item.delete()
    messages.success(request, 'Item removed')
    return redirect('wishlist')
#wishlist End





