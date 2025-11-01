from django.db import models
from django.conf import settings

# Create your models here.
class home_page_categories:
    id:int
    name:str
    img:str
    url:str
    
    
# Vegetables
class Product(models.Model):
    name = models.CharField(max_length=100) #primary key
    img = models.ImageField(upload_to='images/vegetables/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    origprice = models.DecimalField(max_digits=10, decimal_places=2)
    new = models.BooleanField(default=False)
    sale = models.BooleanField(default=False)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)  # Optional URL field

    def __str__(self):
        return self.name

    @property
    def discount_percentage(self):
        return ((self.origprice - self.price) / self.origprice) * 100

    @property
    def is_discounted(self):
        return self.price < self.origprice
    
    
    # Fruits
class Fruits(models.Model):
    name = models.CharField(max_length=100) #primary key
    img = models.ImageField(upload_to='images/fruits/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    origprice = models.DecimalField(max_digits=10, decimal_places=2)
    new = models.BooleanField(default=False)
    sale = models.BooleanField(default=False)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)  # Optional URL field

    def __str__(self):
        return self.name

    @property
    def discount_percentage(self):
        return ((self.origprice - self.price) / self.origprice) * 100

    @property
    def is_discounted(self):
        return self.price < self.origprice
    
class Dairy(models.Model):
    name = models.CharField(max_length=100) #primary key
    img = models.ImageField(upload_to='image/dairy/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    origprice = models.DecimalField(max_digits=10, decimal_places=2)
    new = models.BooleanField(default=False)
    sale = models.BooleanField(default=False)
    description = models.TextField()
    url = models.URLField(blank=True, null=True)  # Optional URL field

    def __str__(self):
        return self.name

    @property
    def discount_percentage(self):
        return ((self.origprice - self.price) / self.origprice) * 100

    @property
    def is_discounted(self):
        return self.price < self.origprice
    
#cart
class CartItem(models.Model):
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.CASCADE)  # Link to Product model
    fruit = models.ForeignKey(Fruits, null=True, blank=True, on_delete=models.CASCADE)  # Link to Fruits model
    dairy = models.ForeignKey(Dairy, null=True, blank=True, on_delete=models.CASCADE)  # Link to Fruits model
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  # Link to User
    quantity = models.IntegerField(default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def save(self, *args, **kwargs):
        if self.product:
            self.total_price = self.product.price * self.quantity  # Calculate price for vegetable
        elif self.fruit:
            self.total_price = self.fruit.price * self.quantity # Calculate price for fruit
        elif self.dairy:
            self.total_price = self.dairy.price * self.quantity  # Calculate price for dairy
        super().save(*args, **kwargs)

    def __str__(self):
        item = self.product or self.fruit or self.dairy
        return f"{item.name} - {self.quantity}"

    
#  wishlist   # 
class WishlistItem(models.Model):
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.CASCADE)  # Allow null values
    fruit = models.ForeignKey(Fruits, null=True, blank=True, on_delete=models.CASCADE)    # Allow null values
    dairy = models.ForeignKey(Dairy, null=True, blank=True, on_delete=models.CASCADE)    # Allow null values
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)  
    quantity = models.IntegerField(default=1)





    
    