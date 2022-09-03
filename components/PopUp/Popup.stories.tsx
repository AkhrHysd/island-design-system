import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PopUp } from './PopUp'
import { css } from '@emotion/css'

export const StoryComponent = () => {
    return (
        <div className={styles.wrapper}>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
            <PopUp>trigger</PopUp>
        </div>
    )
}


export default {
    component: StoryComponent,
} as ComponentMeta<typeof PopUp>

export const Primary: ComponentStory<typeof PopUp> = () => <PopUp onPress={() => alert('sugoku dasai botan')}>Button</PopUp>

const styles = {
    wrapper: css`
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px;
        height: 300px;
        overflow-y: scroll;
    `
}