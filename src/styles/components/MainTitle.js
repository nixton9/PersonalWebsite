import styled from 'styled-components'
import { theme } from '../theme';

export const MainTitle = styled.h1`
    color: ${theme.purple};
    font-size: 11rem;
    line-height: 13rem;
    font-weight: 800;
    letter-spacing: .1rem;
    text-align: center;
    margin-bottom: ${props => props.megaSpacing ? theme.spacingMega : theme.spacingS};
    margin-top: ${theme.spacingL};
`