import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-5 mb-5'>
           <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                The reason for using Firebase is that we can use a lot of authentication using Firebase. For example: Google, Facebook, GitHub, Login etc.Yes, there are some options for implementing authentication. Such as mongoDb, passport, okta, OAuth etc.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                <Accordion.Body>
                We know that the most widely used services for this purpose are Cloud Messaging, Authentication, Dynamic Links, Forecasting, Google Analytics and Remote Config. Let's discuss these services in detail.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                <Accordion.Body>
                Authentication: The process of determining whether someone, something, or someone's act (which is claimed to be correct) is actually true. Authorization: Allowing someone to do something or use a recourse.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;