import React, { useState, FormEvent} from 'react';
import { v4 as uuid } from 'uuid';
import Contact from '../models/Contact';

type Props = {
    onAddContact: (contact: Contact) => void;
};

const AddContactForm = ({ onAddContact }: Props) => {
    const [name, setName] =  useState('');
    const [email, setEmail] =  useState('');
    const [phoneNumber, setPhoneNumber] =  useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddContact({
            id: uuid(),
            name,
            email,
            phoneNumber
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="input-name">Nome</label>
                <input id="input-name" type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="input-name">E-mail</label>
                <input id="input-name" type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="input-name">Telefone</label>
                <input id="input-name" type="number" value={phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}/>
            </div>
            <button type="submit"> Criar contato</button>
        </form>
    );
};

export default AddContactForm;