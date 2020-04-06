import styled from 'styled-components'
import { theme } from '../theme';

export const SubTitle = styled.h3`
    color: ${theme.white};
    font-size: 4rem;
    line-height: 5.5rem;
    font-weight: 800;
    text-align: ${props => props.centered ? 'center' : 'left'};
    margin-bottom: ${theme.spacingS};
`