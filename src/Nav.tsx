import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";


export default function Nav() {
    const [show, setShow] = useState(false);
    function handleClick() {
        setShow(!show);
    }
  return (
    <nav className="bg-white p-5 shadow flex items-center justify-between relative">
        {/* LOGO */}
        <div className=" text-xl text-orange-800"><span>😎 Horizontal</span></div>
        
            <ul className={`text-black flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4
             absolute top-[70px] p-4 left-0 bg-white w-full md:static shadow md:shadow-none rounded-b-xl md:w-auto md:opacity-100   duration-300 ease-in-out ${show ? 'opacity-100 z-10 pointer-events-auto': 'opacity-0 z-[-1] pointer-events-none'}  md:opacity-100 md:z-auto md:pointer-events-auto`}>
                <li className="group"><a href="#" className="group-hover:text-orange-500">Home</a></li>
                <li className="group"><a href="#" className="group-hover:text-orange-500">Service</a></li>
                <li className="group"><a href="#" className="group-hover:text-orange-500">Products</a></li>
                <li className="group"><a href="#" className="group-hover:text-orange-500">Contacts</a></li>
                <li>
                    <button className="border border-orange-700 rounded px-1 py-2 md:py-0 w-full text-sm hover:text-orange-700 hover:bg-red-50">Explorer</button>
                </li>
            </ul>

            {/* Menu icon */}
             <div className="md:hidden cursor-pointer text-2xl" onClick={handleClick}>
                {show ? <MdOutlineRestaurantMenu /> : <CiMenuFries />}
            </div>
        

    </nav>
  )
}

