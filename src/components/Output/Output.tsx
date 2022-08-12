import React, { forwardRef, ReactElement } from 'react'
import "./Output.scss"

type OutputProps = {
    output: string
}

const Output = forwardRef<HTMLDivElement, OutputProps>(({output}, ref): ReactElement => {
    return (
        <div className='output' ref={ref}>
            <h1 className='outputText'>{output}</h1>
        </div>
    )
})

export default Output