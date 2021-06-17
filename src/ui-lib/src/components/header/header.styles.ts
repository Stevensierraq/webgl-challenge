import styled from 'styled-components';
import {  Black, White } from '../colors';

export const Container = styled.div`
    width: 100%;
    position: fixed;
    background-color: ${Black.base};

    h4 {
        color: ${White.base};
        margin: 10px;
    }
`