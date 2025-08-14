import { Container, Row, Col } from 'react-bootstrap';
import ReviewCard from '../components/ReviewCard';
import { useState, useEffect } from "react";
import verisnet from '../images/verisnet_raw.png';
import petrostal from '../images/petrostal_raw.png';


function Reviews() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) return <div></div>;
    const { reviews } = content;

    return (
        <Container className='reviews py-5'>
            <Row>
                <Col xs={12} md={6} className='mb-5'>
                    <ReviewCard props={reviews.col1} cardImage={verisnet} />
                </Col>

                <Col xs={12} md={6} className='mb-5'>
                    <ReviewCard props={reviews.col2} cardImage={petrostal} />
                </Col>
            </Row>
        </Container>
    );
}

export default Reviews;