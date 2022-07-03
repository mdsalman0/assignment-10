import React from 'react';
import {useNavigate,Link} from 'react-router-dom'
import './Travel.css'

const Travels = ({travel}) => {
    const {name,description,img,price,id} = travel;
    const navigate = useNavigate()
    
    return (
        <div className='shadow bg-body rounded' style={{width:'340px',margin:'20px auto'}}>
            <img style={{width:'100%',height:'350px',borderRadius:'5px'}} src={img} alt="" />
            <div className='mx-3 mt-2 mb-3'>
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <p>Price: {price}</p>
            <div className='text-center'>
            <Link to='/checkout'>
                <div className="wrap">
                    <button className="buttons">Checkout</button>
                </div>
            </Link>
            </div>
            </div>
        </div>
    );
};

export default Travels;