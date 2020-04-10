import styled from 'styled-components'
import { theme, device } from '../theme';

export const WDTCard = styled.div`
    margin-top: ${theme.spacingL};

    .banner {
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding: ${theme.spacingM};
        align-items: center;

        img {
            width: 85%;
        }

        @media ${device.laptop} {
            grid-template-columns: 1fr;
            max-width: 65%;
            margin: 0 auto;

            img {
                width: 40%;
                margin: 0 auto ${theme.spacingM} auto;
            }

            h3 {
                text-align: center;
            }
            
            .buttons {
                text-align: center;
                margin: ${theme.spacingM} 0 ${theme.spacingXS} 0;
            }
        }

        @media ${device.tablet} {
            img {
                width: 65%;
            }
        }
    }
`