import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SocialIcons from '../components/SocialIcons'
import WebDevTipsCard from '../components/WebDevTipsCard'
import WorkSection from '../components/WorkSection'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { HomeContainer } from '../styles/components/HomeContainer'
import { MainTitle } from '../styles/components/MainTitle'
import { IntroText } from '../styles/components/IntroText'
import { SubTitle } from '../styles/components/SubTitle'
import { Text } from '../styles/components/Text'
import { SoftElement } from '../styles/components/SoftElement'
import { Spacing } from '../styles/components/Spacing'

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
            Hey, I’m Eduardo. A <span>Product Engineer</span> from Portugal.
            <br className="br" />
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
              I'm Eduardo Araújo, a <span>Product Engineer</span> passionate
              about building great digital products — from shaping ideas and
              defining features to delivering polished, high-quality interfaces.
              I particularly enjoy designing and bringing thoughtful UI and
              digital experiences to life. Currently based in Guimarães,
              Portugal, and working at <span>Dragonboat</span>.
              <br />
              <br />I also share what I learn and discover through my Instagram
              page,{' '}
              <a href="https://www.instagram.com/webdev.tips/" target="_blank">
                <strong>webDevTips</strong>
              </a>
              . Explore my Tips there or directly{' '}
              <Link to="/tips">
                <strong>here</strong>
              </Link>{' '}
              on the website.
            </Text>
          </div>
        </section>

        <Spacing />

        <WebDevTipsCard />

        <Spacing />

        <WorkSection />

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
