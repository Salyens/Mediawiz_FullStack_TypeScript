"use client";

import { MotionDiv } from "@components/MotionDiv";
import classNames from "classnames";
import { useInView, HTMLMotionProps } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

interface AnimationWrapperProps
  extends HTMLMotionProps<"div"> {
  children: ReactNode;
  classes?: string;
}

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  classes,
  ...motionProps
}) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) setIsAnimate(true);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={classNames("-bottom-12", classes)}
    >
      {isAnimate && (
        <MotionDiv {...motionProps}>{children}</MotionDiv>
      )}
    </div>
  );
};

export default AnimationWrapper;
