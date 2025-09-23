import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import W1 from '../assets/Ass1.png'
import W2 from '../assets/Ass2.png'
import W3 from '../assets/Ass3.png'
import W4 from '../assets/Ass4.png'
import W5 from '../assets/Ass5.png'
import W6 from '../assets/Ass6.png'
import W7 from '../assets/Ass7.png'
import W8 from '../assets/Ass8.png'
import W9 from '../assets/Ass9.png'
import W10 from '../assets/Ass10.png';
import W11 from '../assets/Ass11.png';
import W12 from '../assets/Ass12.png';
import W13 from '../assets/Ass13.png';
import W14 from '../assets/Ass14.png';
import W15 from '../assets/Ass15.png';
import Lanyard from '../components/elements/Lanyard'
const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
   W1,
   W2,
   W3,
   W4,
   W5,
   W6,
   W7,
   W8,
   W9,
   W10,
   W11,
   W12,
   W13,
   W14,
   W15,
  
  ]
  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  return (
    <div className='parent'>


      <div id='page1' className='  '>
        <div ref={imageDivRef} className='absolute overflow-hidden mt-130 lg:h-[30vw] h-[70vw] lg:rounded-3xl rounded-xl lg:w-[40vw] w-[25vw] lg:top-96 -top-80 lg:left-[5vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>

        <div className='relative font-[font2]'>
                    <div className='lg:mt-[38vh] mt-[30vh]'>
                      <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
                            Douze</h1>
                    </div>
                       <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
                     <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
                    </div>
        </div>
      </div>
   <div className="">

    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
   </div>
{/* 
      <div id='page2' className=" h-screen">

      </div> */}

      {/* <div className="w-300">
<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
</div> */}
    </div>
  )
}

export default Agence