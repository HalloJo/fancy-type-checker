import React, { ReactElement } from 'react'
import "./Output.scss"

type OutputProps = {
    output: string
}

const Output = ({output}:OutputProps): ReactElement => {
    return (
        <div className='output'>{output}</div>
    )
}

export default Output