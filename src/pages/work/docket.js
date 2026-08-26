import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { SubTitle } from '../../styles/components/SubTitle'
import { Text } from '../../styles/components/Text'
import { theme, device } from '../../styles/theme'

const Docket = () => {
  return (
    <Layout>
      <SEO
        title={'Docket - UI/UX Design'}
        description={
          'UI/UX Design for Docket - a document collection platform for bookkeepers and accountants'
        }
        pathname={'/work/docket'}
        image={
          'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1787730926/website/dashboard_tt5xyc.png'
        }
      />
      <Main>
        <SubTitle>Docket</SubTitle>
        <Text>
          Docket is a platform built for bookkeepers and accountants who need to
          collect different documents from multiple clients on a recurring
          basis.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1787730926/website/dashboard_tt5xyc.png"
            alt="Docket - Dashboard page"
          />
          <ImageDescription>Docket - Dashboard page</ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          Docket gives accountants a place to define exactly which documents
          each client needs to provide and when they're due. The dashboard
          offers a consolidated view of every client, showing pending requests,
          upcoming deadlines, and submission status at a glance — so accountants
          can quickly identify who needs a nudge without digging through
          spreadsheets or email threads.
          <br />
          <br />
          An AI Assistant gives users a quick way to check in on their clients
          without manually scanning through each one. Instead of clicking into
          every client individually, a user can simply ask about overdue
          documents, upcoming deadlines, or the overall status of a specific
          client — and get a clear, immediate answer.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1787730926/website/clients-dark_iwdltg.png"
            alt="Docket - Clients page  (Dark mode)"
          />
          <ImageDescription>Docket - Clients page (Dark mode)</ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          Each client has a dedicated space where accountants can manage their
          document requests individually, review what's already been submitted,
          and keep a clear history of past requirements.
        </Text>

        <ImageWrapper>
          <Img
            src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1787730926/website/upload_cea3d5.png"
            alt="Docket - Document upload page"
          />
          <ImageDescription>Docket - Document upload page</ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          One of the main design challenges was making the submission flow
          effortless for clients — most of whom aren't familiar with bookkeeping
          tools and only interact with the platform occasionally. When an
          accountant creates a request, the client receives an email reminder
          with a direct link to a dedicated upload page. There, they can see
          exactly which documents are missing, which have already been
          submitted, and the corresponding deadlines — and upload files directly
          from that same page, without needing to log in or navigate the rest of
          the app.
        </Text>

        <ImageWrapper>
          <MultiImageWrapper>
            <Img
              src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1787730926/website/upload-mobile_tsbs8l.png"
              alt="Docket - Document upload page on mobile, light mode"
            />
            <Img
              src="https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1787730926/website/upload-mobile-dark_bxdpl2.png"
              alt="Docket - Document upload page on mobile, dark mode"
            />
          </MultiImageWrapper>
          <ImageDescription>
            Docket - Document upload page (Mobile)
          </ImageDescription>
        </ImageWrapper>

        <Text style={{ margin: `${theme.spacingL} 0` }}>
          Since clients often open the link straight from their inbox on a
          phone, the app was designed to feel just as simple on mobile as it
          does on desktop — particularly on the upload page, given how often
          it's accessed on the go.
        </Text>
      </Main>
    </Layout>
  )
}

export default Docket

const Main = styled.main`
  min-height: 90vh;
  margin: ${theme.spacingXL} 0;
`

const ImageWrapper = styled.div`
  margin: ${theme.spacingM} 0;
`

const MultiImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacingM};
  margin: ${theme.spacingM} 0;

  img {
    max-height: 1000px;
    width: auto;
  }
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
