import { Card, Row, Col } from 'react-bootstrap';
import avatar from '../images/svgs/avatar.svg';


function ReviewCard({ props }) {

    return (
        <Card className='p-3 m-3 rounded-5 shadow'>
            <Card.Body>
                <Row className='mb-3'>
                    <Col className='col-4 justify-content-center'>
                        <Card.Img src={avatar} className='reviewers-avatar' />
                    </Col>

                    <Col className='border-bottom border-4 border-primary'>
                        <Card.Title>
                            {props.name}
                            <br />
                            {props.position}
                        </Card.Title>

                        <Card.Subtitle>
                            {props.company}
                        </Card.Subtitle>
                    </Col>
                </Row>

                <Row>
                    <Card.Text dangerouslySetInnerHTML={{ __html: props.text }} />
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ReviewCard;