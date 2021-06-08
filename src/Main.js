import React from 'react';
import ReactMarkdown from 'react-markdown';
const Main = ({activeNote, onUpdateNote}) => {

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]:value,
            lastModified: Date.now()
        })
    };

    if(!activeNote) return <div className="no-active-note">No Note Selected</div>

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input placeholder="Add Note Title" type="text" value={activeNote.title} id="title" autoFocus onChange={(e)=>onEditField('title',e.target.value)}/>
                <textarea id="body" placeholder="Write your note here..."  value={activeNote.body} onChange={(e)=>onEditField('body',e.target.value)}/>
            </div>
            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
            </div>
        </div>
    )
}

export default Main;