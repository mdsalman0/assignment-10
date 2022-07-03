import React from 'react';
import hero from '../../../src/Image/hero.png';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='container'>
             <div className="card w-50 mx-auto mb-5 mt-5">
                <img height={500} src={hero} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title text-center">Md.Salman Hossain</h5>
                <p className="card-text">I want to finish the course well in the next three to four months, then I want to see myself in a job, I will work as hard as I can, I will learn, I can, inshaAllah ...</p>
                </div>
            </div>  
            
        </div>
    );
};

export default AboutMe;