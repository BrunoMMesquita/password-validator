import { DefaultTheme } from 'styled-components'
import { white, darkGray, green, red } from '@/Presentation/styles/colors'

export const Default: DefaultTheme = {
    title: 'default',

    colors: {
      background: darkGray,
      text: white,
      primary: green,
      error: red
    },

};
