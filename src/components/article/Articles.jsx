import React, { useEffect, useState } from "react";
import data from "../../data.json";
import ArticleCard from "./ArticleCard";
import "./article.css";
export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  useEffect(() => {
    setTotalPages(Math.floor(data.articles.length / articlesPerPage));

    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const displayedArticles = data.articles.slice(startIndex, endIndex);
    setArticles(displayedArticles);
  }, []);

  const nextPage = () => {
    const startIndex = currentPage * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;

    const displayedArticles = data.articles.slice(startIndex, endIndex);
    setArticles(displayedArticles);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    const endIndex = (currentPage - 1) * articlesPerPage;
    const startIndex = endIndex - articlesPerPage;

    const displayedArticles = data.articles.slice(startIndex, endIndex);

    setArticles(displayedArticles);
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="articles">
      <h2>Latest Articles</h2>
      <div className="articles-container">
        {articles.map((article, indx) => (
          <ArticleCard articleInfo={article} key={indx} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
}
