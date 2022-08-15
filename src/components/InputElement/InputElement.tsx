import { forwardRef, ReactElement } from "react"
import "./InputElement.scss"

type InputProps = {
    label: string,
    className: string,
    type: string,
    forLabel: string,
    placeholder?: string,
    value?: string | number,
    onChange: (value: string) => void
}

const InputElement = forwardRef<HTMLDivElement, InputProps>((props, ref):ReactElement => {

    const {label, type, placeholder, value, onChange, forLabel, className} = props

    return (
        <div className="inputElement" ref={ref}>
            <label className="inputElement__label" htmlFor={forLabel}>{label}</label>
            <input className={className} type={type} placeholder={placeholder} value={value} onChange={(event)=> onChange(event.target.value) }  />
        </div>
    )
}) 

export default InputElement