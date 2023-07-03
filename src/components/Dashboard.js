import React, { useEffect, useState } from 'react'
import NoteList from './Dashboard/NoteList'
import AddNote from './Dashboard/AddNote'
import TopBar from './Dashboard/TopBar'
import noteService from '../services/noteService'

export default function Dashboard() {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState({
        title: '',
        completed: false
    })

    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState(false);
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
        console.log(newNote)
        noteService.addNote(newNote)
            .then((res) => {
                setNotes(notes.concat(res.data))
                setShow(false)
                setNewNote({})
            }).catch(err => console.log(err))
    }

    const handleDelete = (noteId) => {
        noteService.deleteNote(noteId)
            .then((res) => {
                setNotes(notes.filter(note => note.id !== noteId))
            }).catch(err => console.log(err))
    }
    const handleEdit = (noteId) => {
        const targetNote = notes.find(note => note.id === noteId)
        console.log(targetNote)
        setNewNote({
            ...targetNote
        })
        setEdit(true)
        setShow(true)
    }
    const handleUpdate = () => {
        noteService.updateNote(newNote.id, newNote)
            .then((res) => {
                setNotes(notes.map(note => {
                    if (note.id === newNote.id) {
                        note = res.data
                    }
                    return note
                }))
            })
            .catch(err => console.log(err))
        setNewNote({})
        setShow(false)
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
                    handleUpdate={handleUpdate}
                    show={show}
                    newNote={newNote}
                    setNewNote={setNewNote}
                    edit={edit}
                />
            </div>
        </>
    )
}
