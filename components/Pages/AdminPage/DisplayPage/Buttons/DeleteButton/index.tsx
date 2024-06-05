import { MainPageData } from "@interfaces/mainPage";
import _ from "lodash";

interface DeleteButtonProps {
  currentPath: string;
  setData: React.Dispatch<React.SetStateAction<MainPageData | null>>;
  onSetEmptyFields: React.Dispatch<React.SetStateAction<string[]>>;
  item: { [key: string]: string };
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  currentPath,
  setData,
  onSetEmptyFields,
  item,
}) => {
  const lodashPath = currentPath.replace(/\[(\d+)\]/g, ".$1");
  const itemKeys = Object.keys(item);

  const deleteItem = () => {
    onSetEmptyFields((prevEmptyFields) => {
      let updatedEmptyFields = prevEmptyFields;

      itemKeys.forEach((key) => {
        const enPath = `${currentPath}.${key}`;
        const ruPath = enPath.includes('languages.en')
          ? enPath.replace('languages.en', 'languages.ru')
          : enPath.replace('languages.ru', 'languages.en');

        updatedEmptyFields = updatedEmptyFields.filter(
          (path) => path !== enPath && path !== ruPath
        );
      });

      return updatedEmptyFields;
    });

    setData((prevData) => {
      if (!prevData) return null;
      const newData = _.cloneDeep(prevData as MainPageData);

      const deleteItemFromLocale = (localePath: string) => {
        const pathArray = localePath.split(".");
        const index = parseInt(pathArray.pop() || "", 10);
        const parentPath = pathArray.join(".");

        const parentArray = _.get(newData, parentPath, []);

        if (parentArray.length <= 1) {
          alert("You cannot delete the last item.");
        } else {
          parentArray.splice(index, 1);
          _.set(newData, parentPath, parentArray);
        }
      };

      const basePath = lodashPath.split(".").slice(2).join(".");
      const enPath = `languages.en.${basePath}`;
      const ruPath = `languages.ru.${basePath}`;

      deleteItemFromLocale(enPath);
      deleteItemFromLocale(ruPath);

      return newData;
    });
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
