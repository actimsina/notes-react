import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function AddNote(props) {
    const { handleSave, handleClose, handleShow, show, newNote, setNewNote, edit, handleUpdate } = props

    return (
        <>
            <div className='d-grid'>
                <Button variant="primary" onClick={handleShow}>
                    Add new note
                </Button>
            </div>

            <Modal show={show} onHide={handleShow}>
                <Modal.Body>
                    <Form onSubmit={handleSave}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Enter note title"
                                id='note-title'
                                value={newNote.title}
                                onChange={(e) => setNewNote({
                                    ...newNote,
                                    title: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="completed"
                            label="is complete?"
                            checked={newNote.completed}
                            onChange={(e) => setNewNote({
                                ...newNote,
                                completed: !newNote.completed
                            })}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {edit ? (
                        <Button id='update' variant="primary" onClick={handleUpdate}>
                            Update Changes
                        </Button>
                    ) : (
                        <Button id='save' variant="primary" onClick={handleSave}>
                            Save Changes
                        </Button>
                    )}

                </Modal.Footer>
            </Modal>
        </>
    )
}
