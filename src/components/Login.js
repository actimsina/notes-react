import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import userService from '../services/userService'
import { useAuth } from '../utils/authContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    const auth = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        userService.login(credentials)
            .then((res) => {
                console.log(res.data)
                auth.setUsername(credentials.username)
                window.localStorage.setItem('token', res.data.token)
                navigate('/dashboard')
            }).catch((err) => window.alert(err.response.data.error))
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
            </Form.Group>
            <div className='d-grid mb-3'>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Login
                </Button>
            </div>
            <Form.Text>
                New user? <Link to={'/register'}>Register Here!</Link>
            </Form.Text>
        </Form>
    )
}
