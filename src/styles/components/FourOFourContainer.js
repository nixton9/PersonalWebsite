import styled from 'styled-components'
import { theme } from '../theme';

export const FourOFourContainer = styled.section`
    min-height: 93vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .illustration {
        max-width: 70rem;
        margin-top: ${theme.spacingM};

        img {
            max-width: 100%;
        }
    }
`