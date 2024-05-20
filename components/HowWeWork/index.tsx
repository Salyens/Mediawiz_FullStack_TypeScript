
import { IItemList } from "@interfaces/common";
import HowWeWorkList from "./HowWeWorkList";

const HowWeWork = ({ data }: { data: IItemList }) => {
  return (
    <div className="relative ">
      <div className="main_container p-3 sm:p-4 md:p-5 xl:p-6 mt-5">
        <HowWeWorkList list={data.list} header={data.header} />
      </div>
    </div>
  );
};

export default HowWeWork;
