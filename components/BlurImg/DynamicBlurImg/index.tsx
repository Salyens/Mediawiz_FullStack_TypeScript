import dynamic from "next/dynamic";

const DynamicBlurImg = dynamic(() => import("../index"), {
  ssr: false,
});

export default DynamicBlurImg;
