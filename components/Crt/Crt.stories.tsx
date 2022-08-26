import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Crt } from './Crt'

export default {
    component: Crt,
} as ComponentMeta<typeof Crt>


const loren = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const Primary: ComponentStory<typeof Crt> = () => <Crt>{loren}</Crt>;