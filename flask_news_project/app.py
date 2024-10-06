# -*- coding: utf-8 -*-
"""
Created on Fri Mar 26 14:43:36 2021

@author: DRASHTI
"""


import hashlib

from flask import Flask, render_template
import requests
import json

# enter your api key
# I have used google-news-api
api_key="18a186f151b642f7900ece5d626029f4"
api_key="18a186f151b642f7900ece5d626029f4"

url="https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey="+ api_key
response=response = requests.get(url)

data = response.text
parsed = json.loads(data)
print(json.dumps(parsed, indent=4))

app=Flask(__name__)

#<img src="{{url_for()}}{{parsed['articles'][0]['urlToImage']}}">
@app.route('/')
def home():
    url="https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    print("##################################################################################")
    
    return render_template('headlines.html',parsed=parsed)

@app.route('/headlines')
def headlines():
    url="https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    
    return render_template('headlines.html',parsed=parsed)
@app.route('/sports')
def sports():
    url="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    
    return render_template('sports.html',parsed=parsed)

@app.route('/tech')
def tech():
    url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    
    return render_template('tech.html',parsed=parsed)

@app.route('/science')
def science():
    url="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    
    return render_template('science.html',parsed=parsed)
@app.route('/business')
def business():
    url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    
    return render_template('business.html',parsed=parsed)

@app.route('/ent')
def ent():
    url="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    
    return render_template('ent.html',parsed=parsed)

@app.route('/crypto')
def crypto():
    url="https://newsapi.org/v2/everything?q=bitcoin&apiKey="+ api_key
    response=response = requests.get(url)

    data = response.text
    parsed = json.loads(data)
    print(json.dumps(parsed, indent=4))
    return render_template('crypto.html',parsed=parsed)

if __name__=='__main__':
    app.run()
