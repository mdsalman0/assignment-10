import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
const Blogs = () => {
    return (
        <div style={{}} className='w-75 mx-auto mt-5 mb-5'>
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
                Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger's identity has been determined, the second step is verifying any special services the passenger has access to, whether it's flying first-class or visiting the VIP lounge.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;