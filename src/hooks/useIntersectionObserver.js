// useIntersectionObserver.js
import { useEffect, useState } from 'react';

const useIntersectionObserver = (refsArray) => {
  const [isVisible, setIsVisible] = useState(() => Array(refsArray.length).fill(false));

  useEffect(() => {
    const observers = refsArray.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => {
            const updatedArray = [...prev];
            updatedArray[index] = entry.isIntersecting;
            return updatedArray;
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
    });

    refsArray.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [refsArray]);

  return isVisible;
};

export default useIntersectionObserver;