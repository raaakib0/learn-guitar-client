import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';

const Category = () => {
    const totalCourse = useLoaderData();
    return (
        <div>
            <h2>Category {totalCourse.length}</h2>
            {
                totalCourse.map(course => <CourseDetails
                    key={course._id}
                    course={course}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Category;