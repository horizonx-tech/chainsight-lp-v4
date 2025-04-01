import theme from "../../constants/theme";

const Footer = () => {
  return (
    <div className="absolute left-0 right-0  w-full flex justify-center">
      <div className="w-full" style={{backgroundColor: theme.colors.background.secondary}}>
        <div className="p-15 flex flex-col items-center md:items-start gap-14 sm:gap-8 px-4 sm:px-15">
        <div className="w-[122px] h-[18px]">
              <img src="/logo.svg" alt="ChainSight"/>
        </div>
          <div className="flex flex-col sm:flex-row gap-4 text-lg sm:text-sm text-[#A1A1AA]">
            <div className="font-bold flex items-center justify-center" style={{ color: theme.colors.text.primary }}>Company</div>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
              <div className="hover:text-[#fff]">About Us</div>
              <div className="hover:text-[#fff]">Blog</div>
              <div className="hover:text-[#fff]">Careers</div>
              <div className="hover:text-[#fff]">Documents</div>
              <div className="hover:text-[#fff]">Media Kit</div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 text-lg sm:text-sm text-[#A1A1AA]">
            <div className="font-bold flex items-center justify-center" style={{ color: theme.colors.text.primary }}>Socials</div>
            <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
              <div className="hover:text-[#fff]">Telegram</div>
              <div className="hover:text-[#fff]">X</div>
              <div className="hover:text-[#fff]">Discord</div>
              <div className="hover:text-[#fff]">LinkedIn</div>
              <div className="hover:text-[#fff]">Github</div>
            </div>
          </div>
          
          <hr className="border-t border-[#27272A] my-[10px]" />
          
          <div className="flex flex-col sm:flex-row justify-between text-lg sm:text-sm text-[#A1A1AA] gap-4">
            <div className="text-center sm:text-left">Copyright 2048 © ChainSight.network</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="hover:text-[#fff]">Privacy Policy</div>
              <div className="hover:text-[#fff]">Terms of Service</div>
              <div className="hover:text-[#fff]">Cookies Settings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;