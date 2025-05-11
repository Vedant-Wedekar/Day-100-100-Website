import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";
import k from './assets/bgkk.jpg'
import p11 from './assets/p11.jpg'
import p12 from './assets/p12.jpg'
import p13 from './assets/p13.jpg'
import bg2 from './assets/bg-k2.jpg'
import bg3 from './assets/bg-k3.jpg'
const App = () => {
  return (
    <div className='w-full h-screen '>
<div className="flex justify-evenly items-center w-full h-40 text-black gap-250 mt-[-20px]  fnt font-bold text-[14px]">

                <div className="flex gap-10">
               <div className="">V.FINY</div>
           <div className="grid fnt">
               <div className="">PLOT NO. 116 ,SHIKSHAK COLONY ,</div>
               <div className="">DIGHORI , NAGPUR . </div>
           </div>
              </div>

           
                      <div className="flex gap-10">
                  <div className="">MENU</div>
                  <div className="">CART()</div>
            </div> 
            </div> 

            <div className="flex justify-evenly gap-[600px] fnt text-[300px] font-extrabold mt-[-110px]">
              <div className="">V.</div>
              <div className="">N.Y.</div>
            </div>

            <div className=" w-full flex justify-center"><img style={{width:1400,height:700}} src={k}></img></div>


          <div className="jp font-extrabold mt-10 ml-10">This world… is cruel. But also… so beautiful.</div>
   
          <div className="flex justify-between text-[130px] px-10 fnt font-extrabold">
            <div className="">DISCOVER</div>
            <div className="">WORK</div>
          </div>


          <div className="flex justify-between px-10 fnt gap-10">
            <div className="">
              <div className="">Fig 01.</div>
              <div className=""><img style={{width:600,height:500}} src={p11}></img></div>
            </div>

            <div className="">
              <div className="">fig 02.</div>
              <div className=""><img style={{width:500,height:600}} src={p12}></img></div>
            </div>
          </div>



            <div className="flex justify-between fnt"> 
                       <div className=" ml-10 mt-10">
                             <div className="">fig 02.</div>
                             <div className=""><img style={{width:500,height:600}} src={p13}></img></div>
                      </div>
            
                       <div className="mr-10 mt-10 pt-100 pr-100 w-[700px] h-[300px]">
                                   <div className="">More:</div>
                                   <hr /> 
                                   <div className="flex justify-between">
                                   <div className="mt-2">View All Available Work </div> <BsArrowUpRight  style={{marginTop:10 , marginBottom:10}} /></div>
                                   <hr /> 

                       </div>
          </div>

          <div className="px-10 py-20 ">
            <hr/>
            <div className=" jp py-10">  (The Gallery)</div>
            <div className=" fnt text-8xl font-medium flex justify-between">
            <div className="">The Seaport </div>
            <div className="">Gallery</div>
          </div>
          </div>

          <div className=""><img style={{width:1500 , paddingLeft:600}} src={bg2}></img></div>









          <div className="pt-30 ">

          <div className="flex justify-between px-10 fnt font-medium mb-4">
            <div className="">116 TG VED </div>
            <div className=""> NAGPUR,MH</div>
          </div>
          <div className="px-10"><img src={bg3}></img></div>
          </div>




          <div className="flex justify-between mt-30 px-6 py-6 FNT">
            <div className="">Art Objects <br></br> Nagpur,MH</div>

            <div className="">
              <div className="">🚀 100 Days, 100 Websites — Day 3</div>
              <H1>       Today marks <strong>Day 3</strong> of my <em>100 Days, 100 Websites</em> challenge! 🎯<br />
        I'm learning, building, and sharing every single day—one website at a time. <br />
        It's already been an exciting journey, and I'm pumped for what's ahead!</H1>
        <H1>  💻 Check out the code and progress on my{' '}</H1>
        <A href="https://github.com/Vedant-Wedekar" > GitHub profile</A>



            </div>

            <div className="flex justify-between w-[250px] h-2  0 ">
            <div className="">Instagram <br></br> <a href='https://www.instagram.com/pvt__.ved/'> VEDANT.Dev</a></div>
            <div className="">DO HARD WORK <br></br>MF</div>

            </div>




          </div>











          </div>
  )
}

export default App
