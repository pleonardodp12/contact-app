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
    background-color: #ffa500;

    & + & {
        margin-top:16px;
    }
`;

const Button = styled.button`
    background-color: white;
    border: none;
    font-size: 1em;
    border-radius: 8px;
    padding: 15px
`;

const ContactItem = ({ contact, onRemoveContact }: Props) => (
    <Card>
        <p>Nome: {contact.name}</p>
        <p>E-mail: {contact.email}</p>
        <p>Telefone: {contact.phoneNumber}</p>

        <Button onClick={() => onRemoveContact(contact.id)}>Excluir contato</Button>
    </Card>
);

export default ContactItem;