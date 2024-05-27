import { generateBlurDataURL } from "@utils/generateBlurDataURL";
import classNames from "classnames";
import Image from "next/image";

interface BlurImgProps {
  imgURL: string;
  name: string;
  classes?: string;
  sizes?: string;
}

const BlurImg = async ({ imgURL, name, classes, sizes }: BlurImgProps) => {
  const base64 = await generateBlurDataURL(imgURL);

  return (
    <Image
      src={imgURL}
      alt={name}
      fill
      sizes={sizes || "100vh"}
      className={classNames("object-contain select-none pointer-events-none", classes)}
      placeholder="blur"
      blurDataURL={base64}
      priority={true}
    />
  );
};

export default BlurImg;
