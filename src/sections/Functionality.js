import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import FunctionalityRow from '../components/FunctionalityRow';
import obszar_lokalizacji from '../videos/1_obszar_lokalizacji.mp4';
import dodawanie_grafiku from '../videos/2_dodawanie_grafiku.mp4';
import start_stop from '../videos/3_start_stop.mp4';
import weryfikacja_obecnosci from '../videos/4_weryfikacja_obecnosci.mp4';
import export_ from '../videos/5_export.mp4';


function Functionality() {
    const [content, setContent] = useState(null);
    
    useEffect(() => {
            fetch("/data/content.json")
                .then((res) => res.json())
                .then((data) => setContent(data))
                .catch((error) => console.error("Error loading JSON:", error));
        }, []);
    

    if (!content) return <div></div>;
    const { functionality } = content;
    const videos = {
        1: obszar_lokalizacji,
        2: dodawanie_grafiku,
        3: start_stop,
        4: weryfikacja_obecnosci,
        5: export_,
    };


    return (
        <Container className='functionality p-4 p-md-5' id="functionality">
            <h3 className='p-2 p-md-5'>
                {functionality.title}
            </h3>

            {functionality.list.map(item => (
                <FunctionalityRow key={item.title} item={item} video={videos[item.idx]} />
            ))}
        </Container>
    );
}

export default Functionality;