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
                <Card.Img className='fluid' height="50%" width="50%" variant="top" src={`http://110.44.119.188:4000/images/${user.picture}`} />
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
