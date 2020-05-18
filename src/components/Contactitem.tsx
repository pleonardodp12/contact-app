import React from 'react';
import Contact from "../models/Contact";
import styled from 'styled-components';

type Props = {
    contact: Contact;
    onRemoveContact: (id: string) => void;
};

const Card = styled.li`
    padding: 16px;
    border-radius: 20px;
    background-color: #40E0D0;

    & + & {
        margin-top:16px;
    }

`;

const ContactItem = ({ contact, onRemoveContact }: Props) => (
    <Card>
        <p>Nome: {contact.name}</p>
        <p>E-mail: {contact.email}</p>
        <p>Telefone: {contact.phoneNumber}</p>

        <button onClick={() => onRemoveContact(contact.id)}>Excluir contato</button>
    </Card>
);

export default ContactItem;