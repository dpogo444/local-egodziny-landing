import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import macbook from '../images/macbook.png';
import { useState, useEffect } from "react";
import { AnalyticsHandle } from '../components/AnalyticsHandle';


function CallToAction() {

    const [content, setContent] = useState(null);
    const { logAnalyticsEvent } = AnalyticsHandle();

    const handleButtonClick = (buttonName) => {
        logAnalyticsEvent('cta_button_click', {
            button_name: buttonName,
            timestamp: new Date().toISOString()
        });
        window.open('https://calendly.com/krzysztof-warda-egodziny/30min', '_blank');
    }

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

                    <Button className='button-default mt-auto' onClick={() => {handleButtonClick('try_free_cta');}}>
                        {cta.button}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CallToAction;