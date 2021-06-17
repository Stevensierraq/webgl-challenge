import React from 'react';
import { storiesOf } from '@storybook/react';

import { Header } from './';

storiesOf('HEADER', module)
    .add('Header', () => {

        return (<Header></Header>);
    }, {
        info: 'This is a simple Header',
    })
    