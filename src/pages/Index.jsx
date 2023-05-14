import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Buttonsearch from '../components/Buttonsearch'


export default function Index() {
    return (
    <>
       
        
        <div className="flex flex-col justify-center items-center w-full bg-[#000000dd] h-[100%]">
        <Navbar />
           <div className='flex flex-col justify-between items-center w-[95%] min-h-[180vh] mt-2 mb-2 bg-[#04071b80] shadow-md shadow-black'>
           <div className='w-full h-[580px] flex justify-between items-center  shadow-xl shadow-black  bg-[url(./images/beta.jpg)] bg-right-top bg-contain bg-no-repeat bg-black rounded-b-[5%] '>
            <div className='w-[50%] h-[60%]   flex flex-col justify-around text-white'>
                <h1 className=' text-[4rem] flex  p-4 tracking-[3px]'> <span className='text-[#ffe53d] '>|</span> Fish Planet <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  w-10 h-10">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                     </svg>
                </h1>
               <p className='w-[65%] h-[30%]  pl-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur maxime corrupti optio dolor accusamus sunt eius vero nam deleniti incidunt tempore eveniet, dolorum quod, recusandae aperiam reprehenderit autem ab.</p> 
               <Buttonsearch />
            </div>
            <p className='w-[30%] h-[25%]  text-white flex items-start justify-end mr-2 text-end tracking-[6px]'>-Acuario | <br /> - Peces |<br /> - Mascotas |</p> 
           </div>
           <div className=' w-[85.5%] h-[400px] absolute top-[520px] flex justify-evenly '>
               <div className='transition duration-1000  hover:scale-[1.1]   flex items-end pb-3 pl-3 w-[23%] bg-[url(./images/angel.jpg)] bg-cover  shadow-xl border rounded-md shadow-black h-[60%] '>
                <p className='text-white  tracking-[3px] '>NOMBRE</p>
               </div>
               <div className='transition duration-1000  hover:scale-[1.1] flex items-start pb-3 pl-3 w-[23%] bg-[url(./images/pecesdo.jpg)] bg-cover  shadow-xl border rounded-md shadow-black h-[60%] '>
                <p className='text-white tracking-[3px] '>NOMBRE</p>
               </div>
               <div className='transition duration-1000  hover:scale-[1.1] flex items-end pb-3 pl-3 w-[23%] bg-[url(./images/globo.jpg)] bg-cover  shadow-xl border rounded-md shadow-black h-[60%] '>
                <p className='text-white tracking-[3px] '>NOMBRE</p>
               </div>
               <div className='transition duration-1000  hover:scale-[1.1] flex items-start pb-3 pl-3 w-[23%] bg-[url(./images/ciruama.jpg)] bg-cover  shadow-xl border rounded-md shadow-black h-[60%] '>
                <p className='text-white tracking-[3px] '>NOMBRE</p>
               </div>
           </div>
             <div className=' flex flex-col justify-end items-center  w-full h-[600px] '>
               <div className='w-full  h-[70%] flex justify-evenly'>
               <div className='w-[25%] h-[100%] rounded-[8%] shadow-xl shadow-black  p-[3px] bg-[url(./images/medu3.jpg)] bg-center bg-cover flex flex-col justify-around items-center'>
                <p className='text-white text-[2rem] bg-[#00000056] tracking-[6px] font-open p-2 border-l-[3px]  w-[97%]] '>Galeria de fotos 🌊</p>
                <p className='text-white bg-[#000000c2] font-bold p-2 text-center tracking-[2px]'>Aquí podrás descubrir la increíble belleza y diversidad del océano, hogar de innumerables criaturas fascinantes y misteriosas. Sumérgete con nosotros en un mundo submarino lleno de vida y sorpresas</p>
                <button className='w-[200px]  h-[50px] bg-[#e9e5e9a1] bg-blur-[2px] text-black rounded-md font-bold font-open tracking-tighter '>Descubrir ahora!</button>
               </div>
               <div className='w-[25%] h-[100%] rounded-[8%] shadow-xl shadow-black p-[3px] bg-[#1213319b] bg-[url(./images/nemo2.jpg)] bg-cover bg-center flex flex-col justify-around items-center'>
               <p className='text-white text-[2rem] bg-[#000000cb] tracking-[6px] font-open p-2 text-center  w-[97%]] '>¿Quienes somos?</p>
                <p className='text-white bg-[#000000c2] font-bold p-2 text-center tracking-[2px]'>Aquí podrás descubrir la increíble belleza y diversidad del océano, hogar de innumerables criaturas fascinantes y misteriosas. Sumérgete con nosotros en un mundo submarino lleno de vida y sorpresas</p>
                <button className='w-[200px]  h-[50px] bg-[#e9e5e9a1] bg-blur-[2px] text-black rounded-md font-bold font-open tracking-tighter '>Conocenos!</button>
               </div>
               <div className='w-[25%] h-[100%]  rounded-[8%] shadow-xl shadow-black p-[3px] bg-[url(./images/raya.jpg)] bg-center bg-cover flex flex-col justify-around items-center'>
                <p className='text-white text-[2rem] bg-[#00000056] tracking-[6px] font-open p-2 text-end border-r-[3px]  w-[97%]] '>Siguenos y mantente al dia</p>
                <p className='text-white bg-[#000000c2] font-bold p-2 text-center tracking-[2px]'>Aquí podrás descubrir la increíble belleza y diversidad del océano, hogar de innumerables criaturas fascinantes y misteriosas. Sumérgete con nosotros en un mundo submarino lleno de vida y sorpresas</p>
                <button className='w-[200px]  h-[50px] bg-[#e9e5e9a1] bg-blur-[2px] text-black rounded-md font-bold font-open tracking-tighter '>Sìguenos!</button>
               </div>
               </div>
             </div>
           <Footer />
           </div>
        </div>
    </>
    
    )
}