import React from "react";

export default function ArticleSummary({ article }) {
    return (
        <div className="Row VotesRow">
            <h1 className="Title">{article.Titel}</h1>
            <p className="Emphasis">{article.Text}</p>
        </div>
    );
}