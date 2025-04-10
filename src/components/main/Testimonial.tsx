const Testimonial = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='bg-[#010306] w-[90%] md:w-[80%]  xl:max-w-screen-lg rounded-xl overflow-hidden h-60 flex flex-col lg:flex-row items-center justify-center md:justify-start text-center lg:text-left relative'>
          <div className='flex flex-col gap-3 w-[90%] md:w-[80%] p-5 mb-20'>
            <div className='flex gap-2 items-start '>
            <img src="/avatar.webp" alt="" className='w-5' />
            <div className='text-xs font-normal text-[#FAFAFA]'>Lando Norris <span className='font-extralight text-[#A1A1AA]'>CEO at Acme Inc.</span> </div>
            </div>
            <div className='text-md text-left md:text-center md:text-lg text-[#FAFAFA] font-normal '>"Shadcn UI Kit for Figma has completely transformed our design process. It’s incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable.”</div>
          </div>
          <img src="/testimonial.svg" alt="" className='hidden lg:flex items-start justify-end w-80 rounded-tr-xl absolute right-0 top-0' loading="lazy"/>
          <div className="flex items-center justify-center lg:hidden">
          <div className='absolute  w-[68vw] md:w-[40vw] h-[270px] md:h-[200px]  bg-[#FFE000] blur-3xl  opacity-35 rounded-full '>
          </div>
          <img 
                            src="/ellipse.svg" 
                            alt="Ellipse graphic" 
                            loading="lazy" 
                            width="250" 
                            height="400"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
          />
          </div>
        </div>
    </div>
  )
}

export default Testimonial
