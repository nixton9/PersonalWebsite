---
path: '/tips/post-265'
date: '2021-02-17'
title: 'Testing your app easily with Cypress'
languages: ['Javascript', 'Cypress']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1613575316/265-1_npikfq.png'
description: 'How to use Cypress for End to End testing'
number: 265
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1613575330/265-2_oot2ki.gif 'Cypress testing')

End to end testing made simple 🔥🔥

Yoo guys, what's up? Today we have a really cool tip on Cypress: a powerful JavaScript testing framework.

End to end testing (or E2E) refers to testing the workflow of an application from beginning to end. It's something that if done correctly can give us much more confidence on our code and prevent a ton of bugs.

With Cypress, E2E is really simple. We just need to give some commands for Cypress to follow and it will launch a browser, follow these commands and check if everything is as it should be. Let's see a practical example.

```jsx
const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isFormSubmited, setIsFormSubmited] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    // Do some stuff with the form
    setIsFormSubmited(true)
  }

  return !isFormSubmited ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button>Send</button>
    </form>
  ) : (
    <div className="results">
      <h3>Form successfully submitted!</h3>
      <p>
        Your name is <span>{name}</span> and your email is <span>{email}</span>
      </p>
    </div>
  )
}

export default Form
```

So I have a really simple form made in React, that has an input for a name and another input for an email. When submitted, the firm should disappear and we should see a message that shows what the user has typed. Now let's write a test for it.

First, we need install Cypress with 'npm install cypress --save-dev'. Then we'll go to the folder 'cypress/integrations/' and create a file for the test with the name 'form.spec.js'. Let's write our tests for the Form component here.

```javascript
describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })

  it('shows the inputs and button', () => {
    cy.get('[data-test-id="name-input"]')
    cy.get('[data-test-id="email-input"]')
    cy.get('[data-test-id="submit-btn"]')
  })

  it('form fails if email is not an actual email', () => {
    cy.get('input:invalid').should('have.length', 0)
    cy.get('[data-test-id="name-input"]').type('John')
    cy.get('[data-test-id="email-input"]').type('test')
    cy.get('[data-test-id="submit-btn"]').click()
    cy.get('input:invalid').should('have.length', 1)
  })

  it('displays message with name and email after submitting form', () => {
    cy.get('[data-test-id="name-input"]').type('John')
    cy.get('[data-test-id="email-input"]').type('test@gmail.com')
    cy.get('[data-test-id="submit-btn"]').click()
    cy.contains('Form successfully submitted!')
    cy.contains('John')
    cy.contains('test@gmail.com')
  })
})
```

Before each test we want Cypress to navigate to our app so we use 'cypress.visit' with the URL of our app. Then, each test will be inside a 'it' method. On the first one, we just check if all the inputs are there using 'cypress.get'. If one of the inputs can't be found, the test will fail. On the second test we'll make sure that the email input only accepts emails format. On the third test we'll check if the message is displayed after the form is submitted.

Now we can run Cypress with 'npx cypress run' and it will run the tests without us seeing it or can open Cypress with 'npx cypress open' and we'll be able to see the actual browser moving around as Cypress is performing the tests. It's awesome!

How about you guys? Have you ever tried Cypress? Or do you prefer other testing libraries/frameworks? Let me know in the comments 👇
