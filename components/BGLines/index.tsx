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
      className="absolute -z-20 w-full left-0 h-full"
    >
      <Image
        fill
        sizes="100vw"
        className="object-cover"
        src="/common/bg_line.svg"
        alt="bg"
      />
    </DynamicAnimationWrapper>
  );
};

export default BGLines;
