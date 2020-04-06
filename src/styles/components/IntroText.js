import styled from 'styled-components'
import { theme } from '../theme';

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
`