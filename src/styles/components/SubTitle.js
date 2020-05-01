import styled from 'styled-components'
import { theme, device } from '../theme';

export const SubTitle = styled.h3`
    color: ${theme.white};
    font-size: ${props => props.small ? '2.4rem' : '4rem'};
    line-height: ${props => props.small ? '3.4rem' : '5.5rem'};
    font-weight: 800;
    text-align: ${props => props.centered ? 'center' : 'left'};
    margin-bottom: ${theme.spacingS};

    span {
        color: ${theme.purple};
    }

    @media ${device.mobileS} {
        font-size: 3.5rem;
        line-height: 5rem;
    }
`