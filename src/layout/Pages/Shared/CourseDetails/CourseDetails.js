import React from 'react';
import { CardImg, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { _id, title, details, image_url } = course;
    return (

        <div >
            <Card className="text-center mb-4" >
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <CardImg variant='top' src={image_url} />
                    <Card.Text>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 150) + "..."} <Link to={`/course/${_id}`} >more</Link> </p>
                                : <p> {details} </p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>

    );
};

export default CourseDetails;