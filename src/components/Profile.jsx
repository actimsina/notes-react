import React, { useEffect, useState } from 'react'
import { Button, ButtonToolbar, Card } from 'react-bootstrap'
import userService from '../services/userService'
import { Link } from 'react-router-dom'

export default function Profile() {
    const [user, setUser] = useState({})

    useEffect(() => {
        document.title = 'Profile'
        userService.getProfile()
            .then(res => {
                console.log(res.data)
                setUser(res.data.user)
            }).catch(err => { console.log(err) })
    }, [])

    return (
        <Card>
            <Card.Body>
                <Card.Header>Profile</Card.Header>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Text>{user.username}</Card.Text>
                <Card.Text>{user.fullname}</Card.Text>
                <ButtonToolbar className="justify-content-between">
                    <Button variant="primary">Edit</Button>
                    <Link to="/dashboard">Dashboard</Link>
                </ButtonToolbar>
            </Card.Body>
        </Card >
    )
}
