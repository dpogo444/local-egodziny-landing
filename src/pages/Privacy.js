import { Container, Row } from 'react-bootstrap';

import Footer from '../sections/Footer';
import Menu from '../sections/Menu';

function Privacy() {

  // const analytics = getAnalytics();
  // logEvent(analytics, 'privacy_view');

  return (
    <>
      <Menu />

      <Container className='my-4'>
        <Row className='py-3'>
          <h3>Polityka Prywatności</h3>
          <p>
            Niniejszy dokument jest integralną częścią Regulaminu eGodziny  („Regulamin”). Pojęcia użyte w niniejszym dokumencie zostały zdefiniowane w Regulaminie, a jego postanowienia stosuje się odpowiednio.
            <br /><br />
            Polityka ta pełni funkcję informacyjną i stanowi realizację obowiązków informacyjnych nałożonych na administratora danych przez Ogólne Rozporządzenie o Ochronie Danych Osobowych, czyli RODO.
          </p>
        </Row>

        <Row className='py-3'>
          <h5>§ 1 ADMINISTRATOR DANYCH OSOBOWYCH</h5>
          <p>
            Podmiotem odpowiedzialnym za przetwarzanie danych osobowych w ramach Aplikacji i Systemu eGodziny, dotyczących Umowy, w tym danych Użytkowników, jest Usługobiorca, czyli firma korzystająca z Aplikacji, z poniższym zastrzeżeniem.
            <br /><br />
            Administratorem danych osobowych Usługobiorców, czyli danych związanych z zawieraniem umów o świadczenie usług online, subskrypcją materiałów promocyjnych, reklamacjami oraz tworzeniem kopii zapasowych, jest Usługodawca – Verisnet sp. z o.o., z siedzibą w Bąkowie, przy ul. Wiśniowy Sad 6, 483-050 BĄKOWO. Spółka ta jest zarejestrowana w Krajowym Rejestrze Sądowym pod numerem KRS: 0000842262, NIP: 5832951464, REGON: 220275100, a jej kapitał zakładowy wynosi 820 000,00 zł.
          </p>
        </Row>

        <Row className='py-3'>
          <h5>§ 2 CELE, PODSTAWY, ZAKRES I OKRES PRZETWARZANIA DANYCH OSOBOWYCH</h5>
          <p>
            Usługodawca przetwarza następujące kategorie danych osobowych dotyczących Usługobiorców: imię, nazwisko, nazwę firmy, numer NIP, adres e-mail, adres IP oraz dane o lokalizacji geograficznej. W odniesieniu do danych osobowych Użytkowników, Usługodawca może przetwarzać imię, nazwisko oraz adres e-mail.
            <br /><br />
            Poniżej opisano cele przetwarzania danych, ich podstawy prawne, zakres danych oraz okresy ich przetwarzania:
            <br /><br />
            A)	Utworzenie Konta przez Usługobiorcę: dane obejmują adres IP i adres e-mail; podstawa prawna to art. 6 ust. 1 lit. b RODO – przetwarzanie niezbędne do realizacji umowy lub działań przedumownych; dane będą przechowywane do czasu przedawnienia roszczeń związanych z użytkowaniem Konta.<br />
            B)	Świadczenie usług na rzecz Usługobiorców: dane obejmują adres e-mail, adres IP, imię, nazwisko, adres, firmę, lokalizację geograficzną; podstawa prawna to art. 6 ust. 1 lit. b RODO – przetwarzanie niezbędne do realizacji umowy. Dane będą przechowywane do przedawnienia roszczeń lub do momentu samodzielnego usunięcia danych przez Użytkownika lub wycofania zgody na przetwarzanie danych wrażliwych.<br />
            C)	Kontakt i korespondencja z osobami, których dane dotyczą: przetwarzane są imię, nazwisko, numer telefonu, adres e-mail oraz inne dane dobrowolnie podane przez osobę kontaktującą się; podstawa prawna to art. 6 ust. 1 lit. f RODO – uzasadniony interes Usługodawcy; dane będą przechowywane do zakończenia korespondencji lub zgłoszenia sprzeciwu przez osobę.<br />
            D)	Wystawianie dokumentów księgowych i prowadzenie ksiąg rachunkowych: przetwarzane są imię, nazwisko, dane płatnicze, nazwa firmy, numer NIP; podstawa prawna to art. 6 ust. 1 lit. c RODO – realizacja obowiązków prawnych; dane będą przechowywane zgodnie z terminami prawnymi dotyczącymi dokumentów księgowych.<br />
            E)	Analiza ruchu w Aplikacji i Systemie: dane obejmują adres IP, pliki cookies oraz identyfikatory internetowe; podstawa prawna to art. 6 ust. 1 lit. a RODO – zgoda użytkownika; dane są przetwarzane do momentu, gdy stracą przydatność lub do wycofania zgody.
            F)	Przesyłanie Newslettera i informacji o nowościach: przetwarzane są imię, nazwisko, adres e-mail; podstawa prawna to art. 6 ust. 1 lit. a RODO – zgoda osoby lub art. 6 ust. 1 lit. f RODO – uzasadniony interes Usługodawcy; dane będą przechowywane do momentu utraty przydatności lub wycofania zgody.<br />
            G)	Usługobiorcy mogą wyrazić zgodę na używanie plików cookies zgodnie z programami wskazanymi w ust. 7 Polityki.<br />
            H)	Usługodawca nie stosuje zautomatyzowanego podejmowania decyzji ani profilowania względem Usługobiorców i Użytkowników.<br />
            I)	Podanie danych osobowych jest dobrowolne, jednak ich brak uniemożliwia zawarcie Umowy, świadczenie Usług lub podejmowanie innych działań.
          </p>
        </Row>

        <Row className='py-3'>
          <h5>§ 3 ODBIORCY DANYCH OSOBOWYCH</h5>
          <p>
            Usługodawca może powierzać przetwarzanie danych osobowych Usługobiorców i Użytkowników podmiotom zewnętrznym. Odbiorcami tych danych są m.in.: biuro rachunkowe, dostawca usług hostingowych dla Systemu oraz firma dostarczająca system CRM. Dane mogą być również udostępniane organom państwowym na ich żądanie, zgodnie z przepisami prawa, a także innym osobom i podmiotom, tylko w przypadku,  gdy wymagają tego przepisy prawne.<br /><br />
            Dane osobowe Usługobiorców i Użytkowników nie będą przekazywane poza Europejski Obszar Gospodarczy (EOG).
          </p>
        </Row>

        <Row className='py-3'>
          <h5>§ 4 USŁUGOBIORCA JAKO ADMINISTRATOR DANYCH OSOBOWYCH</h5>
          <p>
            Usługobiorca będzie przetwarzał dane osobowe w ramach Aplikacji jako administrator tych danych, aby realizować cele związane z zatrudnieniem (zarówno w ramach umów o pracę, jak i innych umów cywilnoprawnych) oraz prowadzeniem dokumentacji kadrowej. Dane te będą przetwarzane w zakresie i przez okres niezbędny do wypełnienia obowiązków wynikających z Kodeksu pracy oraz innych przepisów dotyczących umów cywilnoprawnych.
            <br /><br />
            Usługobiorca zobowiązuje się do przetwarzania w Aplikacji jedynie tych danych osobowych, do których ma pełne prawo, które nie naruszają praw osób trzecich i dla których może wykazać odpowiednią podstawę prawną zgodną z Regulaminem i Polityką Prywatności.
            <br /><br />
            Usługobiorca powierza Usługodawcy przetwarzanie danych osobowych przekazanych w ramach Konta, w tym danych Użytkowników, przez okres obowiązywania Umowy, chyba że istnieje inna podstawa prawna dla kontynuacji przetwarzania.
            <br /><br />
            Przekazanie danych następuje w celu realizacji usług świadczonych przez Usługodawcę, związanych z rejestracją i zarządzaniem czasem pracy osób zatrudnionych przez Usługobiorcę, a także w celu realizacji praw i zobowiązań Użytkowników określonych w Regulaminie.
            <br /><br />
            Za zgodą Usługobiorcy, Usługodawca może powierzać dalsze przetwarzanie danych innym podmiotom w celu ich przechowywania, pod warunkiem, że zapewniają one odpowiedni poziom bezpieczeństwa zgodnie z wymaganiami RODO.
            <br /><br />
            Szczegółowe zasady przetwarzania danych przez Usługodawcę w imieniu Usługobiorcy są określone w odrębnym porozumieniu (umowie powierzenia przetwarzania danych) zawartym między stronami.
          </p>
        </Row>

        <Row className='py-3'>
          <h5>§ 5 BEZPIECZEŃSTWO PRZETWARZANIA</h5>
          <p>
            Usługodawca zapewnia, że jako Administrator danych oraz Podmiot przetwarzający dane osobowe na zlecenie Usługobiorcy, wdrożył wszelkie wymagane środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo zbiorów danych i ich przetwarzania, zgodnie z przepisami art. 25, 30, 32-34, 35-39 RODO.
            Dostęp do danych osobowych posiadają jedynie osoby upoważnione do zarządzania Systemem, które mają nadane odpowiednie uprawnienia i złożyły deklaracje o zachowaniu poufności dotyczącej danych oraz stosowanych zabezpieczeń. Pliki z logami mogą być wykorzystywane do analizy w celu sporządzania statystyk ruchu w Seystemie oraz identyfikacji błędów.
            Dodatkowe informacje dotyczące bezpieczeństwa danych znajdują się w Regulaminie.
          </p>
        </Row>

        <Row className='py-3'>
          <h5>§ 6 PRAWA PODMIOTÓW DANYCH</h5>
          <p>
            Usługodawca informuje, że Użytkownicy, których dane osobowe są przetwarzane przez Usługodawcę jako administratora, mają prawo do dostępu do swoich danych oraz ich poprawiania. Mają również prawo do nadzorowania przetwarzania swoich danych, w tym do: i) uzyskania dostępu do danych osobowych, ii) uzupełnienia lub poprawienia danych na wniosek, iii) żądania czasowego lub trwałego wstrzymania przetwarzania albo ich usunięcia, jeśli dane są niekompletne, nieaktualne, nieprawdziwe, zebrane niezgodnie z prawem lub zbędne do realizacji celu, dla którego były zgromadzone, iv) wniesienia sprzeciwu wobec przetwarzania, oraz v) żądania usunięcia danych, gdy przestaną być potrzebne do realizacji celu.
            Dodatkowo, Użytkownicy mają prawo do: usunięcia danych z systemów Usługodawcy oraz baz podmiotów współpracujących, złożenia sprzeciwu wobec przetwarzania danych w celach marketingowych, ograniczenia przetwarzania, przenoszenia danych osobowych w ustrukturyzowanej formie, wniesienia skargi do organu nadzorczego, jeśli uważają, że ich dane są przetwarzane niezgodnie z prawem, oraz prawo do ochrony prawnej przed sądem przeciwko organowi nadzorczemu lub podmiotowi naruszającemu przepisy.
            W sytuacjach, gdy administratorem danych jest Usługobiorca, to on odpowiada za realizację praw Użytkowników opisanych powyżej. Usługodawca zobowiązuje się do niezwłocznego poinformowania Usługobiorcy o wnioskach zgłoszonych przez Użytkowników będących jego pracownikami.
          </p>
        </Row>

        <Row className='py-3'>
          <h5>§ 7 POLITYKA COOKIES I INNYCH PROGRAMÓW</h5>
          <p>
            Aplikacja, działając jako strona internetowa otwierana za pomocą przeglądarki Użytkownika, wykorzystuje oprogramowanie, które nie jest integralną częścią usług opisanych w Regulaminie. Poniżej wymienione są rodzaje tego oprogramowania.
            Aplikacja używa plików cookies (tzw. ciasteczek) w celu przechowywania sesji i zapamiętywania podstawowych informacji logowania. Usługobiorca ma możliwość zmiany ustawień cookies w swojej przeglądarce internetowej, jednak dla prawidłowego działania Aplikacji wymagana jest aktywacja plików cookies sesyjnych na czas trwania sesji. Usługobiorca może również udzielić zgody na stosowanie cookies pochodzących od zewnętrznych dostawców, zmieniając ustawienia przeglądarki lub konfigurację w ramach Aplikacji. Brak zgody na cookies zewnętrzne nie wpłynie na dostępność funkcji Systemu dla Usługobiorcy lub Użytkownika.
            Za zgodą Usługobiorcy, Aplikacja może korzystać z programów analizujących aktywność Użytkowników, takich jak monitorowanie ruchu na ekranach oraz liczby kliknięć, aby lepiej dostosować interfejs Aplikacji do ich potrzeb. Programy te nie zbierają danych osobowych.
            Programy wymienione w ust. 7.3 nie angażują się w przetwarzanie danych osobowych.
            W przypadku wyrażenia zgody przez Użytkownika, dane zawarte w plikach cookies mogą być udostępniane Google. Szczegółowe informacje na temat celów, sposobu oraz zasad przetwarzania tych danych przez Google znajdują się w Polityce Prywatności Google (https://policies.google.com/privacy) oraz Warunkach korzystania z usług Google (https://policies.google.com/technologies/partner-sites).
          </p>
        </Row>
      </ Container>

      <Footer />
    </>
  );
}

export default Privacy;
