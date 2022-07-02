import React, { useState } from 'react';
import './SingUp.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../../../src/Image/google.png'
import Loading from '../Sherad/Loading/Loading';
import github from '../../Image/github-removebg-preview.png'


const SingUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [successfully,setSuccessfully] = useState(false)

    const [createUserWithEmailAndPassword,user,loading,error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth,{sendEmailVerification:true});
    const [signInWithGithub, user3, loading3, error3] = useSignInWithGithub(auth);

    let errorElement;
    if(error || error1 || error3){
         errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message} {error3?.message}</p>
        </div>
    }

    if(loading || loading1 || loading3){
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
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        }
        else{
            createUserWithEmailAndPassword(email,password,confirmPassword);
        setSuccessfully(
            <p className='text-warning fs-5'>Thank you for a Register.Verify your email address.</p>
        ) 
        } 

    }

    /* google SingIn */
    const handleGoogleSingIn = ()=>{
        signInWithGoogle()
    }

    const handleGithubSingIn =()=>{
        signInWithGithub()
    }


    return (
        <div className='container mx-auto mb-4 shadow p-3 mt-5 mb-5 bg-body rounded singUp'>
            <Form onSubmit={handleCreateRegister}>
                <h1 className='text-primary text-center'>Please Register!!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required/>
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
            <button onClick={handleGoogleSingIn} className='btn btn-info w-100 fs-5 '><img width={30} src={google} alt="" /> Google SingUp</button>
            <button onClick={handleGithubSingIn} className='btn btn-info w-100 fs-5 mt-3'><img width={30} src={github} alt="" /> Github SingUp</button>
        </div>
    );
};

export default SingUp;