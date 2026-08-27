"use client";

import type { SyntheticEvent } from "react";

const CLIP_START = 2;
const CLIP_END = 14;

function restartClip(video: HTMLVideoElement) {
  video.currentTime = CLIP_START;
  void video.play().catch(() => {
    // O poster continua visível caso o navegador bloqueie a reprodução automática.
  });
}

export default function HeroVideo() {
  const handleLoadedMetadata = (event: SyntheticEvent<HTMLVideoElement>) => {
    restartClip(event.currentTarget);
  };

  const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;

    if (video.currentTime >= Math.min(CLIP_END, video.duration)) {
      restartClip(video);
    }
  };

  return (
    <video
      className="hero__video"
      autoPlay
      muted
      playsInline
      preload="metadata"
      poster="/images/hero-faixa-hd.png"
      aria-label="Bastidores da produção manual de uma faixa pela Adry Faixas"
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleTimeUpdate}
      onEnded={(event) => restartClip(event.currentTarget)}
    >
      <source src="/videos/producao-faixa-instagram.mp4" type="video/mp4" />
    </video>
  );
}
