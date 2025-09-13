"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChanhDaiMark } from "./chanhdai-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <ChanhDaiMark />;
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1152 258"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* <path
        d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
        fill="currentColor"
      /> */}
      {/* <path d="M12 0h12v12h-12ZM24 0h12v12h-12ZM36 0h12v12h-12ZM72 0h12v12h-12ZM216 0h12v12h-12ZM288 0h12v12h-12ZM360 
      0h12v12h-12ZM408 0h12v12h-12ZM0 12h12v12h-12ZM72 12h12v12h-12ZM144 12h12v12h-12ZM192 12h12v12h-12ZM216 12h12v12h-12ZM288 
      12h12v12h-12ZM360 12h12v12h-12ZM396 12h12v12h-12ZM12 24h12v12h-12ZM24 24h12v12h-12ZM36 24h12v12h-12ZM72 24h12v12h-12ZM84 24h12v12h-12ZM96 
      24h12v12h-12ZM108 24h12v12h-12ZM144 24h12v12h-12ZM192 24h12v12h-12ZM216 24h12v12h-12ZM228 24h12v12h-12ZM240 24h12v12h-12ZM252 24h12v12h-12ZM288 
      24h12v12h-12ZM300 24h12v12h-12ZM312 24h12v12h-12ZM324 24h12v12h-12ZM360 24h12v12h-12ZM372 24h12v12h-12ZM384 24h12v12h-12ZM48 36h12v12h-12ZM72 
      36h12v12h-12ZM120 36h12v12h-12ZM144 36h12v12h-12ZM192 36h12v12h-12ZM216 36h12v12h-12ZM264 36h12v12h-12ZM288 36h12v12h-12ZM336 36h12v12h-12ZM360 
      36h12v12h-12ZM396 36h12v12h-12ZM12 48h12v12h-12ZM24 48h12v12h-12ZM36 48h12v12h-12ZM72 48h12v12h-12ZM120 48h12v12h-12ZM156 48h12v12h-12ZM168 
      48h12v12h-12ZM180 48h12v12h-12ZM192 48h12v12h-12ZM216 48h12v12h-12ZM228 48h12v12h-12ZM240 48h12v12h-12ZM252 48h12v12h-12ZM288 48h12v12h-12ZM336 
      48h12v12h-12ZM360 48h12v12h-12ZM408 48h12v12h-12Z" fill="currentColor"/> */}

      {/* <path d="M14.2 0.0h14.2v51.2h-14.2ZM28.4 0.0h14.2v51.2h-14.2ZM42.7 0.0h14.2v51.2h-14.2ZM85.3 0.0h14.2v51.2h-14.2ZM256.0 0.0h14.2v51.2h-14.2ZM341.3 0.0h14.2v51.2h-14.2ZM426.7 0.0h14.2v51.2h-14.2ZM483.6 0.0h14.2v51.2h-14.2ZM0.0 51.2h14.2v51.2h-14.2ZM85.3 51.2h14.2v51.2h-14.2ZM170.7 51.2h14.2v51.2h-14.2ZM227.6 51.2h14.2v51.2h-14.2ZM256.0 51.2h14.2v51.2h-14.2ZM341.3 51.2h14.2v51.2h-14.2ZM426.7 51.2h14.2v51.2h-14.2ZM469.3 51.2h14.2v51.2h-14.2ZM14.2 102.4h14.2v51.2h-14.2ZM28.4 102.4h14.2v51.2h-14.2ZM42.7 102.4h14.2v51.2h-14.2ZM85.3 102.4h14.2v51.2h-14.2ZM99.6 102.4h14.2v51.2h-14.2ZM113.8 102.4h14.2v51.2h-14.2ZM128.0 102.4h14.2v51.2h-14.2ZM170.7 102.4h14.2v51.2h-14.2ZM227.6 102.4h14.2v51.2h-14.2ZM256.0 102.4h14.2v51.2h-14.2ZM270.2 102.4h14.2v51.2h-14.2ZM284.4 102.4h14.2v51.2h-14.2ZM298.7 102.4h14.2v51.2h-14.2ZM341.3 102.4h14.2v51.2h-14.2ZM355.6 102.4h14.2v51.2h-14.2ZM369.8 102.4h14.2v51.2h-14.2ZM384.0 102.4h14.2v51.2h-14.2ZM426.7 102.4h14.2v51.2h-14.2ZM440.9 102.4h14.2v51.2h-14.2ZM455.1 102.4h14.2v51.2h-14.2ZM56.9 153.6h14.2v51.2h-14.2ZM85.3 153.6h14.2v51.2h-14.2ZM142.2 153.6h14.2v51.2h-14.2ZM170.7 153.6h14.2v51.2h-14.2ZM227.6 153.6h14.2v51.2h-14.2ZM256.0 153.6h14.2v51.2h-14.2ZM312.9 153.6h14.2v51.2h-14.2ZM341.3 153.6h14.2v51.2h-14.2ZM398.2 153.6h14.2v51.2h-14.2ZM426.7 153.6h14.2v51.2h-14.2ZM469.3 153.6h14.2v51.2h-14.2ZM14.2 204.8h14.2v51.2h-14.2ZM28.4 204.8h14.2v51.2h-14.2ZM42.7 204.8h14.2v51.2h-14.2ZM85.3 204.8h14.2v51.2h-14.2ZM142.2 204.8h14.2v51.2h-14.2ZM184.9 204.8h14.2v51.2h-14.2ZM199.1 204.8h14.2v51.2h-14.2ZM213.3 204.8h14.2v51.2h-14.2ZM227.6 204.8h14.2v51.2h-14.2ZM256.0 204.8h14.2v51.2h-14.2ZM270.2 204.8h14.2v51.2h-14.2ZM284.4 204.8h14.2v51.2h-14.2ZM298.7 204.8h14.2v51.2h-14.2ZM341.3 204.8h14.2v51.2h-14.2ZM398.2 204.8h14.2v51.2h-14.2ZM426.7 204.8h14.2v51.2h-14.2ZM483.6 204.8h14.2v51.2h-14.2Z" fill="currentColor"/> */}
      <path
        d="M32.1 0.0h32.1v51.6h-32.1ZM64.1 0.0h32.1v51.6h-32.1ZM96.2 0.0h32.1v51.6h-32.1ZM192.3 0.0h32.1v51.6h-32.1ZM577.0 0.0h32.1v51.6h-32.1ZM769.3 0.0h32.1v51.6h-32.1ZM961.7 0.0h32.1v51.6h-32.1ZM1089.9 0.0h32.1v51.6h-32.1ZM0.0 51.6h32.1v51.6h-32.1ZM192.3 51.6h32.1v51.6h-32.1ZM384.7 51.6h32.1v51.6h-32.1ZM512.9 51.6h32.1v51.6h-32.1ZM577.0 51.6h32.1v51.6h-32.1ZM769.3 51.6h32.1v51.6h-32.1ZM961.7 51.6h32.1v51.6h-32.1ZM1057.8 51.6h32.1v51.6h-32.1ZM32.1 103.2h32.1v51.6h-32.1ZM64.1 103.2h32.1v51.6h-32.1ZM96.2 103.2h32.1v51.6h-32.1ZM192.3 103.2h32.1v51.6h-32.1ZM224.4 103.2h32.1v51.6h-32.1ZM256.4 103.2h32.1v51.6h-32.1ZM288.5 103.2h32.1v51.6h-32.1ZM384.7 103.2h32.1v51.6h-32.1ZM512.9 103.2h32.1v51.6h-32.1ZM577.0 103.2h32.1v51.6h-32.1ZM609.1 103.2h32.1v51.6h-32.1ZM641.1 103.2h32.1v51.6h-32.1ZM673.2 103.2h32.1v51.6h-32.1ZM769.3 103.2h32.1v51.6h-32.1ZM801.4 103.2h32.1v51.6h-32.1ZM833.4 103.2h32.1v51.6h-32.1ZM865.5 103.2h32.1v51.6h-32.1ZM961.7 103.2h32.1v51.6h-32.1ZM993.7 103.2h32.1v51.6h-32.1ZM1025.8 103.2h32.1v51.6h-32.1ZM128.2 154.8h32.1v51.6h-32.1ZM192.3 154.8h32.1v51.6h-32.1ZM320.6 154.8h32.1v51.6h-32.1ZM384.7 154.8h32.1v51.6h-32.1ZM512.9 154.8h32.1v51.6h-32.1ZM577.0 154.8h32.1v51.6h-32.1ZM705.2 154.8h32.1v51.6h-32.1ZM769.3 154.8h32.1v51.6h-32.1ZM897.6 154.8h32.1v51.6h-32.1ZM961.7 154.8h32.1v51.6h-32.1ZM1057.8 154.8h32.1v51.6h-32.1ZM32.1 206.4h32.1v51.6h-32.1ZM64.1 206.4h32.1v51.6h-32.1ZM96.2 206.4h32.1v51.6h-32.1ZM192.3 206.4h32.1v51.6h-32.1ZM320.6 206.4h32.1v51.6h-32.1ZM416.7 206.4h32.1v51.6h-32.1ZM448.8 206.4h32.1v51.6h-32.1ZM480.8 206.4h32.1v51.6h-32.1ZM512.9 206.4h32.1v51.6h-32.1ZM577.0 206.4h32.1v51.6h-32.1ZM609.1 206.4h32.1v51.6h-32.1ZM641.1 206.4h32.1v51.6h-32.1ZM673.2 206.4h32.1v51.6h-32.1ZM769.3 206.4h32.1v51.6h-32.1ZM897.6 206.4h32.1v51.6h-32.1ZM961.7 206.4h32.1v51.6h-32.1ZM1089.9 206.4h32.1v51.6h-32.1Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
