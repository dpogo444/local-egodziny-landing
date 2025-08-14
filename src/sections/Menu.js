import React, { useState, useEffect } from 'react';
import logo from '../images/svgs/logo.svg';
import appStoreLogo from '../images/svgs/appstore.svg';
import googlePlayLogo from '../images/svgs/android.svg';
import { Navbar, Nav, Button, Image, Container } from 'react-bootstrap';
import { Fade as Hamburger } from 'hamburger-react'
import { scrollToTop, login } from '../functions/functions';
import { AnalyticsHandle } from '../components/AnalyticsHandle';



function MenuBar() {

  const [content, setContent] = useState(null);
  const { logAnalyticsEvent } = AnalyticsHandle();

  const handleNavClick = (linkName) => {
    logAnalyticsEvent('menu_click', { 
      link_name: linkName,
      timestamp: new Date().toISOString()
    });
  }

  useEffect(() => {
      fetch("/data/content.json")
          .then((res) => res.json())
          .then((data) => setContent(data))
          .catch((error) => console.error("Error loading JSON:", error));

    // scrollFunction();

    // window.addEventListener('scroll', scrollFunction);

    // return () => {
    //   window.removeEventListener('scroll', scrollFunction);
    // };
  }, []);

  if (!content) return <div></div>;
  const { navbar } = content;

  return (
    <>
      <Navbar id="navbar" expand="lg" className='p-0' sticky="top">
        <Container className='menubar' fluid>
          <Navbar.Brand href="/">
            <Image 
            src={logo} 
            onClick={() => {
              scrollToTop();
              handleNavClick('logo');
            }} 
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Hamburger direction='right' color='white'></Hamburger>
          </ Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto align-items-center'>
              <Nav.Link 
                href="/#functionality"
                className='text-white'
                onClick={() => {handleNavClick('functionality_menu')}}
              >
                {navbar.functions}
              </Nav.Link>

              <Nav.Link 
              href="/#offer" 
              className='text-white'
              onClick={() => {handleNavClick('offer')}}
              >
                {navbar.pricing}
              </Nav.Link>

              <Nav.Link 
              href="/#faq" 
              className='text-white'
              onClick={() => {handleNavClick('faq')}}
              >
                {navbar.faq}
              </Nav.Link>

              <Nav.Link href="/blog" className='text-white'>
                {navbar.blog}
              </Nav.Link>
            </Nav>

            <Nav className='ms-auto align-items-center'>
              <Nav.Link 
              href="https://play.google.com/store/apps/details?id=pl.egodziny.egodziny_mobile_app&pcampaignid=web_share" 
              target='_blank'
              onClick={() => {handleNavClick('google_play')}}
              >
                <Image src={googlePlayLogo} />
              </Nav.Link>

              <Nav.Link 
              href="https://apps.apple.com/pl/app/egodziny/id6738045022?l=pl" 
              target='_blank'
              onClick={() => {handleNavClick('app_store')}}
              >
                <Image src={appStoreLogo} />
              </Nav.Link>

              <Nav.Link>
                <Button 
                className="login button-default hidden-in-menu"
                onClick={() => {
                  login(); 
                  handleNavClick('login')
                  }}
                >
                  {navbar.login}
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
}

export default MenuBar;
