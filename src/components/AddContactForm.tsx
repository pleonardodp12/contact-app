import React, { useState, FormEvent} from 'react';
import { v4 as uuid } from 'uuid';
import Contact from '../models/Contact';
import styled from 'styled-components';


type Props = {
    onAddContact: (contact: Contact) => void;
};

const Form = styled.form`
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
    margin-bottom: 0.5em;
	color: white;
    display: flex;
    font-weight: bold;
`;
const Input = styled.input`
    padding: 0.5em;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
    font-weight: bold;
	margin-bottom: 0.5em;
`;

const Button = styled.button`
    background-color: white;
    border: none;
    font-size: 1em;
    border-radius: 8px;
    padding: 15px
`;


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
        <Form>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="input-name">Nome</Label>
                    <Input id="input-name" type="text" value={name} onChange={(event)=>setName(event.target.value)}/>
                </div>
                <div>
                    <Label htmlFor="input-name">E-mail</Label>
                    <Input id="input-name" type="email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div>
                    <Label htmlFor="input-name">Telefone</Label>
                    <Input id="input-name" type="number" value={phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)}/>
                </div>
                <Button type="submit"> Criar contato</Button>
            </form>
        </Form>
    );
};

export default AddContactForm;