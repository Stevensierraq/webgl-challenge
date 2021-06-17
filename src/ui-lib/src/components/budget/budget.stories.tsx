import React from 'react';
import { storiesOf } from '@storybook/react';

import { Budget, BudgetColor } from './budget';

storiesOf('BUDGET', module)
    .add('Basic', () => {

        return (<>
                <Budget>120º</Budget>
                <div style={{height: 40}} />
                <Budget color={BudgetColor.Yellow}>120º</Budget>
                <div style={{height: 40}} />
                <Budget color={BudgetColor.Blue}>120º</Budget>
            </>
        );
    }, {
        info: 'This is a budget',
    });