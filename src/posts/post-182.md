---
path: "/tips/post-182"
date: "2020-05-15"
title: "Implementing a design from Dribbble with HTML & CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589555174/tips/182-1_k9drne.png'
description: 'Using HTML & CSS to implement a custom design'
number: 182
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589555174/tips/182-2_getze2.png "Design from Dribbble in html & CSS")

Happy Friday guys! 🔥

I get asked a lot of times how one can improve his CSS skills. Usually, my main answer is to simply practice it using 'real world scenarios. For this, I advise people to just go to a website like Dribbble, pick a cool website design that they like and implement it !

That's exactly what I decided to do for this tip! I picked a design that I created and posted on Dribbble a while ago and I just implemented it with HTMl & CSS.

```html

<body>

    <div class="screen">

        <h1 class="screen__title">Up for a challenge?</h1>

        <div class="screen__form">

            <h2 class="form__title">Create Account</h2>

            <div class="form__inputs">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>

            <button class="form__button">Ready</button>

        </div>

        <p class="screen__footer">Already have account? <strong>Sign in</strong></p>

    </div>

</body>

```

Check the HTML and CSS for it, it's all pretty simple. Let me know you have any doubts with it.

```css

body {
    font-family: 'Raleway';
    background-image: url('bg.jpg');
    background-size: cover;
    background-position: bottom center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.screen {
    position: relative;
    width: 325px;
    height: 700px;
    border-radius: 25px;
    background: #fff url(wavy_bg.png);
    background-repeat: no-repeat;
    background-position: bottom center;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

.screen__title {
    color:#002771;
    font-weight: 900;
    max-width: 80%;
    margin: 40px;
    font-size: 35px;
    line-height: 49px;
}

.screen__form {
    width: 85%;
    margin: 60px auto 0 auto;
    padding: 25px;
    background: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.form__title {
    font-size: 16px;
    font-weight: 800;
    color: #002771;
}

.form__inputs {
    margin-top: 5px;
    overflow: hidden;
}

.form__inputs input {
    width: 100%;
    padding: 8px 5px;
    border: none;
    margin: 12px 0;
    border-bottom: 1px solid rgba(88, 88, 90, .31);
}

::placeholder {
    color: #8F8F93;
    font-family: 'Raleway';
    font-weight: 600;
    letter-spacing: .03em;
}

.form__button {
    display: block;
    border: none;
    background-color: #00266C;
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: .01em;
    margin: 15px auto 0 auto;
    padding: 6px 16px;
}

.screen__footer {
    color: #fff;
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 10px;
}

.screen__footer strong {
    font-weight: 800;
}

```

And please let me know if you liked this type of tip and if you want to see more like it! i really think it's a neat way to learn CSS in a practical way.

Have a great weekend guys, take care! 😁♥️