import OneAdItem from "../OneItem";
import { IItem } from "@interfaces/common";

interface ItemListProps {
  list: IItem[];
}

const ItemList: React.FC<ItemListProps> = ({ list }) => {
  const renderAdItems = () => {
    return list.map((item, index) => (
      <OneAdItem key={item.title + index} data={item} />
    ));
  };

  return (
    <div className="flex flex-wrap justify-between gap-9 lg:gap-3 xl:gap-5">{renderAdItems()}</div>
  );
};

export default ItemList;
