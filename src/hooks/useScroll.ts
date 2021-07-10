import React, { useEffect, useRef } from 'react';

export default function useScroll(
  observeRef: React.RefObject<HTMLDivElement>,
  callback: () => void,
) {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const observeElement = observeRef?.current as HTMLDivElement;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('inters');
        callback();
      }
    }, options);
    observer.current.observe(observeElement);
    return () => {
      observer.current?.unobserve(observeElement);
    };
  }, [callback]);
}
