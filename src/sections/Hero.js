import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import heroImage from '../images/hero.png';
import { useState, useEffect } from "react";
import { AnalyticsHandle } from '../components/AnalyticsHandle';


function Hero() {

    const [content, setContent] = useState(null);
    const { logAnalyticsEvent } = AnalyticsHandle();

    const handleButtonClick = (buttonName) => {
        logAnalyticsEvent('hero_button_click', {
            button_name: buttonName,
            timestamp: new Date().toISOString()
        });
        // open url in new tab
        if(buttonName === "try_free_hero") {
            window.open('https://calendly.com/krzysztof-warda-egodziny/30min', '_blank');
        }
    }

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
                        <h1 className='title_hero'>{hero.heading}</h1>
                    </Row>

                    <Row className='py-3 mb-5'>
                        <p className='text_hero'>{hero.p1}</p>
                        <p className='text_hero' dangerouslySetInnerHTML={{ __html: content.hero.p2 }} style={{ color: '#0066cc' }}></p>
                    </Row>
                    <Row className='d-md-none text-center py-3 mb-4'>
                        <Col>
                            <Image style={{width: '400px'}} fluid src={heroImage} alt="Aplikacja eGodziny" className="mobile-hero-image" />
                        </Col>
                    </Row>

                    <Row className='py-3 test_buttons'>
                        <Button className='button-default d-block mb-3' onClick={() => { handleButtonClick('try_free_hero'); }}>
                            {hero.button1}
                        </Button>

                        <Button variant="outline-dark" className='outline mb-3' href="/#functionality" onClick={() => handleButtonClick('check_system_hero')}>
                            {hero.button2}
                        </Button>
                    </Row>

                    <div className="buttons-container">
                        {[hero.button_info1, hero.button_info2, hero.button_info3, hero.button_info4, hero.button_info5, hero.button_info6].map((btn, i) => (
                            <Button className="button-info" key={i}>
                                <span className="material-icons">{btn.icon}</span>
                                <span>{btn.text}</span>
                            </Button>
                        ))}
                    </div>

                </Col>

                <Col xs={12} md={6} className='d-none d-md-block text-center'>
                    <Image fluid src={heroImage} />
                </Col>
            </Row>
        </Container>
    );
}

export default Hero;