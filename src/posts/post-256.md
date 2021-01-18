---
path: '/tips/post-256'
date: '2021-01-18'
title: 'Creating a calendar from scratch in React'
languages: ['React', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1610985873/tips/256-1_znx3qq.png'
description: 'Learn how to create a calendar from scratch in React using hooks'
number: 256
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1610986135/tips/256-2_kza5un.gif 'Calendar in React')

Creating a calendar from scratch in React 📅 📅

What's up guys? Today I'm sharing with you something I did a while ago for a project: a calendar made in React from scratch with the help of 'date-fns'.

```jsx
import React, { useState } from 'react'
import {
  addMonths,
  addDays,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  format,
} from 'date-fns'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  return (
    <div className="calendar">
      {header()}
      {daysOfWeek()}
      {days()}
    </div>
  )
}

export default Calendar
```

For this we have a Calendar component that will contain the three parts we need:  
1 - The header where we'll display the current month and year, with some arrows that will let the user navigate between months.  
2 - The row with the days of the week.  
3 - The days of the month

```jsx
const header = () => {
  const dateFormat = 'MMMM yyyy'

  return (
    <div className="calendar__header">
      <div className="calendar__header__arrow" onClick={prevMonth}>
        &#9664;
      </div>
      <div className="calendar__header__title">
        {format(currentDate, dateFormat)}
      </div>
      <div className="calendar__header__arrow right" onClick={nextMonth}>
        &#9654;
      </div>
    </div>
  )
}

const daysOfWeek = () => {
  const dateFormat = 'E'
  const days = []
  let startDate = startOfWeek(currentDate)

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="calendar__dow__day" key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    )
  }

  return <div className="calendar__dow">{days}</div>
}

const days = () => {
  const monthStart = startOfMonth(currentDate)
  const rows = []
  let days = []
  let day = startOfWeek(monthStart)
  let formattedDate = ''

  while (day <= endOfWeek(endOfMonth(monthStart))) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd')
      const cloneDay = day
      let onSameMonth = isSameMonth(cloneDay, monthStart)

      days.push(
        <div
          className={!onSameMonth ? 'disabled calendar__day' : 'calendar__day'}
          key={cloneDay.toString()}
        >
          {formattedDate}
        </div>
      )

      day = addDays(day, 1)
    }

    rows.push(
      <div className="calendar__days" key={day.toString()}>
        {' '}
        {days}{' '}
      </div>
    )
    days = []
  }

  return rows
}
```

We will use the 'useState' hook to keep track of the date we're displaying - by default it will be the current month and year - and using the navigation arrows we'll basically just update that date.

We'll also use some useful methods from the 'date-fns' library to help us do the necessary calculations.

```css
.calendar {
  max-width: 40rem;
  margin: 0 auto;
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
}

.calendar__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.calendar__header__title {
  color: #212121;
  font-size: 1.3rem;
}

.calendar__header__arrow {
  font-size: 0.8rem;
  margin-right: 0.5rem;
  cursor: pointer;
}
.calendar__header__arrow.right {
  margin-left: 0.5rem;
  margin-right: 0;
}

.calendar__dow {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 1rem 0;
}

.calendar__dow__day {
  font-size: 1rem;
  font-weight: 600;
  color: #bdbdbd;
  padding: 1rem;
}

.calendar__days {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 2rem;
}

.calendar__day {
  font-size: 1.3rem;
  color: #212121;
  margin-bottom: 1rem;
}
.calendar__day.disabled {
  opacity: 0.4;
}
```

Let me know your thoughts on this snippet and whatever doubts you may have 😁✌️
