import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-07-19&sortBy=popularity&apiKey=4fc8ad23db54411c8dce19801bccff07"
    );
    const data = await response.json();
    setNews(data.articles);
  };


  useEffect(() => {
    loadNews();
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

    </div>
   
  );
};

export default Main;
