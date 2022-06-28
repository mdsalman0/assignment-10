import React, { useState } from 'react';
import './SingUp.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../../src/Image/google.png'
import Loading from '../Sherad/Loading/Loading';

const SingUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [successfully,setSuccessfully] = useState(false)

    const [createUserWithEmailAndPassword,user,loading,error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth,{sendEmailVerification:true});

    let errorElement;

    if(error || error1){
         errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if(loading || loading1){
        return <Loading></Loading>
    }

    const handleEmail= e =>{
        setEmail(e.target.value)
    }
    const handlePassword= e =>{
        setPassword(e.target.value)
    }
    const handleConfirmPassword= e =>{
        setConfirmPassword(e.target.value)
    }

    const handleCreateRegister =async e =>{
        e.preventDefault()
        createUserWithEmailAndPassword(email,password,confirmPassword);
        setSuccessfully(<p className='text-warning'>thank you for registering for the travel</p>)

    }

    /* google SingIn */
    const handleGoogleSingIn = ()=>{
        signInWithGoogle()
    }

    return (
        <div className='container w-25 mx-auto mb-4 shadow p-3 mb-5 bg-body rounded'>
            <Form onSubmit={handleCreateRegister}>
                <h1 className='text-primary text-center'>Please Register!!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" />
                </Form.Group>
                {
                    successfully
                }
                <Button className='w-100 fs-5' variant="primary" type="submit">
                    SingUp
                </Button>
            </Form>
            {
                errorElement
            }
            
            <p className='mt-3'>Already have an Account?<Link to='/login' className='text-danger'>Please Login</Link></p>
            <button onClick={handleGoogleSingIn} className='btn btn-info w-100 fs-5 '><img width={30} src={google} alt="" /> Google SingIn</button>
        </div>
    );
};

export default SingUp;