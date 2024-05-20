import { IItem } from "@interfaces/common";
import WeWorkItem from "../WeWorkItem";

interface AdvantagesListProps {
  list: IItem[];
}
const WeWorkWithList: React.FC<AdvantagesListProps> = ({ list }) => {
  const renderItems = () => {
    return list.map((item, index) => (
      <WeWorkItem key={item.description + index} data={item} />
    ));
  };

  return <div className="flex flex-wrap justify-between">{renderItems()}</div>;
};

export default WeWorkWithList;
