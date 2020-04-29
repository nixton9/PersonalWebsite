---
path: "/tips/post-141"
date: "2020-02-14"
title: "Creating a loading spinner with SVG from scratch"
languages: ['HTML', 'CSS', 'SVG']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588056971/tips/141-1_mzcyme.png'
description: 'How to create a loading spinner from scratch'
number: 141
status: true
---

`youtube: https://www.youtube.com/embed/xiMzw_nYTrQ`

Hey guys, how are you?
For today's tip well see how we can do a loading spinner, all made from scratch using SVG. This will show us a bit about how we can animate SVG's on a webpage.

To start, we need to create the SVG with the loading we want to animate. As you can on the 'FX' slide, i created in Adobe XD a circular form with no background, only border. Then i created a quarter of a circle that will then be spinned around our main circle, thus creating the loading effect. We save this as an SVG file.

 ```html
 
<div class="container">

    <svg xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" viewBox="0 0 2048 2048">
        <defs><clipPath id="a"><path d="M0 0h2048v2048H0z"/></clipPath></defs>
        <g data-name="custom – 49" clip-path="url(#a)">
            <path fill="#fff" d="M0 0h2048v2048H0z"/>
            <circle data-name="Elipse 108" cx="678.5" cy="678.5" r="678.5" transform="translate(345 346)" fill="#f0f0f0" class="loading-track"/>
            <g data-name="Subtração 2" fill="#8b8b8b" class="loading-spinner">
            <path d="M1211.437 1668.912l55.612-119.261a584.287 584.287 0 0084.448-47.346 587.621 587.621 0 0086.277-71.19c26.418-26.423 50.371-55.456 71.193-86.293a582.505 582.505 0 0053.757-99.029c14.896-35.239 26.324-72.06 33.966-109.439 7.86-38.406 11.844-77.941 11.844-117.506 0-39.558-3.985-79.089-11.844-117.496a581.682 581.682 0 00-9.31-38.656l56.362-120.862a665.838 665.838 0 014.866 11.215c17.298 40.895 30.594 83.728 39.518 127.309 9.137 44.678 13.77 90.663 13.77 136.675 0 46.018-4.633 92.006-13.77 136.684-8.927 43.587-22.223 86.42-39.518 127.309-16.993 40.182-38.033 78.941-62.534 115.202-24.238 35.877-52.102 69.649-82.818 100.379-30.707 30.702-64.476 58.563-100.37 82.806-36.254 24.488-75.012 45.528-115.199 62.535a676.244 676.244 0 01-76.25 26.964z"/>
            <path d="M1212.355 1668.127a675.624 675.624 0 0075.138-26.64c40.156-16.994 78.886-38.018 115.114-62.488 35.866-24.226 69.61-52.066 100.296-82.745 30.693-30.708 58.537-64.456 82.757-100.306 24.483-36.234 45.507-74.965 62.488-115.117 17.282-40.858 30.568-83.66 39.488-127.214 9.13-44.646 13.76-90.6 13.76-136.584 0-45.979-4.63-91.93-13.76-136.575-8.918-43.549-22.204-86.35-39.488-127.214a668.73 668.73 0 00-4.418-10.203l-55.819 119.699a582.096 582.096 0 019.27 38.512c7.865 38.44 11.853 78.005 11.853 117.596 0 39.598-3.988 79.167-11.854 117.606-7.649 37.412-19.086 74.264-33.995 109.534a583.015 583.015 0 01-53.803 99.114c-20.84 30.863-44.814 59.92-71.254 86.366a588.133 588.133 0 01-86.351 71.252 584.796 584.796 0 01-84.353 47.31l-55.07 118.097m-1.834 1.568l.003-.007 56.15-120.415a583.786 583.786 0 0084.544-47.382 587.118 587.118 0 0086.204-71.13c26.392-26.397 50.324-55.403 71.132-86.218a582.003 582.003 0 0053.71-98.945c14.883-35.207 26.301-71.993 33.938-109.344 7.852-38.373 11.833-77.876 11.833-117.406 0-39.522-3.981-79.022-11.833-117.395a581.097 581.097 0 00-9.352-38.802l56.903-122.022a663.67 663.67 0 015.317 12.225c17.31 40.927 30.616 83.793 39.547 127.403 9.144 44.712 13.78 90.731 13.78 136.776 0 46.053-4.636 92.073-13.78 136.784-8.933 43.618-22.24 86.484-39.547 127.404-17.006 40.21-38.06 79-62.58 115.287-24.262 35.91-52.146 69.705-82.88 100.453-30.716 30.712-64.51 58.596-100.442 82.866-36.289 24.511-75.076 45.565-115.285 62.581a676.709 676.709 0 01-77.354 27.285l-.008.002z" fill="#707070"/>
            </g>
            <g data-name="Elipse 107" transform="translate(443 443)" fill="#fff" stroke="#f0f0f0" class="loading-inner">
            <ellipse cx="583" cy="582.5" rx="583" ry="582.5" stroke="none"/>
            <ellipse cx="583" cy="582.5" rx="582.5" ry="582" fill="none"/>
            </g>
        </g>
    </svg>

</div>

 ```

Now, we just to open our SVG file with whatever code editor you are using and we'll see a chunck of code wrapped in a 'svg' tag. This code represents all the elements we've created. We can go ahead and copy it.

On our HTML file, we just paste this code wherever we want to put our loading. If we open it on our browser, we'll see the image we created, completely static. So now we just need to apply some CSS.

 ```css
 
svg {
    width: 180px;
    height: 180px;
}

.loading-track {
    fill: #f1f1f1;
}

.loading-spinner {
    fill: #F91890;
    transform-origin: center;
    animation: rotateSpinner 1s linear infinite;
}

@keyframes rotateSpinner {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
}

 ```

On the CSS, we just need to set some dimensions for our loading spinner (in my case it's 100px * 100px) and apply some colors to the circle and to the spinner as well. To wrap things up we just need to apply to the spinner an animation that will make it just keep rotating around the main circle. And it's done!  
Hope you have a great Friday guys 😎