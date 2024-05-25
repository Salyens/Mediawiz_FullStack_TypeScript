import { generateBlurDataURL } from "@utils/generateBlurDataURL";
import classNames from "classnames";
import Image from "next/image";

interface BlurImgProps {
  imgURL: string;
  name: string;
  classes?: string;
}

const BlurImg = async ({ imgURL, name, classes }: BlurImgProps) => {
  const base64 = await generateBlurDataURL(imgURL);

  return (
    <Image
      src={imgURL}
      alt={name}
      fill={true}
      sizes="70vw"
      className={classNames("object-contain", classes)}
      placeholder="blur"
      blurDataURL={base64}
      priority={true}
    />
  );
};

export default BlurImg;
