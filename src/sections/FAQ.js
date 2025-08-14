import { Container, Row, Col, Accordion } from 'react-bootstrap';
import FAQItem from '../components/FAQItem.js';
import { useState, useEffect } from "react";
import { AnalyticsHandle } from '../components/AnalyticsHandle.js';

function FAQ() {

    const [content, setContent] = useState(null);
    const { logAnalyticsEvent } = AnalyticsHandle();
    
    const handleFAQClick = (question) => {
        logAnalyticsEvent('faq_click', {
            question: question,
            timestamp: new Date().toISOString()
        });
    };

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) return <div></div>;

    const { faq } = content;

    return (
        <Container fluid id='faq' className='faq p-md-5'>
            <Row className='p-md-5 p-3'>
                <Col>
                    <h3>{faq.title}</h3>

                    <Accordion defaultActiveKey="0" className='p-md-3'>
                        {faq.questions.map((item, index) => (
                            <FAQItem key={item.answer} item={item} index={index} onClick={handleFAQClick(`FAQ question number: ${index}`)} />
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default FAQ;