import { ReactNode } from "react"
import { LowerBarProps }
type SectionType = 'default' | 'header'
type SectionProp = {
    type?: SectionType
}

export const Section: React.FC<SectionProp> = ({ type = 'default', children }) => {
    let className = "section hero"
    if (type === 'header')
        className += ' header'
    return (
        <div className={className}>
            {children}
        </div>

    )
}
