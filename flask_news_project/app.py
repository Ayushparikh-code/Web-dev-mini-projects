
# -*- coding: utf-8 -*-
"""
Created on Fri Mar 26 14:43:36 2021

@author: DRASHTI
"""

import hashlib
from flask import Flask, render_template
import requests
import json

# **Security:** Store your API key in a separate configuration file
# or environment variable and avoid committing it to version control.
# Here, we'll use a placeholder for demonstration.
api_key = "YOUR_API_KEY"  # Replace with your actual API key

def fetch_news(category=None, query=None):
    url = "https://newsapi.org/v2/top-headlines"
    params = {"apiKey": api_key}
    if category:
        params["category"] = category
    if query:
        params["q"] = query  # Use "q" parameter for search

    response = requests.get(url, params=params)
    data = response.text
    parsed = json.loads(data)
    return parsed

app = Flask(__name__)

@app.route('/')
def home():
    parsed = fetch_news()  # Fetch top headlines
    return render_template('headlines.html', articles=parsed["articles"])

@app.route('/headlines')
def headlines():
    return home()  # Redirect to home for headlines

@app.route('/sports')
def sports():
    parsed = fetch_news(category="sports")
    return render_template('sports.html', articles=parsed["articles"])

@app.route('/tech')
def tech():
    parsed = fetch_news(category="technology")
    return render_template('tech.html', articles=parsed["articles"])

@app.route('/science')
def science():
    parsed = fetch_news(category="science")
    return render_template('science.html', articles=parsed["articles"])

@app.route('/business')
def business():
    parsed = fetch_news(category="business")
    return render_template('business.html', articles=parsed["articles"])

@app.route('/ent')
def ent():
    parsed = fetch_news(category="entertainment")
    return render_template('ent.html', articles=parsed["articles"])

@app.route('/crypto')
def crypto():
    parsed = fetch_news(query="bitcoin")
    return render_template('crypto.html', articles=parsed["articles"])

if __name__ == '__main__':
    app.run()
