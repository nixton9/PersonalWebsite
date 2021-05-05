import styled from 'styled-components'
import { theme, device } from '../theme'

export const SingleTipContainer = styled.section`
  padding-bottom: ${theme.spacingMega};

  .tip__meta {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 2rem;
      color: ${theme.darkGrey};
      margin: 0 ${theme.spacingXS};
      &.purple {
        color: ${theme.purple};
        text-transform: uppercase;
      }
      &.lightgrey {
        color: ${theme.lightGrey};
      }
    }
  }

  .tip__content  {
    margin-top: ${theme.spacingMega};

    p {
      color: ${theme.lightGrey};
      font-size: 2.2rem;
      font-weight: 400;
      line-height: 4.9rem;
      margin-bottom: ${theme.spacingM};

      a {
        color: ${theme.white};
      }

      span {
        font-weight: 700;
        color: ${theme.white};
      }

      strong {
        font-weight: 700;
        color: ${theme.purple};
      }
    }

    img {
      width: 85%;
      max-width: 100rem;
      margin: 0 auto;
      display: block;
      border-radius: ${theme.mainBordeRadius};
    }

    .deckgo-highlight-code-carbon {
      max-width: 100rem;
      margin: 0 auto ${theme.spacingXL} auto;
      font-size: 1.5rem;
      color: ${theme.white};
      padding: ${theme.spacingXS};
    }

    .embedVideo-container {
      text-align: center;

      iframe  {
        max-width: 100%;
      }
    }

    @media ${device.mobileXL} {
      .deckgo-highlight-code-carbon {
        font-size: 12px;
      }
    }
  }

  @media ${device.laptop} {
    h2 {
      max-width: 100%;
    }
  }

  @media ${device.mobileS} {
    .empty-space {
      padding-top: 25rem;
    }
  }
`
