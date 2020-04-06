import styled from 'styled-components'
import { theme } from '../theme';

export const Text = styled.p`
    color: ${theme.lightGrey};
    font-size: 2.2rem;
    font-weight: 400;
    line-height: ${props => props.smallLineHeight ? '3.8rem' : '4.9rem'};

    span {
        font-weight: 700;
        color: ${theme.white}
    }

    strong {
        font-weight: 700;
        color: ${theme.purple}
    }
`