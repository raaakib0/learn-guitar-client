import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>Home Componet {allCourse.length}</h2>
            
            {
                allCourse.map(course => <CourseDetails
                    key={course._id}
                    course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Home;