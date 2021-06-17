import React, { FC, useState, memo, ChangeEvent } from 'react';

import { Input, RangeContainer } from './range.styled';

interface RangeProps {
    min: number;
    max: number;
    defaultValue: number;
    onChange: (value: number) => void;
}

const Range: FC<RangeProps> = ({ min, max, defaultValue, onChange }) => {
    const [value, setValue] = useState<number>(defaultValue);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const eventValue = parseInt(event.target.value, 10);
        onChange(eventValue);
        setValue(eventValue);
    }

    return (
        <RangeContainer>
            <span>{min}</span>
            <Input 
                step='1'
                min={min}
                max={max}
                type='range'
                role='range'
                value={value}
                onChange={handleChange}
            />
            <span>{max}</span>
        </RangeContainer>
    );
};

export const InputRange = memo(Range);
