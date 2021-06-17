import React, { useState, FC } from 'react';
import { H4, InputRange, Budget, BudgetColor } from '@adidas/ui';
import { Container, Title } from './measure-input.styles';

interface MeasureInputProps {
    min: number;
    max: number;
    title: string;
    symbol: string;
    defaultValue?: number;
    budgetColor?: BudgetColor;
    onChange: (value: number) => void;
}

export const MeasureInput: FC<MeasureInputProps> = ({min, max, defaultValue, title, symbol, budgetColor = BudgetColor.Black, onChange}) => {
    const [measure, setMeasure] = useState<number>(defaultValue || min);

    const handleChange = (value: number) => {
        setMeasure(value);
        onChange(value);
    }
    return (
        <Container>
            <Title>
                <H4>{title}</H4>
                <Budget color={budgetColor}>{`${measure} ${symbol}`}</Budget>
            </Title>
            <InputRange min={min} max={max} onChange={handleChange} defaultValue={defaultValue || min} />
        </Container>

    );
}
