

function VerticleMenu() {
  return (
    <div className="min-h-screen flex bg-blue-50">
        <div  style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPsjHlrOuIKAggXQ4cvMiTQDLdO_Bjxhs9w&s')",
        }} className="bg-cover">
            <div className="md:w-64 bg-blue-300/60 min-h-screen backdrop-blur-lg ">

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
            </div>
        </div>
    </div>
  )
}

export default VerticleMenu