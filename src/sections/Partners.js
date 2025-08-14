import { Container, Image } from 'react-bootstrap';
import Slider from 'react-infinite-logo-slider';
import abovo from '../images/abovo.png';
import petrostal from '../images/petrostal.png';
import verisnet from '../images/verisnet.png';
import excento from '../images/excento.png';
import innova from '../images/innova.png';
import pg from '../images/pg.png';
import sanicom from '../images/sanicom.png';
import re_cruiter from '../images/re-cruiter.png';
import worksol from '../images/worksol.png';
import successful_people from '../images/successful_people.png';
import ewc from '../images/ewc.png'
import atile from '../images/atlie.png'
import { useState, useEffect } from 'react';


function Partners() {

    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch("/data/content.json")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);


    if (!content) return <div></div>;

    const { partners } = content;

    return (
        <>
            <Container className='p-4 p-md-5'>
                <h3 className='p-2 p-md-5'>
                    {partners.title}
                </h3>
            </Container>

            <Container fluid className='partners-slider'>
                <Slider
                    duration={40}
                    blurBorders={true}
                >
                    <Slider.Slide className="partners-slide">
                        <Image src={abovo} alt="abovo" className='w-36' />
                    </Slider.Slide>

                    <Slider.Slide className="partners-slide">
                        <Image src={re_cruiter} alt='re-cruiter' className='w-36' />
                    </Slider.Slide>

                    <Slider.Slide className="partners-slide">
                        <Image src={worksol} alt='worksol' className='w-36' />
                    </Slider.Slide>

                    <Slider.Slide className="partners-slide">
                        <Image src={excento} alt='excento' className='w-36' />
                    </Slider.Slide>

                    <Slider.Slide className="partners-slide">
                        <Image src={innova} alt='innova' className='w-36' />
                    </Slider.Slide>

                    <Slider.Slide className="partners-slide">
                        <Image src={pg} alt='pg' className='w-36' />
                    </Slider.Slide>

                    <Slider.Slide className="partners-slide">
                        <Image src={sanicom} alt='sanicom' className='w-36' />
                    </Slider.Slide>

                    <Slider.Slide className="partners-slide">
                        <Image src={successful_people} alt='successful_people' className='w-36' />
                    </Slider.Slide>
                    
                    <Slider.Slide className="partners-slide">
                        <Image src={ewc} alt='ewc' className='w-36' />
                    </Slider.Slide>
                    
                    <Slider.Slide className="partners-slide">
                        <Image src={atile} alt='atile' className='w-36' />
                    </Slider.Slide>
                </Slider>
            </Container>
        </>
    );
}

export default Partners;