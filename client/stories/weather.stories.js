import React from 'react'
import { storiesOf } from '@storybook/react'

import Weather from '../src/components/weather'

storiesOf('Weather', module)
  .add('Light intensity drizzle', () => (
    <Weather
      position='A1:B2'
      data={{
        name: 'Drizzle',
        id: 300,
        description: 'light intensity drizzle',
        temperature: 123,
        humidity: 81,
        wind: 4.1,
      }}
    />
  ))
