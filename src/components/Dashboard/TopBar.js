import React from 'react'
import { Container, Form, NavDropdown, Navbar } from 'react-bootstrap'
import { useAuth } from '../../utils/authContext'
import { Link, useNavigate } from 'react-router-dom'

export default function TopBar() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        window.localStorage.removeItem("token")
        auth.setUsername(null)
        navigate("/")
    }
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary mb-3">
                <Container>
                    {/* <Navbar.Brand href="#home">My Notes</Navbar.Brand> */}

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    {/* <Navbar.Text>{auth.username}</Navbar.Text> */}
                    <NavDropdown title={auth.username} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/profile"}>
                            Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => handleLogout()} >
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
        </div>
    )
}
