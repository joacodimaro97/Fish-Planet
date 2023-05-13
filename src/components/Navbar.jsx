import React, { useState } from "react";


export default function NavBar() {
    const [menu, setMenu] = useState(false);

    const menuClick = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <nav className="">
            
            
            {menu && (
                <div className="fixed z-20  top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#000] to-[#05052c] w-[70%] h-[60%] rounded-br-[10%] md:w-[35%] md:h-[60%] md:rounded-br-[30%]">
                    <div className="flex items-start h-full p-4  justify-between">
                        <ul className="flex flex-col justify-evenly  w-[70%]  h-[60%] md:items-start space-y-4">
                            <li className="text-white h-[20%] text-center text-[2rem] border-b border-gray-500">HOME</li>
                            <li className="text-white h-[20%] text-center text-[2rem] border-b border-gray-500">INFORMATION</li>
                            <li className="text-white h-[20%] text-center text-[2rem] border-b border-gray-500">FORUM</li>
                            <li className="text-white h-[20%] text-center text-[2rem] border-b border-gray-500">CONTACT</li>
                        </ul>
                        <button className="text-white bg-transparent border border-white rounded px-4 py-2" onClick={closeMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>
                </div>
            )}
        </nav>
    );
}