import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Marquee } from './Marquee'

export default {
    component: Marquee,
} as ComponentMeta<typeof Marquee>

export const Primary: ComponentStory<typeof Marquee> = () => <Marquee>marquee</Marquee>;