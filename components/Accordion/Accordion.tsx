import { css } from "@emotion/css"
import { FC, ReactNode, useState } from "react"


export type Props = {
    title: string
    children: ReactNode
    elementExist?: boolean
}

export const Accordion: FC<Props> = ({title, children, elementExist = false}) => {
    const [ isAccordionOpen, setIsAccordionOpen ] = useState(false)
    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen)
    }
    return (
        <>
            <button
                type="button"
                aria-expoand={isAccordionOpen}
                aria-owns={`accordion-section-${title}`}
                id={`accordion-${title}`}
                onClick={toggleAccordion}
            >
                {title}
            </button>
            {elementExist && 
                <div
                    className={styles.section(isAccordionOpen)}
                    id={`accordion-section-${title}`}
                    role="region"
                    aria-labelledby={`accordion-${title}`}
                    aria-hidden={!isAccordionOpen}
                >
                    {children}
                </div>
            }

                {(isAccordionOpen && !elementExist) &&
                    <div
                        id={`accordion-section-${title}`}
                        role="region"
                        aria-labelledby={`accordion-${title}`}
                        aria-hidden={!isAccordionOpen}
                    >
                        {children}
                    </div>
                }
        </>
    )
}

const styles = {
    section: (isOpen: boolean) => { 
       return css`
            visibility: ${isOpen? "visible": "hidden"}        
        `
    },
}