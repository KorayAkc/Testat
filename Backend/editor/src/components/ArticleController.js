import React from "react";
import ArticleList from "./ArticleList";
import ArticleComposer from "./ArticleComposer";
import InactiveArticleComposer from "./InactiveArticleComposer";

export default function ArticleController({ articles, onSave }) {
    const [allArticles, setAllArticles] = React.useState(articles);
    const [composerActive, setComposerActive] = React.useState(false);

    function addArticle(article) {
        const updated = [...allArticles, article];
        setAllArticles(updated);   // Anzeige sofort aktualisieren
        onSave(updated);           // ganze Liste ans Backend schicken
        setComposerActive(false);  // Formular wieder zuklappen
    }

    return (
        <div>
            <ArticleList allArticles={allArticles} />
            {composerActive ? (
                <ArticleComposer onSave={addArticle} onCancel={() => setComposerActive(false)} />
            ) : (
                <InactiveArticleComposer onActivate={() => setComposerActive(true)} />
            )}
        </div>
    );
}