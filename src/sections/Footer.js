import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../functions/functions';
import { useState, useEffect } from "react";
import { AnalyticsHandle } from '../components/AnalyticsHandle';

function Footer() {
    const [content, setContent] = useState(null);
    const { logAnalyticsEvent } = AnalyticsHandle();

    const handleFooterClick = (linkName) => {
        logAnalyticsEvent('footer_click', {
            link_name: linkName,
            timestamp: new Date().toISOString()
        });
        scrollToTop();
    }

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    if (!content) {
        return <footer></footer>;
    }

    const { footer } = content;

    return (
        <footer>
            <Container className='footer-container'>
                <Row className='footer-row'>
                    <Col className='d-none d-md-block'>
                        <a href='/#functionality' className='menu-item hidden-in-menu' onClick={() => handleFooterClick('functionality_footer')}>
                            {footer.functions}
                        </a>
                    </Col>

                    <Col className='text-start text-md-center'>
                        <a href="/#functionality" className='menu-item hidden-in-menu' onClick={() => handleFooterClick('how_it_works_footer')}>
                            {footer.howItWorks}
                        </a>
                    </Col>

                    <Col className='d-none d-md-block' onClick={() => handleFooterClick('_footer')}>
                        {footer.aboutUs}
                    </Col>

                    <Col className='text-end text-md-center'>
                        {/* <Link to="/privacy" className='menu-item hidden-in-menu' onClick={scrollToTop}>
                            {footer.privacyPolicy}
                        </Link> */}
                    </Col>

                    <Col className='d-none d-md-block' onClick={() => handleFooterClick('contact_footer')}>
                        {footer.contact}
                    </Col>
                </Row>

                <Row className='footer-row'>
                    <Col className='d-none d-md-block'>
                        <a href="#offer" className='menu-item hidden-in-menu'>
                            {footer.pricing}
                        </a>
                    </Col>

                    <Col className='d-none d-md-block'></Col>
                    <Col className='d-none d-md-block'></Col>
                    <Col className='d-none d-md-block'></Col>

                    <Col className='text-end text-md-center'>
                        <a href='mailto:kontakt@egodziny.pl' className='footer-email' onClick={() => handleFooterClick('email_footer')}>
                            {footer.email}
                        </a>
                        <br className='d-none d-md-block' />
                        <a href='tel:+48515800125' className='footer-phone' onClick={() => handleFooterClick('phone_footer')}>
                            {footer.phone}
                        </a>
                    </Col>
                </Row>

                <Row className='footer-row'>
                    <Col className="text-center">
                        <h5 className="mb-0 footer-copyright">{footer.copyright}</h5>
                    </Col>
                    <Col className='d-none d-md-block'></Col>
                    <Col className='d-none d-md-block'></Col>
                    <Col className='d-none d-md-block'></Col>
                    <Col className="text-end text-md-center mt-md-3">
                        <a href="https://www.youtube.com/@egodziny" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-youtube" style={{ fontSize: "1.7rem", verticalAlign: "middle" }}></i>
                        </a>
                        <a href="https://www.linkedin.com/company/egodziny/" target="_blank" rel="noopener noreferrer" className="ms-3">
                            <i className="bi bi-linkedin" style={{ fontSize: "1.7rem", verticalAlign: "middle" }}></i>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
