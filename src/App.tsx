import { useEffect, useRef} from 'react';
import { Back, gsap } from 'gsap';
import SplitText from 'gsap/SplitText';
import './App.scss';
import Output from './components/Output/Output';
import TypeOptionsMenu from './components/TypeOptionsMenu/TypeOptionsMenu';

const App = () => {

  const logoRef = useRef(null)
  const logoParts = gsap.utils.selector(logoRef)
  
  const outputRef = useRef(null)
  const outputText = gsap.utils.selector(outputRef)
  
  
  useEffect(()=>{
    const timeline = gsap.timeline({duration: 0.3})
    const splitOutputText = new SplitText(outputText(".outputText"), {type:"words"})

        timeline.fromTo(logoParts(".logoPart"), {
          autoAlpha: 0,
          x: -20,
        },{
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          ease: Back.easeOut.config(5),
        })

        timeline.fromTo(splitOutputText.words, {
          autoAlpha: 0,
          x: 20,
        },{
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          ease: Back.easeOut.config(5),
          // clearProps: "all",
        },).then(() => {
          splitOutputText.revert();
        })

        return () => {
          timeline.kill()
          splitOutputText.revert()
        }
        
    }, [outputText, logoParts])



  return (
    <div className="App">
        <TypeOptionsMenu ref={logoRef} />
        <Output ref={outputRef} output='The quick brown fox jumps over the lazy dog' />
    </div>
  );
}

export default App;
