import styled from 'styled-components'
import { theme, device } from '../theme';

export const IntroText = styled.h1`
    color: ${theme.darkGrey};
    font-size: 7rem;
    line-height: 8.8rem;
    font-weight: 700;
    max-width: 85rem;
    margin-left: ${theme.spacingS};

    span {
        color: ${theme.white};
    }

    @media ${device.mobileM} {
        font-size: 6rem;
        line-height: 7.9rem;
        padding-right: 1rem;
        margin-top: 3rem;
    }

    @media ${device.mobileS} {
        font-size: 5rem;
        line-height: 6.9rem;
        margin-top: 6rem;
    }
`