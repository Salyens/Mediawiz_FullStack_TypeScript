import { IHowWeWork } from "@interfaces/webPage";
import HowWeWorkList from "./HowWeWorkList";
import Image from "next/image";

const HowWeWork = ({ data }: { data: IHowWeWork }) => {
  return (
    <div className="relative">
      <Image
        src="/webPage/ellipse-3.png"
        width={1500}
        height={1500}
        alt="ellipse-right"
        className="absolute -z-10 xl:top-0 xl:-left-1/4 w-full h-full"
      />
      <div className="main_container p-6 mt-5">
        <HowWeWorkList list={data.list} header={data.header} />
      </div>
    </div>
  );
};

export default HowWeWork;
