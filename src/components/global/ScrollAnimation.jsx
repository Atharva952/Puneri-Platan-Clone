import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); 
        }
      },
      {
        rootMargin: "0px", 
        threshold: 0.1, 
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, show];
}