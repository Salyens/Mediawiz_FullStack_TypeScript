import { addItemToData } from "@lib/features/adminPageDataSlice";
import { useDispatch } from "react-redux";

interface AddButtonProps {
  currentPath: string;
  item: { [key: string]: string };
}

const AddButton: React.FC<AddButtonProps> = ({
  currentPath,
  item,
}) => {
  const dispatch = useDispatch();
  const createEmptyItem = () => {
    return Object.keys(item).reduce((acc, key) => {
      if (key !== "_id") acc[key] = "";

      return acc;
    }, {} as { [key: string]: string });
  };

  const emptyItem = createEmptyItem();

  const addItem = () => {
    dispatch(
      addItemToData({ currentPath, emptyItem })
    );
  };

  return (
    <div className="flex mb-3 mt-1">
      <button
        onClick={addItem}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
      >
        ADD A NEW BLOCK
      </button>
    </div>
  );
};

export default AddButton;
