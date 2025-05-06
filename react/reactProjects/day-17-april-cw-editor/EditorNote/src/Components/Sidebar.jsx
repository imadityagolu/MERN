import { MdDelete } from "react-icons/md";

export default function Sidebar(props) {
    console.log('Sidebar props:', props);

    if (!props.notes) {
        console.error('Sidebar: props.notes is undefined');
        return <div>Loading...</div>;
    }

    const notes = Array.isArray(props.notes) ? props.notes : [];

    const noteList = notes.map((note) => (
        <li
            key={note.id}
            className={`title ${
                props.currentNote && note.id === props.currentNote.id ? "selected-note" : ""
            }`}
            onClick={() => props.setCurrentNoteId && props.setCurrentNoteId(note.id)}
        >
            <span className="text-snippet">{note.body.split('\n')[0]}</span>
            <button
                className="delete-btn"
                onClick={(event) => props.deleteNote && props.deleteNote(event, note.id)}
            >
                <MdDelete />

            </button>
        </li>
    ));

    return (
        <section className="sidebar">
            <div className="sidebar__header">
                <h1 className="sidebar__header-logo">Notes</h1>
                <button
                    className="sidebar__header-btn"
                    onClick={props.newNote || (() => {})}
                >
                    +
                </button>
            </div>
            <ul className="note-list">{noteList}</ul>
        </section>
    );
}