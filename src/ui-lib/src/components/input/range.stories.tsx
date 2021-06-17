import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { InputRange } from './range';

storiesOf('INPUT', module)
    .add('Range', () => {
        const onChange = action('Range value => ');

        return (<InputRange min={0} max={100} defaultValue={90} onChange={onChange} />);
    });