import React, { useEffect, useState } from 'react';
import {Carousel} from 'react-bootstrap'
import travel1 from '../../../Image/banner/travel-1.png'
import travel2 from '../../../Image/banner/travel-2.png'
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
                    height={450}
                    className="d-block w-100"
                    src={travel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height={450}
                    className="d-block w-100"
                    src={travel2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={450}
                    className="d-block w-100"
                    src={travel3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="container">
                <div className="row row-cols-12 row-cols-md-6 row-cols-lg-4 mx-auto my-5">
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