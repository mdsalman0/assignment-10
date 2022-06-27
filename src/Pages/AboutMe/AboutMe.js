import React from 'react';
import hero from '../../../src/Image/hero.png'
const AboutMe = () => {
    return (
        <div className=' d-flex justify-content-center my-5'>
            <div style={{width:'400px',borderRadius:'10px',marginRight:'40px'}} className=' p-4 shadow p-3 mb-5 bg-body rounded'> 
                <h2 className='text-center'>Md.Salman Hossain</h2>
                <p className='fs-5'>I want to finish the course well in the next three to four months, then I want to see myself in a job, I will work as hard as I can, I will learn, I can, inshaAllah ..</p>
                <p className='fs-5'>I want to finish the course well in the next three to four months, then I want to see myself in a job, I will work as hard as I can, I will learn, I can, inshaAllah ..</p>
            </div>
            <div className='shadow p-3 mb-5 bg-body rounded' style={{marginRight:'40px'}}>
                <img className='rounded' width={400} height={420} src={hero} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;