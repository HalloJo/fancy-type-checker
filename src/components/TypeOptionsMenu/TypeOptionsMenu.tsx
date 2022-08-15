
import { forwardRef, ReactElement, useState }  from 'react';
import InputElement from '../InputElement/InputElement';
import Logo from '../Logo/Logo';
import { inputElementData } from '../../data/inputElementData'
import "./TypeOptionsMenu.scss"


const TypeOptionsMenu = forwardRef<HTMLDivElement>((props, ref): ReactElement => {

    const [inputData, setInputData] = useState(inputElementData)

    return (
        <menu className='typeOptionsMenu' >
            <Logo ref={ref} />
            <div className="optionsWrapper">
                {inputData.map((input) => {

                    const {label, type, placeholder, value, min, max, checked, forLabel} = input

                    return (
                        <InputElement placeholder={placeholder} type={type} label={label} forLabel={forLabel} checked={checked} value={value} min={min} max={max}  />

                    )
                })}
            </div>
        </menu>
    )
})

export default TypeOptionsMenu