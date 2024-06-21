import { IItemList } from "@interfaces/common";
import HowWeWorkList from "./HowWeWorkList";

interface HowWeWorkProp {
  data: IItemList;
}

const HowWeWork: React.FC<HowWeWorkProp> = ({ data }) => {
  return (
    <div className="relative ">
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6 mt-5 mb-3">
        <HowWeWorkList list={data.list} header={data.header} />
      </div>
    </div>
  );
};

export default HowWeWork;
