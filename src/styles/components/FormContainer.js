import styled from 'styled-components'
import { theme } from '../theme';

export const FormContainer = styled.form`
    text-align: right;

    .input-wrapper {
        margin-bottom: 5rem;

        input, textarea {
            background-color: transparent;
            border: none;
            color: ${theme.lightGrey};
            height: 7rem;
            width: 100%;
            text-indent: ${theme.spacingS};
            font-size: 1.8rem;
            font-family: 'Muli';
            font-weight: 700;
        }

        textarea {
            height: ${theme.spacingXL};
            padding-top: ${theme.spacingS};
            resize: none;
        }
    }

    button {
        margin-top: ${theme.spacingS};
    }
`