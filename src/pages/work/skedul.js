import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { SubTitle } from '../../styles/components/SubTitle'
import { Text } from '../../styles/components/Text'
import { theme, device } from '../../styles/theme'

const Skedul = () => {
  return (
    <Layout>
      <SEO
        title={'Skedul - UI/UX Design'}
        description={
          'UI/UX Redesign for Skedul - a platform for creating custom forms for businesses'
        }
        pathname={'/work/skedul'}
        image={
          'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588268735/banner-twitter_y928lx.png'
        }
      />
      <Main>
        <SubTitle>Skedul</SubTitle>
        <Text>
          Skedul is a platform that allows businesses to create, customise, and
          deploy standalone booking forms tailored to their specific needs.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1784391894/website/skedul-dashboard_zijheo.png"
            alt="Skedul - Dashboard page"
          />
          <ImageDescription>Skedul - Dashboard page</ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          Skedul is a web application that enables businesses to create and
          deploy custom forms for their specific workflows and requirements.
          Through a visual builder, users can create forms using different field
          types and conditional logic, controlling which fields are displayed
          and when.
          <br />
          <br />
          Once a form is created, businesses can also build a dedicated landing
          page — either from scratch or using a template — where the form is
          hosted. The final landing page URL can then be shared directly with
          customers, allowing them to book the services offered by the business
          through a simple and focused experience.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1784391894/website/skedul-grid_e5rxci.png"
            alt="Skedul - Bookings page"
          />
          <ImageDescription>Skedul - Bookings page</ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          Within the Skedul app, users can manage all bookings generated through
          their forms and access a range of analytics to monitor performance and
          improve the efficiency of their booking flows.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1784391894/website/skedul-form-4_gfj11h.png"
            alt="Skedul - Landing Page configuration wizard"
          />
          <ImageDescription>
            Skedul - Landing Page configuration Wizard
          </ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          However, the original app had a somewhat dull visual identity and
          several UX issues, particularly around form creation — the core
          experience of the product. The high level of customisation available
          across both forms and landing pages resulted in a large number of
          controls being presented on a single page. Different field types,
          conditional rules, and customisation options were all competing for
          the user's attention, making the experience feel cluttered and
          difficult to navigate.
          <br />
          For new users in particular, this created a steep learning curve.
          Getting started with creating a form was not as straightforward as it
          should be, and users had to navigate a complex interface before they
          could even begin to build their booking flow.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1784391894/website/skedul-form-3_bjiuqc.png"
            alt="Skedul - Form configuration wizard #1"
          />
          <ImageDescription>
            Skedul - Form configuration Wizard #1
          </ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          With this in mind, the main goal of the redesign was to create a
          smoother, more approachable experience for every type of user —
          regardless of their familiarity with the app or the complexity of the
          form they wanted to create.
          <br />
          To achieve this, both the landing page customisation and form creation
          experiences were redesigned as multi-step wizards. Instead of exposing
          every option at once, the new flow progressively introduces complexity
          as it becomes relevant. This reduces cognitive load, helps users focus
          on the task at hand, and makes the overall process feel much more
          manageable.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1784391894/website/skedul-form-2_kokjdx.png"
            alt="Skedul - Form configuration wizard #2"
          />
          <ImageDescription>
            Skedul - Landing Form configuration Wizard #2
          </ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          The redesign resulted in a significantly smoother and more intuitive
          experience. The new structure made the core workflows easier to
          understand and navigate, while the updated visual design gave the app
          a more engaging, polished, and lively feel — moving away from the dull
          and uninspiring look of the original interface.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1784391894/website/skedul-form-1_is7vbe.png"
            alt="Skedul - Form configuration wizard #3"
          />
          <ImageDescription>
            Skedul - Landing Form configuration Wizard #3
          </ImageDescription>
        </ImageWrapper>
      </Main>
    </Layout>
  )
}

export default Skedul

const Main = styled.main`
  min-height: 90vh;
  margin: ${theme.spacingXL} 0;
`

const ImageWrapper = styled.div`
  margin: ${theme.spacingM} 0;
`

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.mainBordeRadius};
`

const ImageDescription = styled.p`
  font-size: 1.25rem;
  color: ${theme.lightGrey};
  text-align: center;
  margin-top: ${theme.spacingXS};
`
