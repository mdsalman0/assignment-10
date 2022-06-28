import React from 'react';
import hero from '../../../src/Image/hero.png';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className=' info container'>
            <div className='name-info'> 
                <h2 className='text-center'>Md.Salman Hossain</h2>
                <p className='fs-5'>I want to finish the course well in the next three to four months, then I want to see myself in a job, I will work as hard as I can, I will learn, I can, inshaAllah ..</p>
                <p className='fs-5'>I want to finish the course well in the next three to four months, then I want to see myself in a job, I will work as hard as I can, I will learn, I can, inshaAllah ..</p>
            </div>
            <div className='image'>
                <img className='img'src={hero} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;