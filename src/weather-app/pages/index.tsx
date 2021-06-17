import dynamic from 'next/dynamic'
import { BudgetColor } from '@adidas/ui';
import React, { useEffect, useState } from 'react';

import { chanceOfRain } from '@infrastructure/services/lib/chance-of-rain';
import { getAmountOfRainfall } from '@infrastructure/services/lib/weather-repository';
import { AmountOfRainfallDayData, ChanceOfRainData } from '@infrastructure/services/lib/types';

import { MeasureInput } from '../components/measure-input';
import { FlexRow, MainContainer, InputsContainer, InfoContainer, TabsContainer } from '../components/layout';

import { Tabs } from '../components/tabs/tabs';
import { RainfallInfo } from '../components/info/rainfall-info';
import { ChanceOfRainInfo } from '../components/info/rain-chance.info';
import { DEFAULT_PRESSURE, DEFAULT_TEMPERATURE } from '../constants';

const WebGLComponent = dynamic(
  () => import('../components/webgl'),
  { ssr: false }
);

interface HomeProps {
  amountOfRainfallData: Array<AmountOfRainfallDayData>;
}

export default function Home({ amountOfRainfallData }: HomeProps) {
  const [pressure, setPressure ]= useState<number>(DEFAULT_PRESSURE);
  const [temperature, setTemperature] = useState<number>(DEFAULT_TEMPERATURE);
  const [chanceOfRainData, setChanceOfRainData] = useState<Array<ChanceOfRainData>>([]);
  const [daySelected, setDaySelected] = useState<AmountOfRainfallDayData>(amountOfRainfallData[0]);

  useEffect(() => {
    if(!!amountOfRainfallData.length) getChanceOfRainData();
  }, [temperature, pressure, amountOfRainfallData]);

  const getChanceOfRainData = () => {
    const data = amountOfRainfallData.map(({ day, amount}) => {
      const {lower_bound, mean, upper_bound} = chanceOfRain(pressure, temperature, amount);
      return { day, lower_bound, mean, upper_bound };
    });

    setChanceOfRainData(data);
  };

  const chanceOfRainByDay: ChanceOfRainData = chanceOfRainData.find(chanceData => chanceData.day === daySelected.day);
  
  return (
      <MainContainer>
        <InputsContainer>
          <FlexRow>
            <MeasureInput
              min={970}
              max={1030}
              symbol='hPa'
              title='Pressure'
              onChange={setPressure}
              defaultValue={DEFAULT_PRESSURE}
            />
            <MeasureInput
              min={10}
              max={35}
              symbol='°C'
              title='Temperature'
              onChange={setTemperature}
              budgetColor={BudgetColor.Yellow}
              defaultValue={DEFAULT_TEMPERATURE}
            />
          </FlexRow>
        </InputsContainer>
        <TabsContainer>
          <Tabs
            tabSelected={daySelected}
            tabs={amountOfRainfallData}
            onSelectTab={setDaySelected}
          />
        </TabsContainer>
        <InfoContainer>
          <FlexRow>
            <RainfallInfo amount={daySelected.amount} />
            <ChanceOfRainInfo chance={chanceOfRainByDay?.upper_bound || 0}/>
          </FlexRow>
        </InfoContainer>
        <WebGLComponent 
          pressure={pressure} 
          temperature={temperature}
          amountOfRain={daySelected.amount}
          chanceOfRain={chanceOfRainByDay?.upper_bound || 0}
        />
      </MainContainer>
      );
};

export async function getServerSideProps() {
  const data = await getAmountOfRainfall();
  const { days } = data.shift();

  return {
    props: { amountOfRainfallData: days }, // will be passed to the page component as props
  }
};
