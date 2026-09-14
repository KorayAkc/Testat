import React from "react";

export default function InactiveArticleComposer({ onActivate }) {
    return (
        <div className="Row VotesRow Selectable" onClick={onActivate}>
            <h1 className="Title">Neuen Artikel erstellen</h1>
            <p>Klicke hier für einen neuen Artikel.</p>
        </div>
    );
}