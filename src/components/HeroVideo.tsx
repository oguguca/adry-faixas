"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = useCallback(async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = true;
      video.defaultMuted = true;
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, []);

  const pause = useCallback(() => {
    videoRef.current?.pause();
    setPlaying(false);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!reducedMotion) {
      void play();
    }

    return () => {
      videoRef.current?.pause();
    };
  }, [play]);

  return (
    <div className="workshop-media">
      <video
        ref={videoRef}
        className="workshop-media__video"
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        poster="/images/hero-bastidores-poster-v3.webp"
        aria-hidden="true"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/videos/adry-bastidores-v3.mp4" type="video/mp4" />
      </video>

      <button
        className={`workshop-media__control${playing ? " is-playing" : ""}`}
        type="button"
        aria-label={playing ? "Pausar vídeo dos bastidores" : "Reproduzir vídeo dos bastidores"}
        aria-pressed={playing}
        onClick={playing ? pause : () => void play()}
      >
        <span aria-hidden="true" />
      </button>
    </div>
  );
}
