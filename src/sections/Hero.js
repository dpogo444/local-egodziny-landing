import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import heroImage from '../images/hero.png';
import { tryFree } from '../functions/functions';
import { useState, useEffect } from "react";


function Hero() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) return <div></div>;
    const { hero } = content;

    return (
        <Container className='hero align-content-center'>
            <Row>
                <Col xs={12} md={6} className='text-md-start'>
                    <Row className='py-3'>
                        <h1>{hero.heading}</h1>
                    </Row>

                    <Row className='py-3'>
                        <p>{hero.p1}</p>
                        <p dangerouslySetInnerHTML={{ __html: content.hero.p2 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: content.hero.p3 }}></p>
                    </Row>

                    <Row className='py-3'>
                        <Col className='d-flex flex-row flex-md-column justify-content-evenly'>
                            <Button className='button-default d-block mb-3' onClick={tryFree}>
                                {hero.button1}
                            </Button>

                            <Button variant="outline-dark" className='outline mb-3 mb-md-0 me-md-3' href="/#functionality">
                                {hero.button2}
                            </Button>
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} md={6} className='d-md-block text-center'>
                    <Image fluid src={heroImage} />
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;