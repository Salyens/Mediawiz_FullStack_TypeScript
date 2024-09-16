import { MainPageData } from "@interfaces/mainPage";
import { deleteItemFromData } from "@lib/features/adminPageDataSlice";
import _ from "lodash";
import { useDispatch } from "react-redux";

interface DeleteButtonProps {
  currentPath: string;
  onSetEmptyFields: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  item: { [key: string]: string };
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  currentPath,
  onSetEmptyFields,
  item,
}) => {
  const dispatch = useDispatch();
  const lodashPath = currentPath.replace(
    /\[(\d+)\]/g,
    ".$1"
  );
  const itemKeys = Object.keys(item);

  const deleteItem = () => {
    onSetEmptyFields((prevEmptyFields) => {
      let updatedEmptyFields = prevEmptyFields;

      itemKeys.forEach((key) => {
        const enPath = `${currentPath}.${key}`;
        const ruPath = enPath.includes("languages.en")
          ? enPath.replace("languages.en", "languages.ru")
          : enPath.replace("languages.ru", "languages.en");

        updatedEmptyFields = updatedEmptyFields.filter(
          (path) => path !== enPath && path !== ruPath
        );
      });

      return updatedEmptyFields;
    });

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
