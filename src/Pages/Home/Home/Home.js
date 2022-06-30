import React, { useEffect, useState } from 'react';
import {Carousel} from 'react-bootstrap'
import travel1 from '../../../Image/banner/travel-1.png'
import travel4 from '../../../Image/banner/travel-4.png'
import travel3 from '../../../Image/banner/travel-3.png'
import Travels from '../Travels/Travels';
const Home = () => {
    const [travels,setTravel] = useState([])

    useEffect(()=>{
        fetch('travel.json')
        .then(res=>res.json())
        .then(data=>setTravel(data))
    },[])

    return (
        <div>
            <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                    height={500}
                    className="d-block w-100"
                    src={travel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Editorial, Travel</h3>
                    <p>After hiking towards the roaring ocean with no idea what was ahead of us, this view opened up before our eyes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height={500}
                    className="d-block w-100"
                    src={travel3}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Editorial, Travel</h3>
                    <p>After hiking towards the roaring ocean with no idea what was ahead of us, this view opened up before our eyes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={500}
                    className="d-block w-100"
                    src={travel4}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Editorial, Travel</h3>
                    <p>
                    This ocean view in Bodega Bay draws many visitors often to enjoy the waves and the shoreline with many opportunities for walking trails.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="container">
                <div className="row row-cols-12 row-cols-md-6 row-cols-lg-4 row-cols-xl-4 mx-auto my-5">
                {
                    travels.map(travel=><Travels
                        travel={travel}
                        key={travel.id}
                    ></Travels>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;