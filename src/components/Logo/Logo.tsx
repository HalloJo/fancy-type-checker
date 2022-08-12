import { forwardRef, ReactElement } from "react"
import "./Logo.scss"


const Logo = forwardRef<HTMLDivElement>((props, ref):ReactElement => {

    return(
        <div className='logo' ref={ref}>
            <p className='logoPart'>Fancy</p>
            <p className='logoPart'>Type</p>
            <p className='logoPart'>Checker</p>
        </div>
    )
})

export default Logo