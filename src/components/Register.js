import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Register() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Fullname</Form.Label>
                    <Form.Control type="text" placeholder="Fullname" />
                </Form.Group>

                <div className='d-grid'>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    )
}
