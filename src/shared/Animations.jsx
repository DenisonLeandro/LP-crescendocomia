import { useState, useEffect, useRef } from 'react';

// CountUp number component using requestAnimationFrame & IntersectionObserver
export function CountUpNumber({ target, prefix = '', suffix = '', duration = 2000, format = false }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReduced) {
            setCount(target);
            setHasAnimated(true);
            return;
          }

          let startTime = null;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(target);
              setHasAnimated(true);
            }
          };
          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      observer.disconnect();
    };
  }, [target, duration, hasAnimated]);

  const displayedCount = format ? count.toLocaleString('pt-BR') : count;

  return (
    <span ref={elementRef}>
      {prefix}{displayedCount}{suffix}
    </span>
  );
}

// Dynamic Accordion Item for FAQ-style sections
export function AccordionItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`bg-white rounded-[14px] border ${isOpen ? 'border-blue-primary/25 shadow-[0_4px_20px_rgba(37,99,235,0.07)]' : 'border-[#D1D5DB]'} overflow-hidden transition-all duration-300`}
    >
      <button
        onClick={onToggle}
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        id={`faq-header-${id}`}
        className="w-full text-left flex items-center justify-between gap-4 p-[22px] px-6 cursor-pointer transition-colors duration-[250ms] focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:outline-none"
        style={{ background: 'none', border: 'none' }}
      >
        <span className={`font-sora font-semibold text-[0.95rem] leading-snug flex-1 transition-colors duration-300 ${isOpen ? 'text-[var(--color-blue)]' : 'text-[var(--color-gray-900)]'}`}>
          {question}
        </span>
        <ChevronDownIcon isOpen={isOpen} />
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-header-${id}`}
        style={{ maxHeight: isOpen ? '500px' : '0px', overflow: 'hidden', transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)' }}
      >
        <div className="px-6 pb-[22px]">
          <div style={{ borderTop: '1px solid var(--color-gray-100)', paddingTop: '18px' }}>
            <p className="font-inter text-sm leading-[1.7]" style={{ color: 'var(--color-gray-600)' }}>
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Local import to avoid a circular/duplicate lucide-react import list in every page
import { ChevronDown } from 'lucide-react';
function ChevronDownIcon({ isOpen }) {
  return (
    <ChevronDown
      className={`w-5 h-5 flex-shrink-0 transition-all duration-[400ms] ${isOpen ? 'text-[var(--color-blue)] rotate-180' : 'text-[var(--color-gray-400)]'}`}
    />
  );
}

// Custom Hook to manage scroll-based fade-in animations using IntersectionObserver
export const useScrollAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReduced) {
              entry.target.classList.add('scroll-visible-instant');
            } else {
              entry.target.classList.add('scroll-visible');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return addToRefs;
};
