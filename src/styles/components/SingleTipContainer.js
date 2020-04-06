import styled from 'styled-components'
import { theme } from '../theme';

export const SingleTipContainer = styled.section`
    padding-bottom: ${theme.spacingMega};
    
    .tip__meta {
        display: flex;
        align-items: center;
        justify-content: center;
        
        h3 {
            font-size: 2rem;
            color: ${theme.darkGrey};
            margin:0 ${theme.spacingXS};
            &.purple {
                color: ${theme.purple};
                text-transform: uppercase;
            }
        }
    }

    .tip__content {
        margin-top: ${theme.spacingMega};

        p {
            display: flex;
            justify-content: center;
            color: ${theme.lightGrey};
            font-size: 2.2rem;
            font-weight: 400;
            line-height: 4.9rem;
            margin-bottom: ${theme.spacingXL};

            span {
                font-weight: 700;
                color: ${theme.white}
            }

            strong {
                font-weight: 700;
                color: ${theme.purple}
            }
        }

        img {
            max-width: 85%;
            border-radius: ${theme.mainBordeRadius};
        }

        .deckgo-highlight-code-carbon {
            margin-bottom: ${theme.spacingXL};
            font-size: 1.5rem;
            color: ${theme.white};
            padding: ${theme.spacingXS};
        }
    }
`