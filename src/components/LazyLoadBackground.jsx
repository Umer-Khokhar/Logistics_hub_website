import { useState, useEffect, useRef } from "react";

const LazyLoadBackground = ({ img, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // When 10% of the element is visible
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm ${
        isLoaded ? "" : "bg-gray-300"
      }`}
      style={{
        backgroundImage: isLoaded ? `url(${img})` : "none",
      }}
    >
      {children}
    </div>
  );
};


export default LazyLoadBackground