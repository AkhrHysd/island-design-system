import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode 
}

export const Button: FC<Props> = ({ children, ...props }) => {
    return (
        <button>
            {children}
        </button>
    )
}