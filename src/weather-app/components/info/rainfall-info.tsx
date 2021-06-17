import React from 'react';
import { H4, Budget, BudgetColor } from '@adidas/ui';

import { Container } from './info.styles';

export const RainfallInfo = ({amount}) => (
    <Container>
        <H4>Amount of rainfall</H4>
        <Budget color={BudgetColor.Blue}>{amount}</Budget>
    </Container>
);
