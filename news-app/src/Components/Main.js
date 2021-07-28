import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [news, setNews] = useState([]);
  const [tnews, setTNews] = useState([]);

  const loadNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-07-19&sortBy=popularity&apiKey=4fc8ad23db54411c8dce19801bccff07"
    );
    const data = await response.json();
    setNews(data.articles);
  };

  const loadTesla = async () => {
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-06-19&sortBy=publishedAt&apiKey=4fc8ad23db54411c8dce19801bccff07");
    const data = await response.json();
    console.log(data.articles);
    setTNews(data.articles);
    console.log(tnews)
  }

  useEffect(() => {
    loadNews();
    loadTesla();
  }, []);


  return (
    <div className="main">
      <h2 className="main-heading">Latest News</h2>

      <div className="card-container">
        {news.map((data) => {
          return (
            <div className="card">
              <div className="img">
                <img src={data.urlToImage} alt="" />
              </div>
              <div className="text">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
        </div>
<div className="tesla-main">
      <h2 className="tesla-heading">Tesla News</h2>
      
      <div className="tesla-container">
        {tnews.map(data => {
          return(
          <div className="card1">
            <div className="image">
              <img src={data.urlToImage} alt="" />
            </div>
            <div className="info">
              <h3>{data.title}</h3>

              <p>{data.description}</p>
            </div>
          </div>
          );
        })}
      </div>
    </div>
    </div>
   
  );
};

export default Main;
