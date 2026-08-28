"use client";

import { useEffect, useRef } from "react";

export default function ScrollEffects() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const cleanupInteractions: Array<() => void> = [];

    const countElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count-up]"),
    );

    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      countElements.forEach((element) => {
        const target = Number(element.dataset.countUp ?? 0);
        element.textContent = `${target}${element.dataset.countSuffix ?? ""}`;
      });
      return;
    }

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    revealElements.forEach((element) => observer.observe(element));

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const target = Number(element.dataset.countUp ?? 0);
          const suffix = element.dataset.countSuffix ?? "";
          const duration = 1050;
          const startedAt = performance.now();

          const drawCount = (now: number) => {
            const progress = Math.min(1, (now - startedAt) / duration);
            const eased = 1 - Math.pow(1 - progress, 4);
            element.textContent = `${Math.round(target * eased)}${suffix}`;

            if (progress < 1) window.requestAnimationFrame(drawCount);
          };

          element.textContent = `0${suffix}`;
          window.requestAnimationFrame(drawCount);
          countObserver.unobserve(element);
        });
      },
      { threshold: 0.65 },
    );

    countElements.forEach((element) => countObserver.observe(element));

    const precisePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (precisePointer) {
      const pointerEffects = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-spotlight], [data-halftone]",
        ),
      );

      pointerEffects.forEach((element) => {
        const updatePointer = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          element.style.setProperty("--effect-x", `${event.clientX - rect.left}px`);
          element.style.setProperty("--effect-y", `${event.clientY - rect.top}px`);
          element.classList.add("is-pointer-active");
        };
        const resetPointer = () => element.classList.remove("is-pointer-active");

        element.addEventListener("pointermove", updatePointer);
        element.addEventListener("pointerleave", resetPointer);
        cleanupInteractions.push(() => {
          element.removeEventListener("pointermove", updatePointer);
          element.removeEventListener("pointerleave", resetPointer);
        });
      });

      const magnetElements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-magnet]"),
      );

      magnetElements.forEach((element) => {
        const updateMagnet = (event: PointerEvent) => {
          const rect = element.getBoundingClientRect();
          const offsetX = event.clientX - (rect.left + rect.width / 2);
          const offsetY = event.clientY - (rect.top + rect.height / 2);
          const pullX = Math.max(-9, Math.min(9, offsetX * 0.14));
          const pullY = Math.max(-7, Math.min(7, offsetY * 0.14));

          element.style.setProperty("--magnet-x", `${pullX}px`);
          element.style.setProperty("--magnet-y", `${pullY}px`);
          element.classList.add("is-magnet-active");
        };
        const resetMagnet = () => {
          element.style.setProperty("--magnet-x", "0px");
          element.style.setProperty("--magnet-y", "0px");
          element.classList.remove("is-magnet-active");
        };

        element.addEventListener("pointermove", updateMagnet);
        element.addEventListener("pointerleave", resetMagnet);
        cleanupInteractions.push(() => {
          element.removeEventListener("pointermove", updateMagnet);
          element.removeEventListener("pointerleave", resetMagnet);
        });
      });
    }

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const available = root.scrollHeight - window.innerHeight;
      const progress = available > 0 ? window.scrollY / available : 0;
      progressRef.current?.style.setProperty(
        "--scroll-progress",
        String(Math.min(1, Math.max(0, progress))),
      );
    };

    const requestProgressUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      observer.disconnect();
      countObserver.disconnect();
      cleanupInteractions.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready");
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
    };
  }, []);

  return <span ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
