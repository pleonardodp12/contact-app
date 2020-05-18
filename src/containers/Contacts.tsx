import React, { useState } from 'react';
import styled from 'styled-components';
import ContactItem from '../components/Contactitem';
import CONTACTS from '../contacts'

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Card = styled.div`
    width:768px;
    padding: 16px;
    background-color: #eee;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    overflow-y: auto;
`;

const Contacts = () => {
    const [contacts, setContacts] = useState(CONTACTS);

    const handleRemoveContact = (removeContactId: string) => {
        setContacts(contacts =>
            contacts.filter(contact => contact.id !== removeContactId)
        );
    };

    return (
        <Wrapper>
            <Card>
            <ul>
                {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onRemoveContact={handleRemoveContact}
                />
                ))}
            </ul>
            </Card>
        </Wrapper>
    );
};

export default Contacts;