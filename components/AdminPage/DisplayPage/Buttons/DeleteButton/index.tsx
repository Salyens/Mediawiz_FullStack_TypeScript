import { MainPageData } from "@interfaces";
import _ from "lodash";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("AdminEditPage");

  const deleteItem = () => {
    onSetEmptyFields((prevEmptyFields) => {
      let updatedEmptyFields = prevEmptyFields;
      itemKeys.forEach((key) => {
        updatedEmptyFields = updatedEmptyFields.filter(
          (path) => path !== `${currentPath}.${key}`
        );
      });

      return updatedEmptyFields;
    });
    setData((prevData) => {
      const newData = _.cloneDeep(prevData as MainPageData);
      const pathArray = lodashPath.split(".");
      const index = parseInt(pathArray.pop() || "", 10);
      const parentPath = pathArray.join(".");

      const parentArray = _.get(newData, parentPath, []);

      if (parentArray.length <= 1) {
        alert("You cannot delete the last item.");
      } else {
        parentArray.splice(index, 1);
        _.set(newData, parentPath, parentArray);
      }
      return newData;
    });
  };

  return (
    <div className="flex mt-1">
      <button
        onClick={deleteItem}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-1 text-sm"
      >
        {t("deleteBlock")}
      </button>
    </div>
  );
};

export default DeleteButton;
