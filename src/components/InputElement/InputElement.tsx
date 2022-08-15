import { forwardRef, ReactElement } from "react"
import "./InputElement.scss"

type InputProps = {
    label: string,
    type: string,
    forLabel: string,
    placeholder?: string,
    value?: string | number,
    checked?: boolean,
    min?: number
    max?: number
    onChange?: (value: string) => void
}

const InputElement = forwardRef<HTMLDivElement, InputProps>((props, ref):ReactElement => {

    const {label, type, placeholder, value, onChange, min, max, checked, forLabel} = props

    return (
        <div>
            <label htmlFor={forLabel}>{label}</label>
            <input type={type} placeholder={placeholder} min={min} max={max} value={value} checked={checked} />
        </div>
    )
}) 

export default InputElement