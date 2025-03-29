

const Testimonial = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='bg-[#010306] w-[80%] rounded-xl h-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left'>
          <div className='flex flex-col gap-3 w-[90%] md:w-[80%] pl-5'>
            <div className='flex gap-2 items-center '>
            <img src="/avatar.svg" alt="" className='w-5' />
            <div className='text-xs font-normal text-[#FAFAFA]'>Lando Norris <span className='font-extralight text-[#A1A1AA]'>CEO at Acme Inc.</span> </div>
            </div>
            <div className='text-md md:text-lg text-[#FAFAFA] font-normal '>"Shadcn UI Kit for Figma has completely transformed our design process. It’s incredibly intuitive and saves us so much time. The components are beautifully crafted and customizable.”</div>
          </div>
          <img src="/testimonial.svg" alt="" className='hidden lg:flex items-start h-50 rounded-tr-xl'/>
        </div>
    </div>
  )
}

export default Testimonial
