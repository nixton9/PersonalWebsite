import React from 'react'
import { FormContainer } from '../styles/components/FormContainer'
import { SoftElement } from '../styles/components/SoftElement'
import { Button } from '../styles/components/Button'

const ContactForm = () => {

    return (
        <FormContainer name="contact" method="POST" data-netlify="true">
            <SoftElement className="input-wrapper">
                <input 
                    type="text" 
                    placeholder="Tell me your name"
                    name="name"
                />
            </SoftElement>
            <SoftElement className="input-wrapper">
                <input 
                    type="email" 
                    placeholder="What's your email?"
                    name="email"
                />
            </SoftElement>
            <SoftElement className="input-wrapper">
                <textarea
                    placeholder="Write your message"
                    name="message"
                ></textarea>
            </SoftElement>
            <Button className="bg-hover" big>Send message</Button>
        </FormContainer>
    )
}

export default ContactForm