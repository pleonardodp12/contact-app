import React, { useState } from 'react';
import styled from 'styled-components';
import CONTACTS from '../contacts';
import ContactItem from '../components/Contactitem';
import  AddContactForm from '../components/AddContactForm';
import Contact from '../models/Contact';


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
    background-color: #008080;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    overflow-y: auto;
`;

const ContactsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Contacts = () => {
    const [isAddingContact, setAddingContact] = useState(false);

    const [contacts, setContacts] = useState(CONTACTS);

    const handleRemoveContact = (removeContactId: string) => {
        setContacts(contacts =>
            contacts.filter(contact => contact.id !== removeContactId)
        );
    };

    const handleAddContact = (contact: Contact) => {
        setContacts(contacts => contacts.concat(contact));
        setAddingContact(false);
    };

    return (
        <Wrapper>
            <Card>
            <header>
                {isAddingContact && (<AddContactForm onAddContact={handleAddContact}/>)}
                <button onClick={()=>setAddingContact(true)}>
                    Adicionar contato
                </button>
            </header>
            <ContactsList>
                {contacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                    onRemoveContact={handleRemoveContact}
                />
                ))}
            </ContactsList>
            </Card>
        </Wrapper>
    );
};

export default Contacts;