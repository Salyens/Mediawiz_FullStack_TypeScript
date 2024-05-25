import { MotionDiv } from "@components/MotionDiv";
import Image from "next/image";

const BGLines = () => {
  return (
    <MotionDiv
      initial={{ y: 0 }}
      animate={{ y: 750 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute -z-20 w-full left-0 min-h-[1000px]"
    >
      <Image
        fill={true}
        sizes="200vw"
        className="object-cover"
        src="/common/bg_line.svg"
        alt="bg"
        priority
      />
    </MotionDiv>
  );
};

export default BGLines;
