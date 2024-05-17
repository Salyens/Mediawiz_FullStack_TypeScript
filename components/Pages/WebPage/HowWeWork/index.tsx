import { IHowWeWork } from "@interfaces/webPage";
import HowWeWorkList from "./HowWeWorkList";

const HowWeWork = ({ data }: { data: IHowWeWork }) => {
  return (
    <div className="relative ">
      <div className="main_container p-6 mt-5">
        <HowWeWorkList list={data.list} header={data.header} />
      </div>
    </div>
  );
};

export default HowWeWork;
