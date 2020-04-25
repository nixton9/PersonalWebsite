---
path: "/tips/post-107"
date: "2019-12-11"
title: "Understanding the NOT(!), OR (||), AND (&&) logical operators in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587329266/tips/107-1_sultsb.png'
description: 'How do Javascript logical operators work'
number: 107
status: true
---

What's up guys, how is your week going ?  
Today we'll try to make some sense of the JavaScript logical operators: NOT (!), AND (&&), OR (||). Using these is quite simple and I bet most of you already know this but still, it's always useful to understand this type of things a little bit better. So let's go!

 ```javascript
 
!'' // -> true

!'random string' // -> false

!!'' // -> false

!!'random string' // -> true

!!0 // -> false



true || false // -> true

24 || 0 // -> 24

0 || 24 // -> 24

'' || 'something' // -> 'something'

'random string' || 'something' // -> 'random string'



true && false // -> false

24 && 0 // -> 0

0 && 24 // -> 0

'' && 'something' // -> ''

'random string' && 'something' // -> 'something'

 ```

We'll start with the NOT - ! - operator. Look at the examples with this operator and see what these examples return. When we use this operator with some value, this will return false if that value can be converted to true, otherwise it will return true. So this basically always returns the opposite. We can also use this operator twice, like ' !!value '. This will basically return us true if the value is truthy and false if the value is falsy.

The OR operator - || - will return true if one of the values is truthy, otherwise it will return false. So, if the first value is truthy, it won't even look at the second value, it will just return us the first one. In the case ' 22 || 0 ' this will return 22 and will not even care about the 0.

Finally, we have the AND operator - &&. This operator returns true if both values are truthy, otherwise it will return false. So if it checks the first value and see that it's falsy, it will automatically return false and not care about the second value. " ' ' && 10 " will just return ' ' because this value is falsy.

Hope this made sense and let me know if you guys didn't understand something. Have a nice day! 😁🔥👌