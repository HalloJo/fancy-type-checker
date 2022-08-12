import { Back, gsap } from 'gsap';
import { ReactElement, useEffect, useRef }  from 'react';
import "./TypeOptionsMenu.scss"


const TypeOptionsMenu = (): ReactElement => {

    const logoRef = useRef(null)
    const logoParts = gsap.utils.selector(logoRef)

    useEffect(()=>{
        gsap.to(logoParts(".typeOptionsMenu__logoPart"), {
            autoAlpha: 1,
            x: 0,
            stagger: 0.33,
            ease: Back.easeOut.config(5),
            duration: 0.3,
        })
    })

    return (
        <menu className='typeOptionsMenu'>
            <div className='typeOptionsMenu__logo' ref={logoRef}>
                <p className='typeOptionsMenu__logoPart'>Fancy</p>
                <p className='typeOptionsMenu__logoPart'>Type</p>
                <p className='typeOptionsMenu__logoPart'>Checker</p>
            </div>
        </menu>
    )
}

export default TypeOptionsMenu