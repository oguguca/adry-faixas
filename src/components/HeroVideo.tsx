"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playBlocked, setPlayBlocked] = useState(false);

  const playVideo = useCallback(async () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    try {
      await video.play();
      setPlayBlocked(false);
    } catch {
      setPlayBlocked(true);
    }
  }, []);

  useEffect(() => {
    void playVideo();

    const playbackCheck = window.setTimeout(() => {
      if (videoRef.current?.paused) setPlayBlocked(true);
    }, 1200);

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible") void playVideo();
    };

    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      window.clearTimeout(playbackCheck);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, [playVideo]);

  return (
    <div className="hero__video-player">
      <video
        ref={videoRef}
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        poster="/images/hero-bastidores-poster-hq.webp"
        aria-label="Bastidores da Adry: impressão, produção manual, instalação e trabalho finalizado"
        onCanPlay={() => void playVideo()}
        onPlaying={() => setPlayBlocked(false)}
      >
        <source src="/videos/adry-bastidores.mp4" type="video/mp4" />
      </video>

      {playBlocked && (
        <button className="hero__play-button" type="button" onClick={() => void playVideo()}>
          <span aria-hidden="true">▶</span> Reproduzir bastidores
        </button>
      )}
    </div>
  );
}
