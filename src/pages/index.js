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
import SmoothScroll from 'smooth-scroll';

const Home = () => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <Layout>
        <SEO />
        <HomeContainer>

          <section className="main" id="main">
            <IntroText>
              Hey, I’m Eduardo. A <span>web <br className="br" />developer</span> from Portugal. <br className="br" /> 
              Come in and get to know <br className="br" />me a bit!
            </IntroText>

            <SoftElement className="main__icons">
              <SocialIcons />
            </SoftElement>
          </section>

          <section className="about" id="about">
            <MainTitle megaSpacing> what do I do</MainTitle>

            <div className="about__text grid5050">
              <SubTitle>
                I build and break things <br />and I like to share tips with people
              </SubTitle>
              <Text>
                I'm Eduardo Araújo, a Web Developer from Portugal, currently living in <span>Aveiro</span>.
                Right now I'm working at Mindera as a Front-end developer. I know my ways on Back-end but what
                I really like doing the most is <span>Front-end & UI design</span>. Ideally, I love working on all stages of 
                building a website - from the first sketches, design, implementation to the <span>finished product</span>.
                Currently, my main area of focus has been <span>React</span>. Besides that, my skills include HTML, CSS,
                Javascript, MySQL, some basic back-end (PHP & Node) and UI design.
                I also like sharing some tips on what I know through my Instagram page - <strong>webDevTips</strong>.
                You can find it right below or you can see the tips right here on this website!
              </Text>
            </div>
          </section>

          <Spacing />

          <WebDevTipsCard />

          <Spacing />

          <section className="contact" id="contact">
            <MainTitle megaSpacing>drop a message</MainTitle>
            
            <div className="grid5050">

              <div className="contact__text">
                <SubTitle>
                  Do you have any doubt <br />I can help you with?
                </SubTitle>
                <Text smallLineHeight>
                  Leave a message here or, if you prefer, send<br /> me an email through
                  <strong><a href="mailto:eduardojoaoaraujo@gmail.com"> here</a></strong>
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
