import DynamicAnimationWrapper from "@components/AnimationWrapper/DynamicAnimationWrapper";
import Image from "next/image";

const BGLines = () => {
  return (
    <DynamicAnimationWrapper
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
        sizes="200vw"
        className="object-cover"
        src="/common/bg_line.svg"
        alt="bg"
        priority
      />
    </DynamicAnimationWrapper>
  );
};

export default BGLines;
