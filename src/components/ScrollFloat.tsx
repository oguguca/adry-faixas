"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 0.9,
  ease = "power2.out",
  stagger = 0.012,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";

    const words = text.trim().split(/\s+/);

    let globalCharIndex = 0;

    return words.map((word, wordIndex) => (
      <React.Fragment key={`${word}-${wordIndex}`}>
        <span className="scroll-float-word">
          {Array.from(word).map((char) => {
            const currentIndex = globalCharIndex++;

            return (
              <span className="char" key={currentIndex}>
                {char}
              </span>
            );
          })}
        </span>

        {wordIndex < words.length - 1 && (
          <span className="scroll-float-space">&nbsp;</span>
        )}
      </React.Fragment>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;

    const section =
      el.closest<HTMLElement>(".page-screen") ??
      el.closest<HTMLElement>("section") ??
      el;

    const charElements =
      el.querySelectorAll<HTMLElement>(".char");

    const header =
      document.querySelector<HTMLElement>(".site-header");

    const getHeaderHeight = () => {
      return header?.offsetHeight ?? 76;
    };

    const context = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          opacity: 0,
          yPercent: 90,
          scaleY: 1.75,
          scaleX: 0.82,
          transformOrigin: "50% 0%",
          willChange: "opacity, transform",
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,

          scrollTrigger: {
            trigger: section,
            scroller,

            start: "top bottom",

            end: () =>
              `top top+=${getHeaderHeight()}`,

            scrub: 0.8,

            invalidateOnRefresh: true,
          },
        },
      );
    }, el);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    stagger,
  ]);

  return (
    <h2
      ref={containerRef}
      className={`scroll-float ${containerClassName}`}
    >
      <span
        className={`scroll-float-text ${textClassName}`}
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;