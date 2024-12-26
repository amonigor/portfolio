import { useEffect, useRef, useState } from "react";

export default function useOutsideClick(initialState: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState(initialState);

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsInside(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return { ref, isInside, setIsInside };
}
