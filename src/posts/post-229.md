---
path: '/tips/post-229'
date: '2020-10-14'
title: 'How to create a simple modal with dynamic data'
languages: ['HTML', 'CSS', 'JS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1602686350/tips/229-1_g5psyd.png'
description: 'Creating a modal with dynamic content using HTML, CSS and JS'
number: 229
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1602686546/tips/229-2_elxjmq.gif 'Modal with dynamic content')

Hello guys, how are you? 🤓

So last week I had somebody asking me for help in the following scenario: displaying a list of users and presenting a modal where you can see each of these users in detail. I thought it would be a cool tip to share so here it is.

Basically we are displaying 4 users with an avatar, a name and a button to 'see more' - it will open the modal - for each. Since we don't want to have to create 4 different modals with the data for each user, we will just create a 'template' for the modal and then, using some Javascript, we will fill this modal template by passing the data from the user we click on.

```html
<div class="users">
  <div class="user">
    <img src="abigail.jpg" class="user__avatar" alt="Abigail Jensen" />
    <h2 class="user__name">Abigail Jensen</h2>
    <button
      onclick="openUserModal('Abigail Jensen', 'abigail.jpg', 'abigail@gmail.com', '(657)-743-4428')"
    >
      See more
    </button>
  </div>
  <div class="user">
    <img src="max.jpg" class="user__avatar" alt="Abigail Jensen" />
    <h2 class="user__name">Max Holmes</h2>
    <button
      onclick="openUserModal('Max Holmes', 'max.jpg', 'max@gmail.com', '(324)-543-4428')"
    >
      See more
    </button>
  </div>
  <div class="user">
    <img src="zack.jpg" class="user__avatar" alt="Abigail Jensen" />
    <h2 class="user__name">Zack Vargas</h2>
    <button
      onclick="openUserModal('Zack Vargas', 'zack.jpg', 'zack@gmail.com', '(784)-345-5738')"
    >
      See more
    </button>
  </div>
  <div class="user">
    <img src="anna.jpg" class="user__avatar" alt="Abigail Jensen" />
    <h2 class="user__name">Anna Johnson</h2>
    <button
      onclick="openUserModal('Anna Johnson', 'anna.jpg', 'anna@gmail.com', '(598)-574-2846')"
    >
      See more
    </button>
  </div>
</div>

<div id="modal" class="modal" style="display: none">
  <span class="close" onclick="closeModal()">+</span>
  <img class="avatar" src="" />
  <h2 class="name"></h2>
  <p class="email"></p>
  <p class="phone"></p>
</div>
```

The HTML is pretty straightforward. We have a div 'users' where inside we create a div 'user' for each user. On the 'See more' button we are adding an onclick function called 'openUserModal' and we are passing the user's data as parameters.
Note that on the snippet I'm only showing the HTML for one of the users. Then, we have a div with the ID 'modal'. This is the template for our modal that we will then use on the Javascript side. We have to make sure this modal is hidden by default.

```javascript
const modal = document.getElementById('modal')

function openUserModal(name, avatar, email, phone) {
  modal.style.display = 'block'
  modal.getElementsByClassName('avatar')[0].src = avatar
  modal.getElementsByClassName('name')[0].innerHTML = name
  modal.getElementsByClassName('email')[0].innerHTML = email
  modal.getElementsByClassName('phone')[0].innerHTML = phone
}

function closeModal() {
  modal.style.display = 'none'
}
```

On the Javascript, we start by creating a variable that references our modal. Then, we'll create the 'openUserModal' function that will receive a 'name', an 'avatar', an 'email' and a 'phone'. First thing we'll do in this function is making the modal visible by changing the 'display' property. Then, we'll add the correspondent data inside each of the elements on our modal template. Finally we'll also create a 'closeModal' function that will change the modal's 'display' back to 'none'.

```css
.users {
  display: flex;
  justify-content: center;
}

.user {
  min-width: 13rem;
  padding: 2rem 1.7rem;
  margin: 0 1rem;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.user__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.user__name {
  color: #424242;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 0.7rem;
}

.user button {
  color: #fff;
  background-color: #e91e63;
  font-weight: 700;
  font-size: 0.8rem;
  border: none;
  margin-top: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
}

.modal {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  text-align: center;
  background: #fff;
  width: 20rem;
  height: 22rem;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.modal .close {
  position: absolute;
  top: 7px;
  right: 7px;
  color: #e91e63;
  font-size: 2rem;
  font-weight: 800;
  transform: rotate(45deg);
  cursor: pointer;
}

.modal img {
  border-radius: 50%;
}

.modal h2 {
  color: #212121;
  margin: 2rem 0 1.5rem 0;
}

.modal p {
  color: #757575;
  font-weight: 300;
  margin-top: 0.5rem;
}
```

In terms of CSS it's all super straightforward so I won't go into detail.

Hope you liked this tip and let me know your doubts! 😁✌️
