
import { forwardRef, ReactElement }  from 'react';
import Logo from '../Logo/Logo';
import "./TypeOptionsMenu.scss"


const TypeOptionsMenu = forwardRef<HTMLDivElement>((props, ref): ReactElement => {

    return (
        <menu className='typeOptionsMenu' >
            <Logo ref={ref} />
        </menu>
    )
})

export default TypeOptionsMenu