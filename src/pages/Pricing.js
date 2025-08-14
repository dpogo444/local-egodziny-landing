import { getAnalytics, logEvent } from 'firebase/analytics';
import { Button } from 'react-bootstrap';

import Footer from '../sections/Footer';
import Menu from '../sections/Menu';
import { tryFree } from '../functions/functions';

function Pricing() {

  const analytics = getAnalytics();
  logEvent(analytics, 'pricing_view');

  return (
    <div className="pricing">
      <Menu />

      <div className='title'>
        <p className='body5 blue-body'>PLAN MIESIĘCZNY LUB ROCZNY</p>
        <h3>Przejrzysty cennik bez ukrytych kosztów</h3>
        <p className='body5'>Brak opłaty licencyjnej lub opłaty za wdrożenie</p>
      </div>

      <div className='plans'>
        <div className='monthly'>
          <h4>Plan miesięczny</h4>
          <div>
            <h4>149zł</h4>
            <p className='body5'>za miesiąc</p>
          </div>
          <p className='body5'>+15zł za użytkownika</p>
        </div>

        <div className='yearly'>
          <h4>Plan roczny</h4>
          <div>
            <h4>109zł</h4>
            <p className='body5'><b>za miesiąc</b></p>
          </div>
          <p className='body5'><b>+12zł za użytkownika</b></p>
        </div>
      </div>

      <p className='body5'>Podane ceny są cenami netto.</p>

      <div className='quote-section'>
        <div className='quote'>
          <p className='body4'>Dzięki systemowi znacznie zaoszczędziliśmy czas potrzebny do ewidencji godzin pracy. <br /><b>Pracownicy rozliczają się<br className='display-on-mobile' /> zdalnie i samodzielnie</b>,<br />a Kadry i Zarząd mają wielopoziomowe raporty zawsze na czas.</p>
        </div>

        <div className='quote-author'>
          <h5 className='name'>Maciej P.</h5>
          <h5 className='role'>Prezes Zarządu</h5>
          <h5 className='company'>Verisnet sp. z.o.o.</h5>
        </div>

        <div className='quote-button'>
          <Button className="button-default" onClick={tryFree}>
            Rozpocznij darmowy okres próbny
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;
