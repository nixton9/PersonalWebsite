import styled from 'styled-components'
import { theme, device } from '../theme';

export const SecondaryTitle = styled.h2`
    max-width: 70%; 
    color: ${theme.white};
    font-size: 7rem;
    line-height: 9.5rem;
    font-weight: 800;
    letter-spacing: .1rem;
    text-align: center;
    margin: 0 auto ${theme.spacingM} auto ;

    @media ${device.mobileS} {
        font-size: 6rem;
        line-height: 8.3rem;
    }
`