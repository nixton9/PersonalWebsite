---
path: '/tips/post-219'
date: '2020-09-09'
title: 'Exploring some of the CSS functions'
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1599666211/tips/219-1_laeavj.png'
description: 'CSS attr(), calc(), :lang() & :not()'
number: 219
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1599666210/tips/219-2_hw4qwb.png 'CSS functions')

Taking a quick look at some CSS functions and function selectors ⚙️⚙️

CSS functions have been a thing for a while now, and even though there's not 100% browser support, it's still good enough for us to use them. So let's take a look at two CSS functions - attr() and calc() - and at two function pseudo-selectors - :not() and :lang().

```html
<div
  class="text text-attr"
  data-text="This text is set on a data attribute"
></div>

<div class="text text-box">
  This box has a calculated width
</div>

<div class="text text-lang">
  <p lang="en">English sentence</p>
  <p lang="fr">French sentence</p>
</div>

<div class="text text-bold">
  <p>First sentence</p>
  <p>Second sentence</p>
  <p>Third sentence</p>
</div>
```

With the attr() function we can get the value of an attribute on an element. With this we can, for example, set the content of an element on a data attribute and then display it using the 'content' property. In the example we use the 'data-text' attribute on the element so on our CSS we can get that value with: attr(data-text).

```css
.text {
  color: #222222;
  padding: 1rem;
  background-color: #f3f3f3;
  border-radius: 4px;
  margin-bottom: 3rem;
}

.text-attr:before {
  content: attr(data-text);
}

.text-box {
  width: calc(100% - 100px);
}

.text-lang p:lang(en) {
  color: red;
}

.text-lang p:lang(fr) {
  color: green;
}

.text-bold p:not(:last-child) {
  font-weight: bold;
}
```

On the second example we are using the calc() function to set a width on our div. As the name of this function says, we can use it to do some calculations. So here, by doing 'width: calc(100% - 100px), our element's width will be the total space it has to use minus 100px.

For the third example we set a 'lang' attribute on our elements. Then, on our CSS, we can use the 'lang()' selector to apply a rule only to elements that match the same 'lang' value. We can do this with the syntax '.box:lang(en)' to only apply a rule to an element that has the class 'box' and the 'lang' attribute set to 'en'.

Finally, on the last example we are using the 'not' selector to apply 'font-weight: bold' to all 'p' elements on the '.text-bold' div but NOT to the last child. In here we are using another pseudo selector inside the 'not' - :last-child - but we can also use a class, ID or tag name instead.

And that's it! Do you guys usually use CSS functions? 🤔✌️
