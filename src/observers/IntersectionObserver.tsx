import { useEffect, useState } from 'react';

const useScrollHighlight = () => {
  const [highlightColor, setHighlightColor] = useState('transparent');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (
            entry.isIntersecting &&
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2 <=
              window.innerHeight / 2 + 50 &&
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2 >=
              window.innerHeight / 2 - 50
          ) {
            const color = element.getAttribute('data-highlight-color') || 'transparent';
            setHighlightColor(color);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elementsToWatch = document.querySelectorAll('section div');
    elementsToWatch.forEach((element) => observer.observe(element));

    return () => {
      elementsToWatch.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return highlightColor;
};

export default useScrollHighlight;
