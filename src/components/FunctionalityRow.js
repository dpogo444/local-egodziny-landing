import React from "react";
import { Row, Col } from "react-bootstrap";


function FunctionalityRow({ item, video }) {

    return (
        <>
        <Row className="px-md-5 align-items-start col-h-600">
            <Col md={1} xs={2} className="d-flex flex-column align-items-center col-vl-full" >
                <span className="dot"></span>
                <div className="vl d-none d-md-block"></div>
            </Col>

            <Col md={3} xs={10}>
                <h4 className="title">
                    {item.title}
                </h4>
                <div className="mt-3">
                    <p dangerouslySetInnerHTML={{ __html: item.p1 }} className="content1" />
                    <p dangerouslySetInnerHTML={{ __html: item.p2 }} className="content2" />
                </div>
            </Col>

            <Col md={8} xs={12} className="d-flex justify-content-end">
                <video 
                    className="rounded-3"
                    autoPlay
                    loop 
                    muted 
                    playsInline
                    style={{width: '95%'}}
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Col>
        </Row>
        </>

    )
}

export default FunctionalityRow;