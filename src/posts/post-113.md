---
path: "/tips/post-113"
date: "2019-12-21"
title: "How to handle forms in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587499291/tips/113-1_t56gun.png'
description: 'Dealing with forms in React'
number: 113
status: true
---

`youtube: https://www.youtube.com/embed/ULI3vDd-lco`

So today I thought of showing you how to handle forms when using reactJS. Forms are a big part in any application and often play a big role in them.

Even though there are obviously different ways to handle forms in react, this is my preferred method and one of the simplest. Let's see how we can do this.

Using the useState hook we create a state with an object called 'formValues' that will have properties for each of the fields we need on the form. In this example we only have a simple mock form with 'name', 'email, and 'birth date'. So, we add all of these properties on our object and set their initial value to ' '.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587499385/tips/113-3_f1j0t7.png "Forms in React")

Then we create our form and inside it we will place whatever inputs we need. Here I'm creating three inputs for all the values described above.

Each input needs at least two important attributes - 'value' and 'onChange'. The 'value' will be the correspondent property of our 'formValues' state object. So for the 'name' input, the value will be 'formValues.name'. Doing this will make sure the inputs will always show the correct value everytime they are updated.

Now we need our 'onChange' for these inputs. What we want to de here is simply update the correspondent 'formValues' property so, we just need to do ' (e) => setFormValues({...formValues, name: e.target.value)} '. This will receive the event from the input, update the 'formValues' state object by keeping all properties the same, except for 'name' that will be the value of the input. -
Finally we just need to create a function that will be fired 'onSubmit' of our form, I called it - handleSubmit. This will receive the event from the form so the first thing we have to do is 'e.preventDefault()' to prevent the page from automatically reloading. Then we can basically do whatever we want with the values of the form just by using the 'formValues' object. And it's done! 🔥🔥