import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';
import "./Category.css";

const Category = () => {
    const totalCourse = useLoaderData();
    return (
        <div >
            <h2>Category {totalCourse.length}</h2>
            <div className='card-container'>
                {
                    totalCourse.map(course => <CourseDetails
                        key={course._id}
                        course={course}
                    ></CourseDetails>)
                }
            </div>
            
        </div>
    );
};

export default Category;