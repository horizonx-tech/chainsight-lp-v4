import theme from "../../constants/theme";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute left-0 right-0 w-full flex justify-center">
      <div className="w-full" style={{backgroundColor: theme.colors.background.secondary}}>
        <div className="p-15 flex flex-col items-center md:items-start gap-14 sm:gap-8 px-4 sm:px-15">
        <div className="w-[122px] h-[18px]">
              <img src="/logo.svg" alt="ChainSight"/>
        </div>
          <div className="flex flex-col sm:flex-row gap-4 text-lg sm:text-sm text-[#A1A1AA]">
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <button className="hover:text-[#fff] cursor-pointer" onClick={() => navigate('/soon')}>About Us</button>
              {/* 
              <div className="hover:text-[#fff]">Blog</div>
              <div className="hover:text-[#fff]">Careers</div>
              <div className="hover:text-[#fff]">Documents</div> */}
              <a 
              href="https://drive.google.com/drive/folders/1ZWoV3_WCMjR-XwZj2MnDGGY8ZtCAHIKk" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">Media Kit</div></a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-lg sm:text-sm text-[#A1A1AA]">
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
            <a 
              href="https://t.me/chainsight_net" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">Telegram</div></a>
              <a 
              href="https://twitter.com/chainsight_" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">X</div></a>
            <a 
              href="https://discord.com/invite/kMkUZKyD" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">Discord</div></a>
              <a 
              href="https://www.linkedin.com/company/chainsight-network/" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">LinkedIn</div></a>
              <a 
              href="https://github.com/horizonx-tech" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">Github</div></a>
            </div>
          </div>
          
          <hr className="border-t border-[#27272A] my-[10px]" />
          
          <div className="flex flex-col sm:flex-row justify-between text-lg sm:text-sm text-[#A1A1AA] gap-4">
            <div className="text-center sm:text-left">Copyright 2025 © ChainSight.network</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://chainsight.network/docs/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">Privacy Policy</div></a>
               <a 
              href="https://chainsight.network/docs/tos" 
              target="_blank" 
              rel="noopener noreferrer"
            ><div className="hover:text-[#fff]">Terms of Service</div></a>
              {/* <div className="hover:text-[#fff]">Cookies Settings</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;