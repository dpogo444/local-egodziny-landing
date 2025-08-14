import React from 'react';
import { Col } from 'react-bootstrap';


function AnalyticsCol({ data }) {

    return (
        <Col xs={12} md={3} className='py-5 analytics_dot'>
            <h2 style={{ fontSize: '68px' }}>{data.percent}</h2>
            <h4 className='header_analytics'>{data.heading}</h4>
            <p className='header_p'>{data.p1}</p>
            <p className='header_p'>{data.p2}</p>
            <p className='header_p'>{data.p3}</p>
        </Col>
    );
}

export default AnalyticsCol;