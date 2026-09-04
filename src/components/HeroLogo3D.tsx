"use client";

import Image from "next/image";
import {
  PointerEvent,
  useEffect,
  useRef,
} from "react";
import styles from "./HeroLogo3D.module.css";

const LOGO_SRC = "/images/adry-logo-oficial-hero.png";

export default function HeroLogo3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const renderFrame = () => {
    rafRef.current = null;

    const stage = stageRef.current;
    if (!stage) return;

    const { x, y } = targetRef.current;

    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 9;

    const shadowX = (x - 0.5) * -24;
    const shadowY = (y - 0.5) * -16 + 14;

    stage.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    stage.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    stage.style.setProperty("--shadow-x", `${shadowX.toFixed(2)}px`);
    stage.style.setProperty("--shadow-y", `${shadowY.toFixed(2)}px`);
    stage.style.setProperty("--pointer-x", `${(x * 100).toFixed(1)}%`);
    stage.style.setProperty("--pointer-y", `${(y * 100).toFixed(1)}%`);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const stage = stageRef.current;
    if (!stage) return;

    const rect = stage.getBoundingClientRect();

    targetRef.current = {
      x: Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)),
      y: Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height)),
    };

    if (rafRef.current === null) {
      rafRef.current = window.requestAnimationFrame(renderFrame);
    }
  };

  const handlePointerEnter = () => {
    stageRef.current?.classList.add(styles.isActive);
  };

  const handlePointerLeave = () => {
    const stage = stageRef.current;
    if (!stage) return;

    targetRef.current = { x: 0.5, y: 0.5 };

    stage.style.setProperty("--rotate-x", "0deg");
    stage.style.setProperty("--rotate-y", "0deg");
    stage.style.setProperty("--shadow-x", "0px");
    stage.style.setProperty("--shadow-y", "14px");
    stage.style.setProperty("--pointer-x", "50%");
    stage.style.setProperty("--pointer-y", "50%");

    stage.classList.remove(styles.isActive);
  };

  return (
    <div
      ref={stageRef}
      className={styles.logoStage}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      aria-hidden="true"
    >
      <div className={styles.scene}>
        <div className={styles.floorShadow} />

        <div className={`${styles.depthLayer} ${styles.depthLayer3}`}>
          <Image
            src={LOGO_SRC}
            alt=""
            width={1260}
            height={390}
            priority
          />
        </div>

        <div className={`${styles.depthLayer} ${styles.depthLayer2}`}>
          <Image
            src={LOGO_SRC}
            alt=""
            width={1260}
            height={390}
            priority
          />
        </div>

        <div className={`${styles.depthLayer} ${styles.depthLayer1}`}>
          <Image
            src={LOGO_SRC}
            alt=""
            width={1260}
            height={390}
            priority
          />
        </div>

        <Image
          className={styles.logoFront}
          src={LOGO_SRC}
          alt=""
          width={1260}
          height={390}
          priority
          sizes="(max-width: 700px) 86vw, 760px"
        />

        <div className={styles.glare} />
      </div>
    </div>
  );
}
