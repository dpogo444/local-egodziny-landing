import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";


function FAQItem({item, index}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Accordion.Item eventKey={index}>
            <Accordion.Header onClick={handleToggle}>
                {isOpen ? <FaPlus className='faq-icon' /> : <FaPlus className='faq-icon' />}
                {/* <span className="dot"></span> */}

                {item.question}
            </Accordion.Header>

            <Accordion.Body>
                {item.answer}
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default FAQItem;