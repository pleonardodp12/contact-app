import React, { useState } from 'react';
import styled from 'styled-components';
import ContactItem from './/Contacts';
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
    height:100px;
    background-color: #eee;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
`;
const Contacts = () => {


    return (
        <Wrapper>
            <Card />
            <ul>
                {CONTACTS.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </Wrapper>
    );
};

export default Contacts;