# FreshCart
FreshCart is an online grocery store platform designed to make shopping for groceries convenient and efficient. This repository contains the source code for the FreshCart website, which provides users with a seamless online shopping experience for a wide range of grocery items.

# Features
User-Friendly Interface: A clean and intuitive design that makes it easy for customers to browse and purchase fresh produce.
Comprehensive Product Range: Offers a wide selection of farm-fresh fruits, vegetables, and high-quality dairy products.
Responsive Design: Optimized for all devices, ensuring a smooth shopping experience on both desktop and mobile.

# Screenshots

## Login
![Login](static/images/demo/login.png)


## Dashboard
![Dashboard](static/images/demo/home.png)

![Dashboard](static/images/demo/dash2.png)


## Categories
![Categories](static/images/demo/categ.png)


## Items
![Items](static/images/demo/subcat.png)


## Display Item
![Display Item](static/images/demo/show.png)


## Installation

1. **Clone the repository:**
Use SSH to clone the repository:
   ```bash 
    git clone github.com/zaidkhuroo/FreshCart.git
    cd CRUD_Django
   
2. **Create a virtual environment:**
   ```bash
    python3 -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`

3. **Install Dependencies:**
   ```bash
    pip install -r requirements.txt
   
4. **Apply migrations:**
   ```bash
    python manage.py makemigrations
    python manage.py migrate

5. **Run the development server:**
   ```bash
    python manage.py runserver

Open your web browser and go to http://127.0.0.1:8000/
