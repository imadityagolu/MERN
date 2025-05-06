import React from 'react';
import Sidebar from './Components/Sidebar';
import Editor from './Components/Editor';
import Split from 'react-split';
import { nanoid } from 'nanoid';

export default function App() {
    const [notes, setNotes] = React.useState(() => {
        try {
            const storedNotes = localStorage.getItem("notes");
            console.log('Stored notes:', storedNotes);
            return storedNotes ? JSON.parse(storedNotes) : [];
        } catch (e) {
            console.error('Error parsing localStorage notes:', e);
            return [];
        }
    });
    const [currentNoteId, setCurrentNoteId] = React.useState("");

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    React.useEffect(() => {
        if (notes.length > 0 && !currentNoteId) {
            setCurrentNoteId(notes[0].id);
        }
    }, [notes, currentNoteId]);

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: `# Enter title here \n\n`
        };
        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            let arr = [];
            for (let i = 0; i < oldNotes.length; i++) {
                if (oldNotes[i].id === currentNoteId) {
                    arr.unshift({ ...oldNotes[i], body: text });
                } else {
                    arr.push(oldNotes[i]);
                }
            }
            return arr;
        });
    }

    function deleteNote(event, noteId) {
        event.stopPropagation();
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    }

    function findCurrentNote() {
        return (
            notes.find(note => note.id === currentNoteId) ||
            notes[0] || { id: "", body: "" }
        );
    }

    if (!notes) {
        return <div>Loading...</div>;
    }

    console.log('App rendering, notes:', notes);

    return (
        <main>
            {notes.length > 0 ? (
                <Split sizes={[20, 85]} direction="horizontal" className="split">
                    <Sidebar
                        notes={notes}
                        setCurrentNoteId={setCurrentNoteId}
                        currentNote={findCurrentNote()}
                        newNote={createNewNote}
                        deleteNote={deleteNote}
                    />
                    {currentNoteId && notes.length > 0 && (
                        <Editor
                            updateNote={updateNote}
                            currentNote={findCurrentNote()}
                        />
                    )}
                </Split>
            ) : (
                <div className="no-notes">
                    <h1>You have no notes</h1>
                    <button className="first-note" onClick={createNewNote}>
                        Create one now
                    </button>
                </div>
            )}
        </main>
    );
}