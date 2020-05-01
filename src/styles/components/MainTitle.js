import styled from 'styled-components'
import { theme, device } from '../theme';

export const MainTitle = styled.h1`
    color: ${theme.purple};
    font-size: 11rem;
    line-height: 13rem;
    font-weight: 800;
    letter-spacing: .1rem;
    text-align: center;
    margin-bottom: ${props => props.megaSpacing ? theme.spacingMega : theme.spacingS};
    margin-top: ${theme.spacingL};

    @media ${device.mobileM} {
        font-size: 10rem;
        line-height: 11.5rem;
    }

    @media ${device.mobileS} {
        font-size: 8.9rem;
        line-height: 10.3rem;
        margin-bottom: ${props => props.megaSpacing ? '15rem' : theme.spacingS};
    }
`