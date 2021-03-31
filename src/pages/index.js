import React from 'react'
import Layout from '../components/Layout'
import SocialIcons from '../components/SocialIcons'
import WebDevTipsCard from '../components/WebDevTipsCard'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { HomeContainer } from '../styles/components/HomeContainer'
import { MainTitle } from '../styles/components/MainTitle'
import { IntroText } from '../styles/components/IntroText'
import { SubTitle } from '../styles/components/SubTitle'
import { Text } from '../styles/components/Text'
import { SoftElement } from '../styles/components/SoftElement'
import { Spacing } from '../styles/components/Spacing'
import { Button } from '../styles/components/Button'

const Home = () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
  }
  return (
    <Layout>
      <SEO />
      <HomeContainer>
        <section className="main" id="main">
          <IntroText>
            Hey, I’m Eduardo. A{' '}
            <span>
              web <br className="br" />
              developer
            </span>{' '}
            from Portugal. <br className="br" />
            Come in and get to know <br className="br" />
            me a bit!
          </IntroText>

          <SoftElement className="main__icons">
            <SocialIcons />
          </SoftElement>
        </section>

        <section className="about" id="about">
          <MainTitle megaSpacing> what do I do</MainTitle>

          <div className="about__text grid5050">
            <SubTitle>
              I build and break things <br />
              and I like to share tips with people
            </SubTitle>
            <Text>
              I'm Eduardo Araújo, a Web Developer from Portugal, currently
              living in <span>Aveiro</span>. Right now I'm working at Mindera as
              a Front-end developer. I know my ways on Back-end but what I
              really like doing the most is <span>Front-end & UI design</span>.
              Ideally, I love working on all stages of building a website - from
              the first sketches, design, implementation to the{' '}
              <span>finished product</span>. Currently, my main area of focus
              has been <span>React</span>. Besides that, my skills include HTML,
              CSS, Javascript, MySQL, some basic back-end (PHP & Node) and UI
              design. I also like sharing some tips on what I know through my
              Instagram page - <strong>webDevTips</strong>. You can find it
              right below or you can see the tips right here on this website!
            </Text>
          </div>
        </section>

        <Spacing />

        <WebDevTipsCard />

        <Spacing />

        <section className="word" id="work">
          <MainTitle megaSpacing>stuff that I've done</MainTitle>

          <div className="single-work grid5050">
            <div className="single-work__content">
              <SubTitle>TRCKR</SubTitle>
              <Text>
                TRCKR is a PWA that aims to help in personal organization. With
                it, users can create, track, and organize notes, tasks, habits
                and expenses. The app has quite some features, such as Push
                Notifications, custom Android shortcuts, etc. It can be
                downloaded from the Google Play Store.
              </Text>
              <div className="buttons">
                <a href="https://landing.trckrapp.com/" target="_blank">
                  <Button className="bg-hover">Visit App</Button>
                </a>
                <a href="https://github.com/nixton9/trackit-fe" target="_blank">
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
                Homepage is a web app that I made for personal use. I use it as
                the start page of the browser so I can have quick access to:
                Gmail, Github notifications, my todo list, the weather, Google
                search and my most visited websites. It also has other pages for
                stuff like: Dribbble feed, movies/TV shows recommendations,
                news, and stock market updates.
              </Text>
              <div className="buttons">
                <a
                  href="https://res.cloudinary.com/duejrcpct/video/upload/v1617125534/website/homepage_preview_gqhalf.mp4"
                  target="_blank"
                >
                  <Button className="bg-hover">Preview App</Button>
                </a>
                <a href="https://github.com/nixton9/homepage" target="_blank">
                  <Button className="color-hover" inversed big>
                    Check code
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Spacing />

        <section className="contact" id="contact">
          <MainTitle megaSpacing>drop a message</MainTitle>

          <div className="grid5050">
            <div className="contact__text">
              <SubTitle>
                Do you have any doubt <br />I can help you with?
              </SubTitle>
              <Text smallLineHeight>
                Leave a message here or, if you prefer, send
                <br /> me an email through
                <strong>
                  <a href="mailto:eduardojoaoaraujo@gmail.com"> here</a>
                </strong>
              </Text>
            </div>

            <ContactForm />
          </div>
        </section>
      </HomeContainer>
    </Layout>
  )
}

export default Home
