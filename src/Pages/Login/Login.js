import React, { useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../../src/Image/google.png';
import Loading from '../../Pages/Sherad/Loading/Loading'
import github from '../../Image/github-removebg-preview.png'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    
    const [signInWithEmailAndPassword,user,loading,error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail( auth);

    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    }

    if(loading || loading1 || loading3){
        return <Loading></Loading>
    }

    let errorElement;
    if(error || error1 || error3){
        errorElement = <p className='text-danger mt-3'>
            Error: {error?.message}{error1?.message}{error3?.message}
        </p>
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

    // github singIn
    const handleGithubSingIn =()=>{
        signInWithGithub()
    }

    return (
        <div className='container w-25 mx-auto mb-4 shadow p-3 mt-5 mb-5 bg-body rounded'>
            <Form onSubmit={handleLogin}>
                <h1 className='text-primary text-center'>Please Login!!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='w-100 fs-5' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {
                errorElement
            }
            <p className='mt-2 '>Forget Password?<button onClick={async () => {
            await sendPasswordResetEmail(email);
            alert('Sent email');}} className='btn btn-link mb-2'>Reset Password</button></p>
            
            <p className='mt-2'>Don't have an account?<Link to='/SingUp' className='text-danger'>Please Register</Link></p>
            <button onClick={handleGoogleSingIn} className='btn btn-info w-100 fs-5 '><img width={30} src={google} alt="" /> Google SingIn</button>
            <button onClick={handleGithubSingIn} className='btn btn-info w-100 fs-5 mt-3'><img width={30} src={github} alt="" /> Github SingIn</button>
        </div>
    );
};

export default Login;