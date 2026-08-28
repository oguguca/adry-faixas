"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playBlocked, setPlayBlocked] = useState(false);

  const startPlayback = useCallback(() => {
    const video = videoRef.current;

    if (!video) return Promise.resolve();

    video.muted = true;
    video.defaultMuted = true;

    return video.play();
  }, []);

  const playVideo = useCallback(async () => {
    try {
      await startPlayback();
      setPlayBlocked(false);
    } catch {
      setPlayBlocked(true);
    }
  }, [startPlayback]);

  useEffect(() => {
    void startPlayback().catch(() => setPlayBlocked(true));

    const playbackCheck = window.setTimeout(() => {
      if (videoRef.current?.paused) setPlayBlocked(true);
    }, 1200);

    const resumeWhenVisible = () => {
      if (document.visibilityState === "visible") {
        void startPlayback().catch(() => setPlayBlocked(true));
      }
    };

    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      window.clearTimeout(playbackCheck);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, [startPlayback]);

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
        poster="/images/hero-bastidores-poster-v3.webp"
        aria-label="Bastidores da Adry: impressão, produção manual, instalação e trabalho finalizado"
        onCanPlay={() => void playVideo()}
        onPlaying={() => setPlayBlocked(false)}
      >
        <source src="/videos/adry-bastidores-v3.mp4" type="video/mp4" />
      </video>

      {playBlocked && (
        <button className="hero__play-button" type="button" onClick={() => void playVideo()}>
          <span aria-hidden="true">▶</span> Reproduzir bastidores
        </button>
      )}
    </div>
  );
}
