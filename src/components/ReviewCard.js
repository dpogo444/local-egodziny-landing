import { Card, Row, Col } from 'react-bootstrap';
import avatar from '../images/svgs/avatar.svg';


function ReviewCard({ props, cardImage }) {

    return (
        <Card className='p-3 m-3 rounded-5 shadow h-100'>
            <Card.Body className='d-flex flex-column h-100'>
                <Row className='flex-grow-1 mb-2'>
                    <Card.Text dangerouslySetInnerHTML={{ __html: props.text }} className='fs-5' />
                </Row>
                
                <Row>
                    <Col xs={5} className='d-flex flex-column align-items-center justify-content-center'>
                        <Card.Img src={cardImage} className='w-75 rounded-0' />
                    </Col>

                    <Col xs={7} className='d-flex flex-column justify-content-center ps-4'>
                        <Card.Title className='mb-0'>
                            {props.name}
                        </Card.Title>
                        <div>{props.position}</div>
                        <Card.Subtitle className='text-muted'>
                            {props.company}
                        </Card.Subtitle>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;