import { Container, Row } from 'react-bootstrap';
import AnalyticsCol from '../components/AnalyticsCol';
import { useState, useEffect } from "react";



function Analytics() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) return <div></div>;

    // Destrukturyzacja obiektu content.analytics
    const { col1, col2, col3 } = content.analytics;

    return (
        <Container fluid className='analytics py-5'>
            <Row className='justify-content-evenly py-5'>
                <AnalyticsCol data={col1} />

                <AnalyticsCol data={col2} />

                <AnalyticsCol data={col3} />
            </Row>
        </Container>
    );
}

export default Analytics;