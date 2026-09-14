import React from "react";

export default function ArticleComposer({ onSave, onCancel }) {
    const [titel, setTitel] = React.useState("");
    const [text, setText] = React.useState("");

    function save() {
        const newArticle = {
            Id: Date.now(),
            Titel: titel,
            Text: text
        };
        onSave(newArticle);
    }

    const formCompleted = titel && text;

    return (
        <div className="Row VoteComposer Spacer">
            <input
                type="text"
                placeholder="Titel des Artikels"
                value={titel}
                onChange={e => setTitel(e.target.value)}
            />
            <input
                type="text"
                placeholder="Text des Artikels"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button disabled={!formCompleted} onClick={save}>Speichern</button>
            <button onClick={onCancel}>Abbrechen</button>
        </div>
    );
}