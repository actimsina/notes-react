import React from 'react'
import { Container, Form, Navbar } from 'react-bootstrap'

export default function TopBar() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary mb-3">
                <Container>
                    <Navbar.Brand href="#home">My Notes</Navbar.Brand>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}
