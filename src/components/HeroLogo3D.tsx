"use client";

import Image from "next/image";
import { PointerEvent, useRef } from "react";
import styles from "./HeroLogo3D.module.css";

export default function HeroLogo3D() {
  const stageRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 9;
    const rotateX = (0.5 - y) * 7;

    stage.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    stage.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    stage.style.setProperty("--pointer-x", `${(x * 100).toFixed(1)}%`);
    stage.style.setProperty("--pointer-y", `${(y * 100).toFixed(1)}%`);
  };

  const handlePointerLeave = () => {
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.setProperty("--rotate-x", "0deg");
    stage.style.setProperty("--rotate-y", "0deg");
    stage.style.setProperty("--pointer-x", "50%");
    stage.style.setProperty("--pointer-y", "50%");
  };

  return (
    <div
      ref={stageRef}
      className={styles.logoStage}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-hidden="true"
    >
      <div className={styles.logoDepth}>
        <div className={styles.logoShadow} />

        <Image
          className={styles.logo}
          src="/images/adry-logo-oficial-hero.png"
          alt=""
          width={1260}
          height={390}
          priority
          sizes="(max-width: 700px) 82vw, 760px"
        />

        <div className={styles.logoSheen} />
      </div>
    </div>
  );
}
