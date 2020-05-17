import React from 'react';
import Contact from "../models/Contact";
type Props = {
    contact: Contact;
};

const ContactItem = ({ contact }: Props) => (
    <li>
        <div>
            <p>Nome: {contact.name}</p>
            <p>E-mail: {contact.email}</p>
            <p>Telefone: {contact.phoneNumber}</p>
        </div>
    </li>
);

export default ContactItem;