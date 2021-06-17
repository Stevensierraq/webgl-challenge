import styled from 'styled-components';
import { Black, Yellow } from '../colors'

export const Input = styled.input`
    -webkit-appearance: none;
    height: 3px;
    width: 220px;
    background: ${Yellow.base};
    border-radius: 5px;
    outline: none;
    border: none;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        cursor: pointer;
        background-color: ${Black.base};
    }
`;

export const RangeContainer = styled.div`
    position: relative;

    span {
        font-size: 1rem;
        margin: 5px;
        letter-spacing: 0.1rem;
        font-family: "Adineue",Helvetica, Arial, sans-serif;
    }
`;
