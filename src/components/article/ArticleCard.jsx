import React from "react";
import "./article.css";
export default function ArticleCard({ articleInfo }) {
  return (
    <div className="article-card">
      <img src={articleInfo.image} alt="article-image" />
      <div className="article-details">
        <h3>{articleInfo.Title}</h3>
        <p>{articleInfo.Description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}
