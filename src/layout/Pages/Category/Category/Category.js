import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../Shared/CourseDetails/CourseDetails';

const Category = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>Category {course.length}</h2>
            {
                course.map(cours => <CourseDetails
                    key={cours._id}
                    cours ={cours}
                ></CourseDetails>)
            }
        </div>
    );
};

export default Category;