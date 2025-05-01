import { motion } from "framer-motion";
import { useEffect, useState, useMemo} from "react";
import Plus from "./Plus";

const Sponsors = () => {
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
    <section className="w-[100vw] relative lg:border-b-2 flex  justify-center border-[#111827] " >
    <div className="absolute w-[90vw] pointer-events-none top-0 bottom-0">
      <div className="hidden lg:flex absolute left-0 bottom-0  transform -translate-x-[45%] translate-y-[53%] text-white text-xl md:text-2xl lg:text-3xl"  >
        <Plus />
      </div>
      <div className="hidden lg:flex absolute right-0 bottom-0  transform translate-x-[48%] translate-y-[53%] text-white text-xl md:text-2xl lg:text-3xl"  >
        <Plus />
      </div>
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
    </section>
  );
};

export default Sponsors;
