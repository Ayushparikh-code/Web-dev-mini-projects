# -*- coding: utf-8 -*-
"""
Created on Fri Mar 26 14:43:36 2021

@author: DRASHTI
"""

import hashlib
from flask import Flask, render_template
import requests
import json

# Enter your API key (only once)
api_key = "18a186f151b642f7900ece5d626029f4"

app = Flask(__name__)

def fetch_news(url):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad responses (4xx or 5xx)
        data = response.text
        parsed = json.loads(data)
        return parsed
    except requests.exceptions.RequestException as e:
        print(f"Error fetching news: {e}")
        return None  # Return None if there is an error

@app.route('/')
def home():
    url = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('headlines.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

@app.route('/headlines')
def headlines():
    url = "https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('headlines.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

@app.route('/sports')
def sports():
    url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('sports.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

@app.route('/tech')
def tech():
    url = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('tech.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

@app.route('/science')
def science():
    url = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('science.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

@app.route('/business')
def business():
    url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('business.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

@app.route('/ent')
def ent():
    url = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('ent.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

@app.route('/crypto')
def crypto():
    url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=" + api_key
    parsed = fetch_news(url)
    
    if parsed:
        return render_template('crypto.html', parsed=parsed)
    else:
        return render_template('error.html', error="Failed to fetch news.")

if __name__ == '__main__':
    app.run(debug=True)
