import { generateBlurDataURL } from "@utils/generateBlurDataURL";
import Image from "next/image";

interface BlurImgProps {
  imgURL: string;
  name: string;
}

const BlurImg = async ({ imgURL, name }: BlurImgProps) => {
  const base64 = await generateBlurDataURL(imgURL);

  return (
    <Image
      src={imgURL}
      alt={name}
      fill={true}
      sizes="50vw"
      className="object-contain"
      placeholder="blur"
      blurDataURL={base64}
      priority={true}
    />
  );
};

export default BlurImg;
