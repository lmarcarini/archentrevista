import { useEffect, useState } from "react";

type Props = {
  width: number;
};

function useBreakPoint({ width }: Props) {
  const [hitBreakPoint, setHitBreakPoint] = useState(false);

  useEffect(() => {
    setHitBreakPoint(window.matchMedia(`(min-width: ${width}px)`).matches);
  }, [width]);

  return { hitBreakPoint };
}

export default useBreakPoint;
