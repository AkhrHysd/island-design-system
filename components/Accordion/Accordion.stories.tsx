import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Accordion } from './Accordion'

export default {
    component: Accordion,
} as ComponentMeta<typeof Accordion>

const child = <div>accordionchildren</div>
export const Primary: ComponentStory<typeof Accordion> = () => <Accordion title="test">{child}</Accordion>

export const DomExist: ComponentStory<typeof Accordion> = () => <Accordion title="test" elementExist={true}>{child}</Accordion>