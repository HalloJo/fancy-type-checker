
import { forwardRef, ReactElement, useState }  from 'react';
import InputElement from '../InputElement/InputElement';
import Logo from '../Logo/Logo';
import "./TypeOptionsMenu.scss"

type TypeOptionsProps = {
    output: string,
    onChange: (value: string) => void
}

const TypeOptionsMenu = forwardRef<HTMLDivElement, TypeOptionsProps>((props, ref): ReactElement => {

    const {output, onChange} = props

    return (
        <menu className="typeOptionsMenu" >
            <Logo ref={ref} />
            <div className="typeOptionsMenu__options">
                <InputElement className="regular" placeholder="Type your text here" type="text" label="Demo text" forLabel="Demo text" value={output} onChange={(output)=> onChange(output)} />
            </div>
        </menu>
    )
})

export default TypeOptionsMenu