import React, { useState,useNavigate } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const navigation = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://633d18697e19b17829073bf0.mockapi.io/fackData`, {
            firstName,
            lastName,
            checkbox
        })
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        navigation()
        
    }
    return (
        <div>
            <Form className="create-form" onSubmit={handleSubmit}>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}