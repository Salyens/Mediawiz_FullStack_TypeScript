import classNames from "classnames";
import Image from "next/image";

interface BgEllipseProps {
  variant: 1 | 2;
  position?: string;
  width: number;
  height: number;
  delay?: number;
}

const BgEllipse = ({ variant, position, width, height }: BgEllipseProps) => {
  return (
    <Image
      src={`/ellipses/ellipse-${variant}.svg`}
      width={width}
      height={height}
      alt="Header line"
      className={classNames("absolute -z-10 object-cover", position)}
    />
  );
};

export default BgEllipse;
