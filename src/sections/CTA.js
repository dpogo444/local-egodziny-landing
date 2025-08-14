import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import macbook from '../images/macbook.png';
import { tryFree } from '../functions/functions';
import { useState, useEffect } from "react";


function CallToAction() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) return <div></div>;

    const { cta } = content;

    return (
        <Container className='cta py-5'>
            <Row className='text-md-start p-2'>
                <Col xs={12} md={6} className='d-flex justify-content-center'>
                    <Image fluid src={macbook} />
                </Col>

                <Col className='py-5 d-flex flex-column align-items-center align-items-md-start'>
                    <h4>{cta.title}</h4>

                    <p>{cta.p1}</p>
                    <p>{cta.p2}</p>

                    <Button className='button-default mt-auto' onClick={tryFree}>
                        {cta.button}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CallToAction;