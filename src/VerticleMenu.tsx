
import { CiHome } from "react-icons/ci";
function VerticleMenu() {
  return (
    <div className="min-h-screen flex bg-blue-50">
        <div  style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPsjHlrOuIKAggXQ4cvMiTQDLdO_Bjxhs9w&s')",
        }} className="bg-cover">
            <div className="md:w-64 bg-red-300/60 min-h-screen backdrop-blur-lg ">

            {/* three colored dots */}
           <section id="animation" className="flex flex-col md:flex-row  space-y-4 md:space-y-0 md:space-x-4 items-center md:justify-start py-7 mx-5 justify-center ">
            <div className="w-4 h-4 rounded-full bg-green-200 animate-pulse"></div>
            <div className="w-8 h-8 rounded-full bg-orange-200 animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-4 h-4 rounded-full bg-green-200 animate-bounce [animation-delay:0.4s]"></div>
          </section>

          {/* Profile section  */}
          <section id="profile" className="flex items-center justify-center -space-x-2 mt-7 mx-2">
            <div className="z-20">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbA-ld3cSYgx6HCbmVBadbJmiCD8-7tcskA&s" alt="profile iamge" className="rounded-full size-16 border-2 border-white" />
            </div>
            <div className="text-sm tracking-wide bg-gradient-to-l from-transparent to-white pl-4 hidden md:block">
              <h3>Emanuel bakre</h3>
              <h3>Admin</h3>
            </div>
          </section>

          {/* Divider  */}
          <div className="border-b border-cyan-100/50 my-5 w-10/12"></div>

          {/* Menu and settings section  */}
          <section id="menusetting" className="flex flex-col justify-center items-center space-y-12">
            {/* Menu System */}
            <div className="flex flex-col justify-center items-center space-y-7 py-5 px-3">
              {/* /* Menu items 1 */ }
              <div className="flex justify-center items-center md:justify-start space-x-4 text-cyan-50 group">
                {/* //menu icon  */}
                <div className="group-hover:scale-110 duration-200"><CiHome className="w-6 h-6" /></div>
                {/* //menu name */}
                <a href="#" className="group-hover:tracking-widest group-hover:text-[18px] duration-200 hidden md:block">Home</a>
              </div>
              <div className="flex justify-center items-center md:justify-start space-x-4 text-cyan-50 group">
                {/* //menu icon  */}
                <div className="group-hover:scale-110 duration-200"><CiHome className="w-6 h-6" /></div>
                {/* //menu name */}
                <a href="#" className="group-hover:tracking-widest group-hover:text-[18px] duration-200 hidden md:block">Download</a>
              </div>
              <div className="flex justify-center items-center md:justify-start space-x-4 text-cyan-50 group">
                {/* //menu icon  */}
                <div className="group-hover:scale-110 duration-200"><CiHome className="w-6 h-6" /></div>
                {/* //menu name */}
                <a href="#" className="group-hover:tracking-widest group-hover:text-[18px] duration-200 hidden md:block">Discusion</a>
              </div>
              <div className="flex justify-center items-center md:justify-start space-x-4 text-cyan-50 group">
                {/* //menu icon  */}
                <div className="group-hover:scale-110 duration-200"><CiHome className="w-6 h-6" /></div>
                {/* //menu name */}
                <a href="#" className="group-hover:tracking-widest group-hover:text-[18px] duration-200 hidden md:block">Contact Us</a>
              </div>
              <div className="flex justify-center items-center md:justify-start space-x-4 text-cyan-50 group">
                {/* //menu icon  */}
                <div className="group-hover:scale-110 duration-200"><CiHome className="w-6 h-6" /></div>
                {/* //menu name */}
                <a href="#" className="group-hover:tracking-widest group-hover:text-[18px] duration-200 hidden md:block">Home</a>
              </div>
            </div>

            {/* Menu buttons */}
            <div>Settings</div>

          </section>
            </div>
        </div>
    </div>
  )
}

export default VerticleMenu