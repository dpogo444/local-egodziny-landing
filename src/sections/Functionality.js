import { Container } from 'react-bootstrap';
import FunctionalityRow from '../components/FunctionalityRow';
import content from "../data/content.json";


function Functionality() {

    const { functionality } = content;

    return (
        <Container className='functionality p-4 p-md-5' id="functionality">
            <h3 className='p-2 p-md-5'>
                {functionality.title}
            </h3>

            {functionality.list.map(item => (
                <FunctionalityRow key={item.title} item={item} />
            ))}
        </Container>
    );
}

export default Functionality;