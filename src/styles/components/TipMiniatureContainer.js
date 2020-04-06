import styled from 'styled-components'
import { theme } from '../theme';

export const TipMiniatureContainer = styled.div`
    width: 30rem;
    height: 30rem;

    .soft {
        position: relative;
        height: 100%;
    }

    .tip__meta {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: ${theme.mainBordeRadius};
        background-color: ${theme.backgroundGrey};
        color: ${theme.white};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transition: opacity .4s ease;
        opacity: 0;

        .meta__languages {
            font-size: 1.1rem;
            font-weight: 800;
        }
        .meta__title {
            font-size: 1.8rem;
            text-align: center;
            max-width: 88%;
            margin: 0 auto;
            line-height: 2.8rem;
        }
        .meta__number {
            font-size: 1.2rem;
            font-weight: 900;
        }
    }

    img {
        border-radius: ${theme.mainBordeRadius};
        width: 100%;
        height: 100%;
    }

    &:hover {
        .tip__meta {
            opacity: 1;
        }
        img {
            border-radius: ${theme.hackyBordeRadius};
        }
    }
`