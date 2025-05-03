import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutUs() {
  const team = [
    {
        name: "Wasim Fukase",
        role: "Co-Founder & CEO",
        description:
          "Wasim comes from the VC world. Ex-Hashed EM, Helion Capital, SBK Holdings. He’s the one turning big ideas into real plans.",
        image: "/About/Wasim.webp",
        socials: { linkedin: "https://www.linkedin.com/in/wasimfukase/", twitter: "https://x.com/getoutofhome" },
      },
    {
      name: "Shumpei Koike",
      role: "Co-Founder & CTO",
      description:
        "Shumpei is a builder. He’s led dev teams at DMM Bitcoin and Simplex, and founded Starlay Finance. Clean code, solid products.",
      image: "/About/shumpei.webp",
      socials: { linkedin: "https://www.linkedin.com/in/shumpeikoike/", twitter: "https://x.com/0xshumpei" },
    },
    {
      name: "Sunny Mahmood",
      role: "Co-Founder & COO",
      description:
        "Sunny is the operator. He’s launched businesses, led teams, and managed projects at places like Barclays.",
      image: "/About/sunny.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/sunny-mahmood-106a2292/", twitter: "https://x.com/mansolodxb" },
    },
    {
      name: "Emmett Childs",
      role: "Global Head of BD",
      description:
        "Emmett’s background is in Black Ops. He’s worked with Gaib and Zeko Labs. Now, he’s helping us grow fast and smart.",
      image: "/About/emmett.webp",
      socials: { linkedin: "https://www.linkedin.com/in/echildsplay/", twitter: "https://x.com/e_ssshadow" },
    },
  ];

  return (
    <section className="border-t flex items-center justify-center min-h-screen border-[#111827] text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-8 items-stretch">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col lg:flex-row items-center bg-[#111111] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-[#FFE000] mb-4 sm:mb-0 sm:mr-6"
            />
            <div className="text-center lg:text-left flex-1">
              <div className="flex flex-col lg:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <span className="text-[#FFE000] text-xs sm:text-sm font-medium mt-1 sm:mt-0">
                  {member.role}
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-2 mb-4 leading-relaxed">
                {member.description}
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 text-[#FFE000] text-lg">
                <button onClick={()=>window.open(member.socials.linkedin,"_blank")} aria-label="LinkedIn" className="cursor-pointer">
                  <FaLinkedin />
                </button>
                <button onClick={()=>window.open(member.socials.twitter,"_blank")} aria-label="Twitter" className="cursor-pointer">
                  <FaTwitter />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
