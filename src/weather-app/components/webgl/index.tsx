import React, { useEffect, FC } from 'react';
import { webGlRender, setPressure, setTemperature, createRain } from '@adidas/webgl';

import { DEFAULT_PRESSURE } from '../../constants';
import { WebGlComponentProps } from './webgl.types';

const WebGLComponent: FC<WebGlComponentProps> = ({temperature, pressure, amountOfRain, chanceOfRain}) => {
    useEffect(() => {
        webGlRender();
    }, []);

    useEffect(() => {
        setTemperature(temperature)
    }, [temperature]);

    useEffect(() => {
        setPressure(pressure - DEFAULT_PRESSURE)
    }, [pressure]); 

    useEffect(() => {
        if(chanceOfRain > 40) {
            createRain(amountOfRain);
        };
    }, [amountOfRain, chanceOfRain]); 

    return <></>;
};

export default WebGLComponent;
