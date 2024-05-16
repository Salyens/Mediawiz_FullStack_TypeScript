"use client";

import { MotionDiv } from "@components/MotionDiv";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
  initial?: object;
  animate?: object;
  transition?: object;
  classes?: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  initial,
  animate,
  transition,
  classes,
}) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) setIsAnimate(true);
  }, [isInView]);

  return (
    <div ref={ref} className={`-bottom-12 ${classes}`}>
      {isAnimate && (
        <MotionDiv initial={initial} animate={animate} transition={transition}>
          {children}
        </MotionDiv>
      )}
    </div>
  );
};

export default AnimationWrapper;
