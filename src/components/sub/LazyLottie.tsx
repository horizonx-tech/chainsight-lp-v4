import Lottie, { LottieComponentProps } from "lottie-react";
import { useEffect, useState } from "react";

const LazyLottie = (props: LottieComponentProps) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return show && <Lottie {...props} />;
};

export default LazyLottie;
