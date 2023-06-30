import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Login() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className='d-grid mb-3'>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </div>
            <Form.Text>
                New user? Register Here!
            </Form.Text>
        </Form>
    )
}
