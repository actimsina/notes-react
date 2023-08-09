import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs'

export default function NoteList({ notes, handleDelete, handleEdit }) {

    return (
        <ListGroup className='mb-3'>
            {
                notes.map(note => (
                    <ListGroup.Item key={note.id} className='d-flex justify-content-between align-items-start'>
                        <div className='ms-2 me-auto'>
                            <p className={note.completed ? 'text-decoration-line-through' : ''}> {note.title} </p>
                        </div>
                        <Button onClick={() => handleEdit(note.id)} size='sm' variant='warning' className='mx-3'>
                            <BsPencilSquare />
                        </Button>
                        <Button onClick={() => handleDelete(note.id)} size='sm' variant='danger'>
                            <BsFillTrashFill />
                        </Button>
                    </ListGroup.Item>
                ))
            }

        </ListGroup>
    )
}
