import React from "react";
import { Row, Col, Image } from "react-bootstrap";


function FunctionalityRow({ item }) {

    return (
        <>
            <Row className="px-md-5">
                <Col md={1} xs={1}>
                    <span className="dot"></span>
                </Col>

                <Col>
                    <h4>
                        {item.title}
                    </h4>
                </Col>

                <Col className="d-none d-md-block">
                </Col>
            </Row >

            <Row className="flex-column flex-md-row">
                <Col md={1} className="d-none d-md-block">
                    <div className="vl"></div>
                </Col>

                <Col>
                    <Image src={item.image} className="img-fluid" />
                </Col>

                <Col className="justify-content-center px-4">
                    <p dangerouslySetInnerHTML={{ __html: item.p1 }} />

                    <p dangerouslySetInnerHTML={{ __html: item.p2 }} />
                </Col>
            </Row>
        </>

    )
}

export default FunctionalityRow;