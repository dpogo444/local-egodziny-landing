import { getAnalytics, logEvent } from 'firebase/analytics';
import Footer from '../sections/Footer';
import { Container, Button } from 'react-bootstrap';
import Menu from '../sections/Menu';

function NotReady() {

  const analytics = getAnalytics();
  logEvent(analytics, 'play-button-clicked');

  return (
    <>
      <Menu />

      <Container className='not-ready text-center my-5'>
        <h3 className='py-3'>Ta strona nie jest jeszcze gotowa...</h3>

        <p>Dziękujęmy za zainteresowanie naszą aplikacją!</p>

        <br />
        <p>W międzyczasie zapraszamy do zapoznania się z naszą stroną internetową lub aplikacją mobilną.</p>

        <br />
        <p>Pozdrawiamy!</p>

        <p className='blue-text font-weight-bold'>Zespół eGodziny</p>

        <Button className='button-default my-5'>
          <a href='/' className='text-dark font-weight-bold'>
            Strona główna
          </a>
        </Button>

      </Container>
      <Footer />
    </>
  );
}

export default NotReady;
