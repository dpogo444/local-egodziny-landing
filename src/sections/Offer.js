import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { tryFree } from '../functions/functions';
import { useState, useEffect } from "react";

function Offer() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) return <div></div>;

    const { pricing } = content;

    return (
        <Container fluid className='offer p-md-5 align-content-center' id='offer'>
            <Row className='p-md-5 p-3'>
                <Col className='p-4'>
                    <h3>{pricing.title}</h3>

                    <p>{pricing.p1}</p>

                    <p>{pricing.p2}</p>

                    <p>{pricing.p3}</p>

                    <Row className='justify-content-center justify-content-md-start'>
                        <Button className='btn button-default' onClick={tryFree}>
                            {pricing.button}
                        </Button>
                    </Row>
                </Col>

                <Col className='p-4'>
                    <Row>
                        <Col className='text-center'>
                            <h4 className='pricing-header'>
                                {pricing.recommend.title}
                            </h4>

                            <Card className='pricing-card'>
                                <h4>
                                    {pricing.recommend.subtitle}
                                </h4>

                                <h2>
                                    {pricing.recommend.price}
                                </h2>

                                <p>
                                    {pricing.recommend.p1}
                                </p>

                                <p>
                                    {pricing.recommend.p2}
                                </p>
                            </Card>
                        </Col>

                        <Col className='text-center'>
                            <Card className='pricing-card mt-5 opacity-50'>
                                <h4>
                                    {pricing.trial.subtitle}
                                </h4>

                                <h2>
                                    {pricing.trial.price}
                                </h2>

                                <p>
                                    {pricing.trial.text}
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Offer;