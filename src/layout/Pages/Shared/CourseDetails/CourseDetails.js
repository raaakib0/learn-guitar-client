import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
   const { _id, title, author, details, image_url, total_view } = course;
    return (
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 250) + "..."} <Link to={`/course/${_id}`} >more</Link> </p>
                            : <p> {details} </p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CourseDetails;