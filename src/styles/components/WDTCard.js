import styled from 'styled-components'
import { theme } from '../theme';

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
    }
`