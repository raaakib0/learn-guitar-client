import React from 'react';
// import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';
import './Home.css';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div >

            <h2>Home Componet {allCourse.length}</h2>
            <div className='card-container'>

                {
                    allCourse.map(course => <CourseDetails
                        key={course._id}
                        course={course}
                    ></CourseDetails>)
                }

            </div>



        </div>
    );
};

export default Home;