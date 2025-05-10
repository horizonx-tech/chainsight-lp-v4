import { ReactNode, useEffect, useState } from "react";

export const ClientOnly = ({ children }: { children: ReactNode }) => {
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    setShouldRender(true);
  }, []);
  return shouldRender ? children : null;
};
