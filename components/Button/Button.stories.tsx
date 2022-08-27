import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
    component: Button,
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = () => <Button onPress={() => alert('sugoku dasai botan')}>Button</Button>;