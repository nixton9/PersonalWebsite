import styled from 'styled-components'
import { theme, device } from '../theme';

export const HomeContainer = styled.div`
    width: 100%;
    padding-bottom: ${theme.spacingMega}; 

    .main {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icons {
            display: flex;
            flex-direction: column;
            padding: 3.5rem;

            a {
                margin: 1.3rem 0;
                img, svg {
                    width: 3.1rem;
                    height: auto;
                }
            }
        }

        @media ${device.laptop} {
            flex-direction: column;
            justify-content: center;

            .main__icons {
                margin-top: ${theme.spacingXL};

                .icons {
                    flex-direction: row;

                    a{
                        margin: 0 1.3rem;
                    }
                }
            }
        }

        @media ${device.mobileL} {
            .main__icons {
                margin-top: ${theme.spacingMega};

                .icons a{
                        margin: 0 2rem;

                        svg {
                            width: 4rem;
                        }
                }
            }
        }
    }

    .about__text {
        align-items: center;

        h3 {
            padding: 0 ${theme.spacingM};
        }

        @media ${device.laptop} {
            grid-template-columns: 1fr;

            h3 {
                padding-left: 0;
            }
        }
    }
`