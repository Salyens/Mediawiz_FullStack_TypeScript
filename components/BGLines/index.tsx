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
      className="absolute -z-10 w-full left-0 min-h-[1000px]"
    >
      <Image
        fill={true}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        src="/lines-2.png"
        alt="bg"
      />
    </MotionDiv>
  );
};

export default BGLines;
