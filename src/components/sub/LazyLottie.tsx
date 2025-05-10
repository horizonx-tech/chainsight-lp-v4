import React, { useEffect, useState } from "react";
import type { LottieComponentProps } from "lottie-react";

const LazyLottie: React.FC<LottieComponentProps> = (props) => {
  const [Lottie, setLottie] = useState<React.ComponentType<LottieComponentProps> | null>(null);

  useEffect(() => {
    import("lottie-react").then((mod) => {
      setLottie(() => mod.default);
    });
  }, []);

  if (!Lottie) return null;

  return <Lottie {...props} />;
};

export default LazyLottie;
