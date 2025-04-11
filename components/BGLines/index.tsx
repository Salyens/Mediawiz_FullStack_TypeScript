
import AnimationWrapper from "@components/AnimationWrapper";
import Image from "next/image";

const BGLines = () => {
  return (
    <AnimationWrapper
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
        fill
        sizes="100vw"
        className="object-cover"
        src="/common/bg_line.svg"
        alt="bg"
      />
    </AnimationWrapper>
  );
};

export default BGLines;
