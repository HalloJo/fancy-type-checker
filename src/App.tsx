import { useEffect, useRef} from 'react';
import { Back, gsap } from 'gsap';
import './App.scss';
import Output from './components/Output/Output';
import TypeOptionsMenu from './components/TypeOptionsMenu/TypeOptionsMenu';

const App = () => {

  const logoRef = useRef(null)
  const logoParts = gsap.utils.selector(logoRef)

    useEffect(()=>{
        gsap.to(logoParts(".logoPart"), {
            autoAlpha: 1,
            x: 0,
            stagger: 0.33,
            ease: Back.easeOut.config(5),
            duration: 0.3,
        })
    })



  return (
    <div className="App">
        <TypeOptionsMenu ref={logoRef} />
        <Output output='The quick brown fox jumps over the lazy dog' />
    </div>
  );
}

export default App;
