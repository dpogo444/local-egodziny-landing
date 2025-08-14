import React from 'react';
import { Col } from 'react-bootstrap';


function AnalyticsCol({ data }) {

    return (
        <Col xs={12} md={3} className='py-5'>
            <h2 style={{ fontSize: '68px' }}>{data.percent}</h2>
            <h4>{data.heading}</h4>
            <p>{data.p1}</p>
        </Col>
    );
}

export default AnalyticsCol;