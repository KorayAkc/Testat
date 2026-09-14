import React from "react";
import ArticleSummary from "./ArticleSummary";

export default function ArticleList({ allArticles }) {
    return (
        <div>
            {allArticles.map(article => (
                <ArticleSummary key={article.Id} article={article} />
            ))}
        </div>
    );
}