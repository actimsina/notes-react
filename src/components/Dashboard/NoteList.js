import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

export default function NoteList({ notes, handleDelete, handleEdit }) {

    return (
        <ListGroup className='mb-3'>
            {
                notes.map(note => (
                    <ListGroup.Item key={note.id} className='d-flex justify-content-between align-items-start'>
                        <div className='ms-2 me-auto'>
                            {note.title}
                        </div>
                        <Button onClick={() => handleDelete(note.id)} size='sm' variant='danger'>delete</Button>
                        <Button onClick={() => handleEdit(note.id)} size='sm' variant='warning'>edit</Button>
                    </ListGroup.Item>
                ))
            }

        </ListGroup>
    )
}
