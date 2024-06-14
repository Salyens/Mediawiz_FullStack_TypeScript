import { useDisplayPageContext } from "@context/DisplayPageContext";
import { MainPageData } from "@interfaces/mainPage";
import _ from "lodash";

interface DeleteButtonProps {
  currentPath: string;
  item: { [key: string]: any };
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ currentPath, item }) => {
  const { setData, setEmptyFields } = useDisplayPageContext();
  const lodashPath = currentPath.replace(/\[(\d+)\]/g, ".$1");
  const itemKeys = Object.keys(item);

  const deleteItem = () => {
    let canDelete = true;

    setData((prevData) => {
      if (!prevData) return null;
      const newData = _.cloneDeep(prevData as MainPageData);

      const deleteItem = (localePath: string) => {
        const pathArray = localePath.split(".");
        const index = parseInt(pathArray.pop() || "", 10);
        const parentPath = pathArray.join(".");
        const parentArray = _.get(newData, parentPath, []);

        if (parentArray.length <= 1) {
          canDelete = false;
          return;
        } else {
          parentArray.splice(index, 1);
          _.set(newData, parentPath, parentArray);
        }
      };

      const basePath = lodashPath.split(".").slice(2).join(".");
      const enPath = `languages.en.${basePath}`;
      const ruPath = `languages.ru.${basePath}`;

      deleteItem(enPath);
      deleteItem(ruPath);

      return newData;
    });

    if (canDelete) {
      setEmptyFields((prevEmptyFields) => {
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
    } else {
      alert("You cannot delete the last item.");
    }
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
