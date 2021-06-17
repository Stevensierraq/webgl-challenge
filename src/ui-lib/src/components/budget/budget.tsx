import { FC } from 'react'
import styled from 'styled-components';
import { Black, White, Blue, Yellow } from '../colors';

export enum BudgetColor {
    Black,
    Blue,
    Yellow
}

const budgetColor = (color?: BudgetColor) => 
    (color === BudgetColor.Blue) && Blue.base
    || (color === BudgetColor.Yellow) && Yellow.base
    || Black.base;

const textColor = (color?: BudgetColor) => 
    (color === BudgetColor.Yellow) && Black.base
    || White.base

export const Budget: FC<{ color?: BudgetColor }> = styled.span<{ color?: BudgetColor }>`
    padding: 10px;
    position: relative;
    font-size: 1.2rem;
    color: ${({color}) => textColor(color)};
    background-color: ${({color}) => budgetColor(color)};
    font-family: "Adineue",Helvetica, Arial, sans-serif;

    ::after {
        top: 4px;
        left: 4px;
        content: '';
        width: 98%;
        height: 97%;
        position: absolute;
        z-index: -1;
        border: solid 1px ${({color}) => budgetColor(color)};
    }
`;