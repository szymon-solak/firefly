import React from 'react'
import { storiesOf } from '@storybook/react'

import Quote from '../src/components/quote'

storiesOf('Quote', module)
  .add('Displaying quote', () => (
    <Quote
      position='A1:B2'
      data={{
        text: `“The story so far:
                In the beginning the Universe was created.
                This has made a lot of people very angry and been widely regarded as a bad move.”
              `,
        author: 'Douglas Adams',
      }}
    />
  ))
