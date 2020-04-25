---
path: "/tips/post-7"
date: "2019-07-09"
title: "Create a text input with a list of suggestions for the user"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586557279/tips/7-1_p6dail.jpg'
description: 'Showing a list of suggestions to the user on a text input with HTML and CSS'
number: 7
status: true
---

`youtube: https://www.youtube.com/embed/Q2QTE7c2q5w`

Did you know that you can create a text input and have a list of suggestions appear to the user as he's typing in, only with HTML?
The 'datalist' tag does exactly that! You just need your typical text input with a attribute 'list' and then you create a 'datalist' element, with your 'options' inside, and give it an 'id' with the same value you used for the 'list' attribute in the text input.

Look at the video of this post to see what the 'datalist' does. As the the user clicks the input, all the suggestions will be presented to him. As he starts typing, the list of suggestions will be filtred to match the user's query. If the user wants, he can obviously just write something different and the input will accept it.


 ```html
<div class="parent flex-center">
            
    <div class="input-container">
        <label for="langinp">What's your favourite programming language?</label>
        <input type="text" id="langinp" list="languages" placeholder="Write">
        <datalist id="languages">
            <option value="C"></option>
            <option value="PYTHON"></option>
            <option value="JAVASCRIPT"></option>
            <option value="PHP"></option>
            <option value="C++"></option>
        </datalist>
    </div>

</div>
 ```

Look at the 3rd picture to see how the HTML is structured. We just need the 'input' with 'list="languages"' and then the 'datalist' with 'id="languages"'. Inside this 'datalist' we have all the options we want - 'option value="javascript"'

 ```css
input{
    display: block;
    margin: 30px auto 0 auto;
}

input:hover, input:focus{
    outline: none;
    background:none;
    box-shadow: none;
}

.parent{
    height:100%;
}

.flex-center{
    display:flex;
    align-items: center;
    justify-content: center;
}

label{
    color: #007EFF;
    font-size: 18px;
    font-weight: 600;
}

input{
    height: 48px;
    width: 200px;
    border-radius: 4px;
    border: 1px solid #757575;
    font-size: 14px;
    text-indent: 15px;
    font-weight: 100;
}

 ```

Finally, we have some simple CSS just to style our 'label' and our 'input' and it's not a big of a deal so i won't talk about these properties.

See? Easily, and only with HTML, we created a text input with some dynamic options for the user. This can be handy in many cases when dealing with some specific forms 🙇