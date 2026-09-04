"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const INTRO_SESSION_KEY = "adry-intro-seen";

type IntroPhase = "checking" | "active" | "exit" | "done";

export default function SiteIntro() {
  const [phase, setPhase] = useState<IntroPhase>("checking");
  const [progress, setProgress] = useState(0);

  const frameRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const doneTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /*
     * DESENVOLVIMENTO:
     * Sempre mostra a intro ao atualizar o localhost.
     *
     * PRODUÇÃO:
     * Mostra apenas uma vez por sessão.
     */
    const isDevelopment =
      process.env.NODE_ENV === "development" ||
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    const alreadySeen =
      !isDevelopment &&
      window.sessionStorage.getItem(INTRO_SESSION_KEY) === "1";

    if (reducedMotion || alreadySeen) {
      setPhase("done");
      return;
    }

    if (!isDevelopment) {
      window.sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    }

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    setProgress(0);
    setPhase("active");

    /*
     * O contador é visual, não representa carregamento real.
     * A curva deixa o início rápido e desacelera perto de 100%.
     */
    const duration = 1250;
    const startTime = performance.now();

    const animateProgress = (now: number) => {
      const elapsed = now - startTime;
      const linear = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - linear, 2.4);
      const value = Math.min(100, Math.round(eased * 100));

      setProgress(value);

      if (linear < 1) {
        frameRef.current = window.requestAnimationFrame(animateProgress);
      }
    };

    frameRef.current = window.requestAnimationFrame(animateProgress);

    exitTimerRef.current = window.setTimeout(() => {
      setProgress(100);
      setPhase("exit");
    }, 1420);

    doneTimerRef.current = window.setTimeout(() => {
      setPhase("done");
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    }, 2250);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }

      if (doneTimerRef.current !== null) {
        window.clearTimeout(doneTimerRef.current);
      }

      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className={`site-intro site-intro--${phase}`}
      aria-hidden="true"
    >
      <div className="site-intro__rail site-intro__rail--top">
        <span>Adry Comunicação Visual</span>
        <span>São Paulo · SP</span>
      </div>

      <div className="site-intro__stage">
        <span className="site-intro__index">01 / 01</span>

        <div className="site-intro__brand">
          <div className="site-intro__logo-wrap">
            <Image
              className="site-intro__logo"
              src="/images/logo-adry-dark.png"
              alt=""
              width={520}
              height={146}
              priority
            />
          </div>

          <p>Comunicação visual desde 1993</p>
        </div>

        <div className="site-intro__progress">
          <div className="site-intro__progress-track">
            <span
              style={{
                transform: `scaleX(${progress / 100})`,
              }}
            />
          </div>

          <strong>{String(progress).padStart(3, "0")}%</strong>
        </div>
      </div>

      <div className="site-intro__rail site-intro__rail--bottom">
        <span>Produção própria</span>
        <span>Do arquivo à instalação</span>
      </div>

      <div className="site-intro__wipe" />
      <div className="site-intro__shutter site-intro__shutter--left" />
      <div className="site-intro__shutter site-intro__shutter--right" />
    </div>
  );
}
