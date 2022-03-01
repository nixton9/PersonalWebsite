import React from 'react'
import { MainTitle } from '../styles/components/MainTitle'
import { SubTitle } from '../styles/components/SubTitle'
import { Text } from '../styles/components/Text'
import { Button } from '../styles/components/Button'

const WorkSection = () => (
  <section className="word" id="work">
    <MainTitle megaSpacing>stuff that I've done</MainTitle>

    <div className="single-work grid5050">
      <div className="single-work__content">
        <SubTitle>TRCKR</SubTitle>
        <Text>
          TRCKR is a PWA that aims to help in personal organization. With it,
          users can create, track, and organize notes, tasks, habits and
          expenses. The app has quite some features, such as Push Notifications,
          custom Android shortcuts, etc. It can be downloaded from the Google
          Play Store.
        </Text>
        <div className="buttons">
          <a
            href="https://landing.trckrapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-hover">Visit App</Button>
          </a>
          <a
            href="https://github.com/nixton9/trackit-fe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="color-hover" inversed big>
              Check code
            </Button>
          </a>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1617124030/website/trckr_n8hnfo.png"
        alt="Trckr app"
      />
    </div>

    <div className="single-work grid5050">
      <img
        src="https://res.cloudinary.com/duejrcpct/image/upload/v1617124031/website/homepage_llicrh.png"
        alt="Homepage app"
      />

      <div className="single-work__content">
        <SubTitle>HOMEPAGE</SubTitle>
        <Text>
          Homepage is a web app that I made for personal use. I use it as the
          start page of the browser so I can have quick access to: Gmail, Github
          notifications, my todo list, the weather, Google search and my most
          visited websites. It also has other pages for stuff like: Dribbble
          feed, movies/TV shows recommendations, news, and stock market updates.
        </Text>
        <div className="buttons">
          <a
            href="https://res.cloudinary.com/duejrcpct/video/upload/v1617125534/website/homepage_preview_gqhalf.mp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-hover">Preview App</Button>
          </a>
          <a
            href="https://github.com/nixton9/homepage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="color-hover" inversed big>
              Check code
            </Button>
          </a>
        </div>
      </div>
    </div>

    <div className="single-work grid5050">
      <div className="single-work__content">
        <SubTitle>TRACELESS</SubTitle>
        <Text>
          Traceless is a simple Chat App experiment that I did with Web Sockets.
          Users can join a room and chat with all the users in that room.
          Besides text messages, users can also send images to each other. Since
          it's not connected to any database, all messages will be cleared once
          a user leaves or reloads the page.
        </Text>
        <div className="buttons">
          <a
            href="https://chat-app3870.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-hover">Visit App</Button>
          </a>
          <a
            href="https://github.com/nixton9/ChatApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="color-hover" inversed big>
              Check code
            </Button>
          </a>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/duejrcpct/image/upload/v1620409218/website/final_b5qixi.png"
        alt="Traceless app"
      />
    </div>
  </section>
)

export default WorkSection
