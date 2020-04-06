import React, { useState } from 'react'
import { FormContainer } from '../styles/components/FormContainer'
import { SoftElement } from '../styles/components/SoftElement'
import { Button } from '../styles/components/Button'

const ContactForm = () => {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [textInput, setTextInput] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        console.log(nameInput)
        console.log(emailInput)
        console.log(textInput)
    }

    return (
        <FormContainer onSubmit={e => submitForm(e)}>
            <SoftElement className="input-wrapper">
                <input 
                    type="text" 
                    placeholder="Tell me your name"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                />
            </SoftElement>
            <SoftElement className="input-wrapper">
                <input 
                    type="email" 
                    placeholder="What's your email?"
                    value={emailInput}
                    onChange={e => setEmailInput(e.target.value)}
                />
            </SoftElement>
            <SoftElement className="input-wrapper">
                <textarea
                    placeholder="Write your message"
                    value={textInput}
                    onChange={e => setTextInput(e.target.value)}
                ></textarea>
            </SoftElement>
            <Button big>Send message</Button>
        </FormContainer>
    )
}

export default ContactForm