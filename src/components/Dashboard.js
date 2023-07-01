import React, { useEffect, useState } from 'react'
import NoteList from './Dashboard/NoteList'
import AddNote from './Dashboard/AddNote'
import TopBar from './Dashboard/TopBar'
import noteService from '../services/noteService'

export default function Dashboard() {
    const [notes, setNotes] = useState([])

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        noteService.getAllNotes()
            .then(res => {
                console.log(res.data)
                setNotes(res.data)
            }).catch(err => window.alert(err.response.data.error))
    }, [])

    const handleSave = (e) => {
        e.preventDefault()
        noteService.addNote({ title: title })
            .then((res) => {
                setNotes(notes.concat(res.data))
                setShow(false)
            }).catch(err => console.log(err))
    }

    const handleDelete = (noteId) => {
        noteService.deleteNote(noteId)
            .then((res) => {
                setNotes(notes.filter(note => note.id !== noteId))
            }).catch(err => console.log(err))
    }
    const handleEdit = (noteId) => {
        alert(noteId)
    }

    return (
        <>
            <TopBar />
            <div className='container'>
                <NoteList
                    notes={notes}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
                <AddNote
                    handleSave={handleSave}
                    handleShow={handleShow}
                    handleClose={handleClose}
                    show={show}
                    title={title}
                    setTitle={setTitle}
                />
            </div>
        </>
    )
}
