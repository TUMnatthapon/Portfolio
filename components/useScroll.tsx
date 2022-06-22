import { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setScroll(Math.floor(window.pageYOffset));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll]);
  return scroll;
}

export default useScroll;