import React from 'react';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import { Button, ButtonGroup } from 'react-bootstrap';
import CarouselCourse from '../Carousel/CarouselCourse';

const RightSideNav = () => {
    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Google</Button>
                    <Button variant='outline-primary'> <FaFacebook></FaFacebook> Facebook</Button>
                </ButtonGroup>
            </div>
            <div>
                <CarouselCourse></CarouselCourse>
            </div>
       </div>
    );
};

export default RightSideNav;