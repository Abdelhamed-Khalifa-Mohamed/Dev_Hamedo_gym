import { useEffect } from 'react';

function useMobileCardReveal() {
  useEffect(() => {
    if (window.innerWidth > 768) {
      return undefined;
    }

    const cards = document.querySelectorAll('.mobile-reveal-card');

    if (cards.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useMobileCardReveal;