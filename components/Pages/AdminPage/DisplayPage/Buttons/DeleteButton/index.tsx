import { removeEmptyFields } from "@lib/features/adminFormSlice";
import { deleteItemFromData } from "@lib/features/adminPageDataSlice";
import _ from "lodash";
import { useDispatch } from "react-redux";

interface DeleteButtonProps {
  currentPath: string;
  item: { [key: string]: string };
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  currentPath,
  item,
}) => {
  const dispatch = useDispatch();
  const lodashPath = currentPath.replace(
    /\[(\d+)\]/g,
    ".$1"
  );
  const itemKeys = Object.keys(item);

  const deleteItem = () => {
    dispatch(removeEmptyFields({ currentPath, itemKeys }));
    dispatch(deleteItemFromData(lodashPath));
  };

  return (
    <div className="flex mt-1">
      <button
        onClick={deleteItem}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-1 text-sm"
      >
        DELETE BLOCK
      </button>
    </div>
  );
};

export default DeleteButton;
