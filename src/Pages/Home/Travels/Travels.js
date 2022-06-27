import React from 'react';
import {useNavigate,Link} from 'react-router-dom'

const Travels = ({travel}) => {
    const {name,description,img,price,id} = travel;
    const navigate = useNavigate()
    
    return (
        <div className='shadow bg-body rounded' style={{width:'340px',paddingLeft:0,margin:'20px auto'}}>
            <img width={340} height={350} src={img} alt="" />
            <div className='mx-3 mt-2 mb-3'>
            <h2>{name}</h2>
            <p><small>{description}</small></p>
            <p>{price}</p>
            <Link to='/checkout' style={{margin:'0px 8px',background:
        '#dacae5',borderRadius:'10px'}} className='w-100 border-0 p-2 fs-5'>Checkout</Link>
            </div>
        </div>
    );
};

export default Travels;