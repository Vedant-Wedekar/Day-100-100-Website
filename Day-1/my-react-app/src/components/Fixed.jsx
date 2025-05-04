import React from 'react'
import flower from '../assets/kj.jpg'
import fake from '../assets/fake.jpg'
import taak from '../assets/taak.jpg'
import uoo from '../assets/uoo.jpg'
import ji from '../assets/ji.jpeg'
import fd from '../assets/fd.jpeg'
const Fixed = () => {
  
  return (
    <div className=' bg-[#111111] w-full h-[4650px] tf'>
        <div className="fixed bg-[#111111] w-full h-20  flex justify-between text-white pt-10 pl-10 pr-10">
            <p>Generative AI Work</p>
            <p className='font-medium text-4xl mr-5'>AUFFY</p>
            <p>Info</p>
        </div>

        <div className="text-white text-[15px] ml-10"><h1>(Selcted)</h1></div>


      <div className="flex gaps-10 ">

          <div className=" fixed bg-[#111111] text-white flex justify-evenly w-1/3 h-screen text-[15px] mt-[500px]">
                               <div className=""><h1>(overview)</h1></div>
                          <div className=""><h1>(Tech)</h1></div>
                           <div className=""><h1>(other)</h1></div>
                          <div className=""><h1>(Attention)</h1></div>
          </div>

          <div className="">
                        <div className="text-white ml-150 flex justify-between w-[400px] h-100 pt-15  gap-40">
                        <div className=" text-white font-medium text-4xl mt-60">
                         <h1 className="text-white">01</h1>
                        </div>
                        <img className="w-[370px] h-[550px] mt-10" src={flower} alt="Flower" />
                         </div>


                         <div className="text-white ml-150 mt-[300px] flex justify-between w-[400px] h-100  gap-40">
                        <div className=" text-white font-medium text-4xl mt-60">
                         <h1 className="text-white">02</h1>
                        </div>
                        <img className="w-[370px] h-[550px] mt-10" src={fake} alt="Flower" />
                         </div>

                         <div className="text-white ml-150 mt-[300px] flex justify-between w-[400px] h-100  gap-40">
                        <div className=" text-white font-medium text-4xl mt-60">
                         <h1 className="text-white">03</h1>
                        </div>
                        <img className="w-[370px] h-[550px] mt-10 cover"  src={fd} alt="Flower" />
                         </div>


                         <div className="text-white ml-150 mt-[300px] flex justify-between w-[490px] h-100  gap-40">
                        <div className=" text-white font-medium text-4xl mt-60">
                         <h1 className="text-white">04</h1>
                        </div>
                        <img className="w-[370px] h-[550px] mt-10" src={taak} alt="Flower" />
                         </div>


                         <div className="text-white ml-150 mt-[300px] flex justify-between w-[400px] h-100  gap-40">
                        <div className=" text-white font-medium text-4xl mt-60">
                         <h1 className="text-white">05</h1>
                        </div>
                        <img className="w-[670px] h-[550px] mt-10" src={uoo} alt="Flower" />
                         </div>


                         <div className="text-white ml-150 mt-[300px] flex justify-between w-[400px] h-100  gap-40">
                        <div className=" text-white font-medium text-4xl mt-60">
                         <h1 className="text-white">06</h1>
                        </div>
                        <img className="w-[370px] h-[550px] mt-10" src={ji} alt="Flower" />
                         </div>


                         
                         <div className="text-white ml-185 mt-[300px] flex justify-between w-[400px] h-100  gap-40 ">
                         <p className="text-sm">Day 1 of 100 — One step closer to mastering web development.</p>
                         <p className="text-xs mt-2">Built with ❤️ by <a className='text-white text-2xl underline' href='https://github.com/Vedant-Wedekar'>VEDANT WEDEKAR</a></p>
                         <p className="text-xs mt-1 opacity-70">© {new Date().getFullYear()} 100 Days / 100 Websites Challenge</p>
                         </div>



           
           
           
           </div>





      </div>

      


    </div>
  )
}

export default Fixed
