import React from 'react';
import { storiesOf } from '@storybook/react';

import { H1 } from './h1';
import { H4 } from './h4';

storiesOf('TEXT', module)
    .add('H1', () => {

        return (<H1>Adidas hero</H1>);
    }, {
        info: 'This is a simple H1 title',
    })
    .add('H4', () => {

        return (<H4>Adidas h4</H4>);
    }, {
        info: 'This is a simple H4 title',
    });
    