import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Checkout = () => {
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [address,setAddres] = useState('')
    const [booking,setBooking] = useState(false)

    const [signInWithEmailAndPassword,user,loading,error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail= e =>{
        setEmail(e.target.value)
    }
    const handlePassword= e =>{
        setPassword(e.target.value)
    }
    const handlePhone= e =>{
        setPhone(e.target.value)
    }
    const handleAddress= e =>{
        setAddres(e.target.value)
    }

    const handleSubmit= e=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,phone,address)
        setBooking(
        <p className='bg-primary text-white text-center fs-5 p-4 rounded'>thank you for the booking.</p>
        )

    }

    return (
        <div className='w-25 mx-auto mt-5 mb-5'>
            <Form onSubmit={handleSubmit}>
                {
                    booking
                }
                <Row className="mb-3 d-block">
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Your email" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="password" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onBlur={handlePhone} type="text" placeholder="phone" required/>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onBlur={handleAddress} placeholder="address" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;