import {useState} from 'react';
import {motion} from "framer-motion";

const items = [
  { name: "Data Indexing", Icon: (
    <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 4.66675C25 6.87589 19.6274 8.66675 13 8.66675C6.37258 8.66675 1 6.87589 1 4.66675M25 4.66675C25 2.45761 19.6274 0.666748 13 0.666748C6.37258 0.666748 1 2.45761 1 4.66675M25 4.66675V23.3334C25 24.3943 23.7357 25.4117 21.4853 26.1618C19.2348 26.912 16.1826 27.3334 13 27.3334C9.8174 27.3334 6.76516 26.912 4.51472 26.1618C2.26428 25.4117 1 24.3943 1 23.3334L1 4.66675" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ) },
  { name: "Oracle Deployment", Icon: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6.33333V3.66667C1 2.2 2.2 1 3.66667 1L6.33333 1M19.6667 1L22.3333 1C23.8 1 25 2.2 25 3.66667V6.33333M25 19.6667V22.3333C25 23.8 23.8 25 22.3333 25H19.6667M6.33333 25H3.66667C2.2 25 1 23.8 1 22.3333V19.6667M7.66667 6.33333H14.3333C15.0697 6.33333 15.6667 6.93029 15.6667 7.66667V11.6667C15.6667 12.403 15.0697 13 14.3333 13H7.66667C6.93029 13 6.33333 12.403 6.33333 11.6667V7.66667C6.33333 6.93029 6.93029 6.33333 7.66667 6.33333ZM11.6667 13H18.3333C19.0697 13 19.6667 13.597 19.6667 14.3333V18.3333C19.6667 19.0697 19.0697 19.6667 18.3333 19.6667H11.6667C10.9303 19.6667 10.3333 19.0697 10.3333 18.3333V14.3333C10.3333 13.597 10.9303 13 11.6667 13Z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ) },
  { name: "API Access", Icon: (
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 20.6401H14.0133C12.5467 20.6401 11.4133 21.8934 10.7067 23.1734C10.1473 24.2231 9.25306 25.0556 8.16617 25.5387C7.07928 26.0218 5.86209 26.1277 4.7081 25.8396C3.55411 25.5515 2.52954 24.8859 1.79727 23.9486C1.065 23.0113 0.667043 21.8562 0.666672 20.6667C0.680005 19.7334 0.933338 18.8001 1.42667 18.0001M6.00001 20.6667L10.1733 12.96C10.88 11.6667 10.3067 10.0533 9.50667 8.82666C9.12909 8.2228 8.87628 7.54943 8.76315 6.84628C8.65002 6.14312 8.67887 5.42444 8.84799 4.73262C9.01711 4.0408 9.32308 3.38985 9.74785 2.8182C10.1726 2.24654 10.7076 1.76574 11.3212 1.40418C11.9348 1.04262 12.6145 0.807609 13.3204 0.71302C14.0263 0.618431 14.744 0.666177 15.4311 0.853442C16.1183 1.04071 16.7609 1.3637 17.3212 1.80336C17.8815 2.24302 18.348 2.79044 18.6933 3.41333M14 6.00008L18.1733 13.6401C18.88 14.9334 20.5333 15.3334 22 15.3334C23.4145 15.3334 24.771 15.8953 25.7712 16.8955C26.7714 17.8957 27.3333 19.2523 27.3333 20.6667C27.3333 22.0812 26.7714 23.4378 25.7712 24.438C24.771 25.4382 23.4145 26.0001 22 26.0001" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ) },
  { name: "Analytics Dashboards", Icon:(
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 23.3333L8.70666 26.5066C8.29191 26.7558 7.81718 26.8874 7.33333 26.8874C6.84948 26.8874 6.37475 26.7558 5.96 26.5066L1.96 24.1066C1.56634 23.8701 1.24044 23.5359 1.01385 23.1365C0.78726 22.737 0.667671 22.2858 0.666664 21.8266L0.666664 17.5066C0.667671 17.0473 0.78726 16.5961 1.01385 16.1967C1.24044 15.7973 1.56634 15.4631 1.96 15.2266L7.33333 11.9999M14 23.3333V15.9999M14 23.3333L19.2933 26.5066C19.7081 26.7558 20.1828 26.8874 20.6667 26.8874C21.1505 26.8874 21.6252 26.7558 22.04 26.5066L26.04 24.1066C26.4337 23.8701 26.7596 23.5359 26.9861 23.1365C27.2127 22.737 27.3323 22.2858 27.3333 21.8266V17.5066C27.3323 17.0473 27.2127 16.5961 26.9861 16.1967C26.7596 15.7973 26.4337 15.4631 26.04 15.2266L20.6667 11.9999M14 15.9999L7.33333 11.9999M14 15.9999L7.33334 19.9998M14 15.9999L20.6667 11.9999M14 15.9999L20.6667 19.9999M14 15.9999L13.9997 8.66645M7.33333 11.9999V6.17337C7.33434 5.71414 7.45393 5.26294 7.68051 4.86349C7.9071 4.46404 8.23301 4.12988 8.62666 3.89337L12.6267 1.49337C13.0414 1.24419 13.5161 1.11255 14 1.11255C14.4838 1.11255 14.9586 1.24419 15.3733 1.49337L19.3733 3.89337C19.767 4.12988 20.0929 4.46404 20.3195 4.86349C20.5461 5.26294 20.6657 5.71414 20.6667 6.17337V11.9999M7.33334 19.9998L1.01334 16.1998M7.33334 19.9998L7.33333 26.8933M20.6667 19.9999L26.9867 16.1998M20.6667 19.9999V26.8933M13.9997 8.66645L7.67969 4.86645M13.9997 8.66645L20.32 4.86645" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ) }
];

const Features = () => {
    const [click, setClick] = useState(0);
    
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='bg-[#040507] flex items-center justify-center rounded-xl max-w-[90vw] md:max-w-[80vw] relative'>
                    <div className="absolute inset-0 w-full h-full p-10">
                        <img src="/databg.webp" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className='flex flex-col gap-4 items-center justify-center w-[90%] relative z-50'>
                        <h2 className='text-[#FAFAFA] text-xl md:text-2xl w-[90%] mt-5'>Everything You Need for Blockchain Data</h2>
                        <div style={{scrollbarWidth: "none"}} className="bg-[#09090B] text-[#FFFFFF] flex md:gap-2 rounded-full p-1 overflow-x-scroll  overflow-y-hidden h-10 md:overflow-hidden text-sm relative max-w-[98%] md:max-w-[90%] md:w-full">
                            {items.map((item, index) => {
                                const isActive = click === index;
                                return (
                                    <div
                                        key={index}
                                        className="relative cursor-pointer flex justify-center px-1 py-2 w-full items-center min-w-[160px] gap-3"
                                        onClick={() => setClick(index)}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-[#212121] text-[#FFE000] rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        
                                        <span
                                            className={`relative z-10 text-xs flex gap-2 items-center justify-center ${
                                                isActive ? "text-[#FFE000]" : ""
                                            }`}
                                        >
                                          <span className='z-10 hidden md:flex transition-all duration-300 w-4'>{item.Icon}</span> 
                                            {item.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className='flex flex-col text-left gap-4 max-w-[98%] md:max-w-[90%]'>
                            <div className='flex gap-2'>
                                <img src="/indexing.svg" alt="data indexing" className='w-7'/>
                                <div className=''>Data Indexing</div>
                            </div>
                            <div className='text-[#FAFAFA] text-xs'>
                                With single block finality and unrivalled scalability, Tendermint Consensus enables Kava to support the transaction needs of thousands of protocols and millions of users. With single block finality and unrivalled scalability, Tendermint Consensus enables Kava to support the transaction needs of thousands of protocols and millions of users,Tendermint Consensus enables Kava to support the transaction needs of thousands of protocols and millions of users.
                            </div>
                        </div>
                        <img 
                          src="/small.webp" 
                          alt="Ellipse graphic" 
                          loading="lazy" 
                          width="600" 
                          height="300"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features