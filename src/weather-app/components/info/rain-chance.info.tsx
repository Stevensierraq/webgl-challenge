import React from 'react';
import { H4, Budget, BudgetColor } from '@adidas/ui';

import { Container } from './info.styles';

export const ChanceOfRainInfo = ({chance}) => (
    <Container>
        <H4>Chance of rain</H4>
        <Budget color={BudgetColor.Yellow}>{Math.floor(chance)}%</Budget>
    </Container>
);
