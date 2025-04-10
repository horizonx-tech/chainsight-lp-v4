import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo} from "react";

const Sponsors = () => {
  const baseSponsors = useMemo(
    () => ["polygon", "plume", "bnb", "bevm", "nero", "berachain", "lumia", "movement", "optimism"],
    []
  );
  const [sponsors, setSponsors] = useState(baseSponsors);

  useEffect(() => {
    if (window.innerWidth > 2000) {
      setSponsors([...baseSponsors, ...baseSponsors]);
    }
    else if(window.innerWidth > 2500){
      setSponsors([...baseSponsors, ...baseSponsors,...baseSponsors]);
    }
  }, [baseSponsors]);

  return (
    <div className="flex relative w-full items-center justify-center md:border-b-2 border-[#111827] mt-8 md:mt-0">
      <div className="hidden lg:flex absolute -bottom-1 left-[3.8vw] large-screen-left  translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>
      <div className="hidden lg:flex absolute -bottom-1 right-[3.8vw] large-screen-right translate-y-3 text-white text-xl md:text-2xl lg:text-3xl">
        <GoPlus />
      </div>

      <div className="flex relative max-w-[90vw] overflow-hidden">
        <motion.div
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: "-50%" }}
          animate={{ translateX: 0 }}
          className="flex flex-none gap-16 pr-16 py-5"
        >
          {[...new Array(2)].map((_, i) =>
            sponsors.map((src, j) => (
              <img
                key={`sponsor-${i}-${j}-${src}`}
                src={`${src}.svg`}
                alt={src}
                className="h-5 w-auto flex-none"
              />
            ))
          )}

        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
