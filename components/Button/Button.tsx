/*
sugoku dasai botan
*/
import { css } from "@emotion/css"
import { FC, ReactNode, useRef } from "react"
import { AriaButtonProps, useButton } from 'react-aria'

type Props = {
    children: ReactNode
} & AriaButtonProps

export const Button: FC<Props> = ({ children, ...props }) => {
    const ref = useRef<HTMLButtonElement>(null)
    const { buttonProps } = useButton(props, ref)
    return (
        <button className={styles.button} ref={ref} {...buttonProps}>
            <div className={styles.inner}>
                {children}
            </div>
        </button>
    )
}

const styles = {
    button: css`
        background-color: #981212; //シャドウ用の色定義
        border: none;
        border-radius: 2px;
        padding: 2px;
        cursor: pointer;
    `,
    inner: css`
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        box-sizing: border-box;
        background-color: red; // 本来のボタンカラー
        border: 1px solid #fabdbd; // TODO: ハイライト　カラーは背景色に混ぜてくすませる
        padding: 5px 30px;
        border-radius: 2px;
        width: 100%;
        height: 100%;
    `
}