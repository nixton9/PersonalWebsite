import styled from 'styled-components'
import { theme } from '../theme';

export const Button = styled.button`
    font-family: 'Muli';
    background-color: ${props => props.inversed ? 'transparent' : theme.purple};
    color: ${props => props.inversed ? theme.purple : theme.white};
    border-radius: ${theme.roundedBorderRadius};
    font-size: ${props => props.big ? '2rem' : '1.5rem'};
    font-weight: 700;
    letter-spacing: .04rem;
    padding: ${props => props.big ? '1.9rem 3.3rem' : '1.6rem 2.7rem'};
    border: none;
    cursor: pointer;
`