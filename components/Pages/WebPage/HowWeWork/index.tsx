import UnderlinedTitle from "@components/Pages/MainPage/WeOffer/UnderlinedTitle";
import { IHowWeWork } from "@interfaces/webPage";
import HowWeWorkList from "./HowWeWorkList";
import Image from "next/image";

const HowWeWork = ({ data }: { data: IHowWeWork }) => {
  return (
    <div className="main_container p-6 mt-5">
      <div className="flex">
        <div>
          <UnderlinedTitle text={data.header} />
          <HowWeWorkList list={data.list} />
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
