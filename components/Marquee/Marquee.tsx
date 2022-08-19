import { FC, ReactNode } from "react"
import { css, SerializedStyles } from '@emotion/react'

type Props = {
    children: ReactNode
    _css?: SerializedStyles
}

export const Marquee: FC<Props> = ({children, _css}) => {
    return (
        <div>
            <span>{children}</span>
        </div>
    )
}

const title = (_css: SerializedStyles): SerializedStyles => css`
  position: relative;
  font-size: 50px;
  line-height: 1;
  ${_css}
`