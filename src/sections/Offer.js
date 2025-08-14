import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../custom-slider.css';
import Form from './Form';


function Offer() {

    const marks = {
        0: '<20',
        1: '<50',
        2: '<100',
        3: '<200',
        4: '<300',
        5: '<400',
        6: '<500',
        7: '<700',
        8: '<1000',
        9: '1000+'
    };

    const [content, setContent] = useState(null);
    const [sliderValue, setSliderValue] = useState(2);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) return <div></div>;
    const { pricing } = content;

    const selectedRange = marks[sliderValue];

    return (
        <Container fluid className='offer align-content-center' id='offer'>
            <Container className='p-md-5 p-3'>
                <Col className='p-4'>
                    <h3>{pricing.title}</h3>

                    <p>{pricing.p1}</p>

                    <p>{pricing.p2}</p>

                    <h4 className='mt-5'>{pricing.header_workers}</h4>

                    <Row className="my-5">
                        <div className="custom-slider-wrapper">
                            <Slider
                                min={0}
                                max={9}
                                marks={marks}
                                step={1}
                                value={sliderValue}
                                onChange={setSliderValue}
                                included={false}
                            />
                        </div>
                    </Row>

                    <Row className='justify-content-center justify-content-md-start'>
                        <Button className='btn button-default' onClick={() => setIsFormOpen(true)}>
                            {pricing.button}
                        </Button>
                    </Row>

                    <Form
                        isOpen={isFormOpen}
                        onClose={() => setIsFormOpen(false)}
                        employeesRange={selectedRange}
                    />
                </Col>
            </Container>
        </Container>
    );
}

export default Offer;