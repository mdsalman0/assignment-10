import React, { useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../../src/Image/google.png'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    
    const [signInWithEmailAndPassword,user,loading,error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }
    
    const handleEmail= e =>{
        setEmail(e.target.value)
    }
    const handlePassword= e =>{
        setPassword(e.target.value)
    }

    const handleLogin = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }

     /* google SingIn */
     const handleGoogleSingIn = ()=>{
        signInWithGoogle()
    }

    return (
        <div className='container w-25 mx-auto mb-4 shadow p-3 mb-5 bg-body rounded'>
            <Form onSubmit={handleLogin}>
                <h1 className='text-primary text-center'>Please Login!!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100 fs-5' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'>Don't have an account?<Link to='/SingUp' className='text-danger'>Please Register</Link></p>
            <button onClick={handleGoogleSingIn} className='btn btn-info w-100 fs-5 '><img width={30} src={google} alt="" /> Google SingIn</button>
        </div>
    );
};

export default Login;