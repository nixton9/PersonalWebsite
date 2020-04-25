---
path: "/tips/post-44"
date: "2019-08-23"
title: "What are Promises in JavaScript and how to use them"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586813605/tips/44-1_f3dlco.png'
description: 'Understanding Promises in Javascript and how to use them'
number: 44
status: true
---

Promises have been one the main features added in JavaScript when ES6 came out.
Basically, they are an object that will produce a value on the future: either a resolved value or a reason why it's not resolved. They 'promise' that a certain operation will return a specific value. But if something goes wrong they will return a reason on why the value wasn't returned.

 ```javascript
const doSomething = () => {

    return new Promise( (resolve, reject) => {

        //SOME ASYNCHRONOUS OPERATION lIKE A API CALL FOR EXAMPLE
        someAPICall()


        //IF ALL WENT WELL WE WILL USE RESOLVE() OTHERWISE WE'LL USE REJECT()
        if(result){
            resolve(result)
        }
        else{
            reject(new Error('Something went wrong!'))
        }
    })

}

doSomething()
.then( 
    result => {
        console.log(result)
    },
    err => {
        console.log(err)
    } 
)
 ```

Promises have always one of three states: fulfilled (meaning everything went right and you have the desired output), rejected (meaning that something went wrong) or pending (meaning that it is still waiting for something).

The promise constructor takes a function wich takes two parameters - a resolve function and a reject function. We'll use the resolve function to send the desired output when everything goes right and use the reject function to send some response when something goes wrong.

When calling our promise we can use 'then' to be called after the promise is complete. This 'then' will take two parameters as well, one to be used when the promise is fulfilled and the other two be used when the promise is rejected.

Look at the code snippet to see how promises work. This explanation and the snippet are both pretty basic as I didn't want something too much overwhelming. If you have any doubts send a message!