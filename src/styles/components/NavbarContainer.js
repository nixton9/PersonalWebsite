import styled from 'styled-components'
import { theme, device } from '../theme';

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: ${theme.containerL};
    top: 3rem;
    z-index: 11;

    .navigation {
        .navigation__item {
            color: ${theme.white};
            font-size: 1.7rem;
            font-weight: 700;
            margin:0 2rem;

            &:last-child {
                margin:0 ;
            }
        }
    }

    .hamburguer {
        position: fixed;
        top: 2.5rem;
        right: 5rem;
        width: 4rem;
        cursor: pointer;
        display: none;

        span {
            display: block;
            width: 100%;
            height: .4rem;
            background-color: ${theme.white};
            margin: .8rem auto 0 auto;
            border-radius: ${theme.mainBordeRadius};
            transition: all .25s ease;

            &:nth-child(2){ width: 80%; }
            &:nth-child(3){ width: 60%; }
        }

        &:hover {
            span:nth-child(3) {
                transform: translateY(5px);
            }
        }
    }

    @media ${device.laptop} {
        .hamburguer {
            display: block;
        }
        .navigation {
            display: none;
        }
    }
`



export const MobileNav = styled.div`
    transform: ${props => props.isMenuOpen ? 'translateX(0%)' : 'translateX(101%)'};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${theme.darkGrey};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .6s ease;
    z-index: 11;

    .close {
        cursor: pointer;
        position: absolute;
        top: 1rem;
        right: 3rem;
        color: ${theme.white};
        font-size: 6rem;
        font-weight: 700;
        transform: rotate(45deg);
        transform-origin: center;
        transition: all .4s ease;

        &:hover {
            transform: rotate(90deg);
        }
    }

    .items {
        color: ${theme.white};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        a {
            font-size: 3rem;
            font-weight: 700;
            margin: ${theme.spacingXS} 0;
            padding: ${theme.spacingXS};
        }
    }

    

`