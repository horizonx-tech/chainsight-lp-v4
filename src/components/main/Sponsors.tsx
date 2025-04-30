import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo} from "react";
import useOffset from "../../hooks/useOffset"

const Sponsors = () => {
  const offset = useOffset();
  const baseSponsors = useMemo(
    () => ["polygon", "plume", "bnb", "bevm", "nero", "berachain", "lumia", "movement", "optimism","overlay", "sonic", "IVX","polyhedra","rise","infrared","dolomite","BX3","bit10"],
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
      <div className="hidden lg:flex absolute -bottom-1 translate-y-3 text-white text-xl md:text-2xl lg:text-3xl"  style={{ left: offset-10 }}>
        <GoPlus />
      </div>
      <div className="hidden lg:flex absolute -bottom-1 translate-y-3 text-white text-xl md:text-2xl lg:text-3xl"  style={{ right: offset-11 }}>
        <GoPlus />
      </div>

      <div className="flex relative max-w-[90vw] overflow-hidden">
        <motion.div
          transition={{
            duration: 30,
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
                src={`/sponsors/${src}.svg`}
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
