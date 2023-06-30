import React from 'react'
import NoteList from './Dashboard/NoteList'
import AddNote from './Dashboard/AddNote'
import TopBar from './Dashboard/TopBar'

export default function Dashboard() {
    return (
        <>
            <TopBar />
            <div className='container'>
                <NoteList />
                <AddNote />
            </div>
        </>
    )
}
