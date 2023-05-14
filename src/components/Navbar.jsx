import React from "react";



export default function NavBar() {
  

    return (
        <nav className="absolute top-2 flex justify-center w-full h-[10vh]  bg-transparent ">
        <div className="w-[45%]  flex items-center justify-between h-full border-b bg-transparent text-[18px] text-[#e6e4e4e4] ">
         <div className="w-[30%] h-full  flex items-center ">
             <img src="./images/medusa.jpg" className="w-[50px] h-[50px] rounded-[50%] border object-cover mr-2" alt="" />
             <p className="underline font-open  tracking-[4px] ">Fish <br /> Planet </p><p>🐠</p>
         </div>
         <div className="w-[70%] h-full  flex  justify-evenly items-center">
         <a className="hover:scale-[1.2] p-[5px] hover:text-black hover:bg-white hover:p-[5px] rounded-[40%] transition duration-1000 font-bold font-open tracking-[3px] "  href="">Home</a>
         <a className="hover:scale-[1.2] p-[5px] hover:text-black hover:bg-white hover:p-[5px] rounded-[40%] transition duration-1000 font-bold font-open tracking-[3px] "  href="">Login</a>
         <a className="hover:scale-[1.2] p-[5px] hover:text-black hover:bg-white hover:p-[5px] rounded-[40%] transition duration-1000 font-bold font-open tracking-[3px] "  href="">Galery</a>
         <a className="hover:scale-[1.2] p-[5px] hover:text-black hover:bg-white hover:p-[5px] rounded-[40%] transition duration-1000 font-bold font-open tracking-[3px] "  href="">Contact</a>
         </div>
        </div>
        </nav>
    );
}