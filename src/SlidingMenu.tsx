import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

export default function SlidingMenu() {
    const [show, setShow] = useState(false);
     function  handleMenu() {
        setShow(!show)
        
    }
  return (
    <div className="bg-radial-[at_50%_10%] from-gray100 to-gray-400 to-80% h-screen">
      <div className="bg-white py-5 px-3 shadow-xs">
        <div>
          {/* Left side: Log  */}
          <div className="flex items-center justify-between">
            <div className="text-orange-500 font-semibold cursor-pointer">
              <span>😎 Horizontal</span>
            </div>
           
          {/* Right side: Menu icon */}
          <button onClick={handleMenu} className="cursor-pointer text-2xl">
            <CiMenuFries />
          </button>
          {/* Slidign Menu transform translate-x-full duration-300 */}
          <div className={`fixed top-0 right-0  w-64 h-full bg-white p-5 transform ${show ? 'translate-x-0' : 'translate-x-full'} duration-300`}>
            <button onClick={handleMenu} className="text-gray-600 border border-gray-200 hover:shadow-sm w-full rounded-lg ">Close menu</button>
            <nav className="mt-8 space-y-4">
                <a href="#" className="block text-lg font-medium text-gray-800 hover:text-orange-500">Home</a>
                <a href="#" className="block text-lg font-medium text-gray-800 hover:text-orange-500">Services</a>
                <a href="#" className="block text-lg font-medium text-gray-800 hover:text-orange-500">About</a>
                <a href="#" className="block text-lg font-medium text-gray-800 hover:text-orange-500">Contacts</a>

            </nav>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
