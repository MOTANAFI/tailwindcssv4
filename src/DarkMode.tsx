
import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function DarkMode() {
  const [mode , setMode] = useState("light");

  useEffect(() => {
    const root = document.body;
    if(mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode])

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }
 
  return (
   <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-900">
    <div className="rounded-lg w-3/4 p-5 bg-gray-200 dark:bg-gray-800">
    <div className="dark:text-gray-200">
      <div className="flex justify-between items-center ">
    <h2 className="text-xl font-bold my-2">Heading 1</h2>
    <button onClick={toggleMode} className="text-2xl cursor-pointer">
      {mode === 'light' ? <MdOutlineDarkMode className="text-black"  />:<MdOutlineLightMode className="text-white" />  }
      
      
      
    </button>

      </div>

    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum praesentium aspernatur quibusdam numquam ducimus inventore corporis alias nostrum dignissimos voluptates perspiciatis quod error molestiae eos facere odio, quo dolorum omnis.</p>
    </div>
    </div>
   </div>
  )
}

export default DarkMode