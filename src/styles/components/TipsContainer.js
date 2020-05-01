import styled from 'styled-components'
import { theme, device } from '../theme';

export const TipsContainer = styled.div`
    width: 100%;
    padding: ${theme.spacingMega} 0;

    .tips__header {
        h3 {
            text-align: center;
            text-align: center;
            max-width: 80rem;
            margin: 0 auto;
        }

        .tips__icons {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: ${theme.spacingM};

            svg {
                width: 3.5rem;
                height: 100%;
                margin: 0 ${theme.spacingXS};
            }
        }

        .tips__form {
            margin-top: ${theme.spacingL};

            .form-wrapper {
                position: relative;
                width: 50rem;
                margin: 0 auto;
                max-width: 100%;
                
                input {
                    width: 100%;
                    background: transparent;
                    height: 5rem;
                    border-radius: ${theme.roundedBorderRadius};
                    border: none;
                    font-size: 1.4rem;
                    text-indent: 6rem;
                    color: ${theme.lightGrey};
                }

                img {
                    width: 2.2rem;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 2.5rem
                }
            }
        }
    }

    .tips__content {
        margin-top: ${theme.spacingXL};
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .no-data {
            color: ${theme.lightGrey};
            font-size: 1.7rem;
        }

        .tip__miniature {
            margin: ${theme.spacingS};
        }
    }

    @media ${device.tablet} {
        .tips__form input {
            height: 7rem !important;
        }
    }

    @media ${device.mobileM} {
        padding-top: 10rem;

        .tips__header h3{
            margin-top: 5rem;
        }
    }

`