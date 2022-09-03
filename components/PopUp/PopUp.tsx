import { css } from "@emotion/css"
import { FC, ReactNode, useRef } from "react"
import { AriaButtonProps, useButton, useId } from 'react-aria'
import { Position, usePopUp } from "../../hooks/usePopUp"

type Props = {
    children: ReactNode
} & AriaButtonProps

export const PopUp: FC<Props> = ({ children, ...props }) => {
    const id = useId()
    const ref = useRef<HTMLButtonElement>(null)
    const { buttonProps } = useButton(props, ref)
    const popupRef = useRef<HTMLDivElement>(null)
    const targetSelector = `[data-target="tooltip-${id}"]`
    const { position, visible } = usePopUp({
        targetSelector, 
        ref: popupRef,
        trigger: 'click'
    })
    return (
        <>
            <button data-target={`tooltip-${id}`} className={styles.button} {...buttonProps}>
                <div className={styles.inner}>
                    {children}
                </div>
            </button>
            <div ref={popupRef} className={styles.tooltip(position, visible)}>
                tooltip
            </div>
        </>
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
    `,
    tooltip: (position: Position, visible: boolean) => css`
            position: fixed;
            top: ${position.offsetY}px;
            left: ${position.offsetX}px;
            visibility: ${visible? 'visible': 'hidden' };
        `,
}