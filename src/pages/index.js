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

const Home = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <Layout>
        <SEO />
        <HomeContainer>

          <section className="main" id="main">
            <IntroText>
              Hey, I’m Eduardo. A <span>web <br class="br" />developer</span> from Portugal. <br class="br" /> 
              Come in and get to know <br class="br" />me a bit!
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
                Sed ut perspiciatis unde omnis iste natus error <span>sit</span> voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et <span>quasi</span> architecto beatae vitae dicta sunt <strong>explicabo</strong>. Nemo enim
                ipsam voluptatem. Ipsas scientias potestas estas lorem ipsum set dolor amen
                laudanum total rem apeiram aqui <span>pisa</span> scientia potestas est.
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
