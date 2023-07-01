import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function AddNote(props) {
    const { handleSave, handleClose, handleShow, title, setTitle, show } = props

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
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="completed"
                            label="is complete?"
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
