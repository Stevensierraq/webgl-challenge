import React, { FC } from 'react'
import { H4, InputRange, Budget, BudgetColor } from '@adidas/ui';
import { AmountOfRainfallDayData } from '@infrastructure/services/lib/types';
import { Container } from './tabs.styles';

export const Tabs: FC<{tabs: AmountOfRainfallDayData[], tabSelected: AmountOfRainfallDayData, onSelectTab: (tab: AmountOfRainfallDayData) => void}> = ({tabs, tabSelected, onSelectTab}) => {
    return (
        <Container>
            <H4>Day</H4>
            {tabs && tabs.map((tab) => (
                <Budget 
                    key={tab.day}
                    //@ts-ignore
                    onClick={()=>onSelectTab(tab)}
                    color={tabSelected.day === tab.day ? BudgetColor.Yellow : BudgetColor.Black}
                >
                    {tab.day}
                </Budget>
            ))}
        </Container>
    )

} 