import { FC, ReactNode } from "react"
import { css, keyframes } from '@emotion/css'

type Props = {
    children: ReactNode
}

export const Crt: FC<Props> = ({children}) => {
    return (
        <div className={crt}>
            {children}
        </div>
    )
}
const effect = keyframes`
    from {
        text-shadow: 1px 0 0 #ea36af, -2px 0 0 #75fa69; // TODO: 文字色に合わせて生成できる
    }
    to {
        text-shadow: 2px 0.5px 2px #ea36af, -1px -0.5px 2px #75fa69;// TODO: 文字色に合わせて生成できる
    }
`
const crt = css`
    background: #111; // props
    padding: 1em;
    color: #eee; // props
    font-size: 1em;
    line-height: 1;
    text-shadow: 0.06rem 0 0.06rem #ea36af, -0.125rem 0 0.06rem #75fa69;
    letter-spacing: 0.125em;
    animation-duration: 0.01s;
    animation-name: ${effect};
    animation-iteration-count: infinite;
    animation-direction: alternate;
`