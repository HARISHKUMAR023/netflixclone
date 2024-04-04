import React from 'react';
import { useClient } from 'next/client';

const Faq = () => {
    const client = useClient();
    const [expandedItems, setExpandedItems] = client.useState({});

    useEffect(() => {
        // This code block will run only on the client side
        // You can use client-side specific APIs here
        // Example:
        // const currentLocation = window.location.href;
        // console.log('Current URL:', currentLocation);
    }, []); // Empty dependency array ensures it runs only once on mount

    const faqItems = [
        { question: 'my question', answer: 'tech is very good' },
        // Add more FAQ items as needed
    ];

    const toggleAnswer = (index) => {
        setExpandedItems((prevExpandedItems) => ({
            ...prevExpandedItems,
            [index]: !prevExpandedItems[index],
        }));
    };

    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <ul>
                {faqItems.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => toggleAnswer(index)}>
                            {expandedItems[index] ? '-' : '+'}
                        </button>
                        <strong>{item.question}</strong>
                        {expandedItems[index] && <p>{item.answer}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Faq;
