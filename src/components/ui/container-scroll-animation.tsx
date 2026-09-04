"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotate = useTransform(
    scrollYProgress,
    [0.08, 0.72],
    [isMobile ? 11 : 18, 0],
  );

  const scale = useTransform(
    scrollYProgress,
    [0.08, 0.72],
    isMobile ? [0.82, 0.96] : [0.9, 1],
  );

  const translate = useTransform(
    scrollYProgress,
    [0.05, 0.78],
    [isMobile ? 34 : 64, isMobile ? -30 : -76],
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-[48rem] items-center justify-center overflow-hidden px-4 md:h-[62rem] md:px-8"
    >
      <div
        className="relative w-full py-10 md:py-24"
        style={{
          perspective: "1200px",
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />

        <Card
          rotate={rotate}
          scale={scale}
          translate={translate}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="relative z-10 mx-auto w-full max-w-6xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 2px 3px rgba(23,22,18,.08), 0 18px 34px rgba(23,22,18,.13), 0 54px 80px rgba(23,22,18,.12)",
      }}
      className="relative z-20 mx-auto -mt-4 h-[27rem] w-full max-w-6xl rounded-[14px] border border-[#4b4841] bg-[#171612] p-2 md:-mt-10 md:h-[34rem] md:p-3"
    >
      <div className="h-full w-full overflow-hidden rounded-[8px] bg-[#171612]">
        {children}
      </div>
    </motion.div>
  );
};
