import styled from 'styled-components'
import { theme } from '../theme';

export const HomeContainer = styled.div`
    width: 100%;
    padding-bottom: ${theme.spacingMega}; 

    .main {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icons {
            display: flex;
            flex-direction: column;
            padding: 3.5rem;

            a {
                margin: 1.3rem 0;
                img {
                    width: 3.1rem;
                }
            }
        }
    }

    .about__text {
        align-items: center;

        h3 {
            padding: 0 ${theme.spacingM};
        }
    }
`