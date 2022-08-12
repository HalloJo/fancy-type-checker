import { ReactElement }  from 'react';
import "./TypeOptionsMenu.scss"
import FTCLogo from "../../assets/fancy-type-checker-logo.svg"

const TypeOptionsMenu = (): ReactElement => {
    return (
        <aside className='typeOptionsMenu'>
            <img className="typeOptionsMenu__logo" src={FTCLogo} alt="Fancy Type Checker logo" />
            <p>The sidebar component!</p>
        </aside>
    )
}

export default TypeOptionsMenu