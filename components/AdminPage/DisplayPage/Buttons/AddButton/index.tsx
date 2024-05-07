import { MainPageData } from "@interfaces";

interface AddButtonProps {
  currentPath: string;
  item: { [key: string]: string };
  setData: React.Dispatch<React.SetStateAction<MainPageData | null>>;
}

const AddButton: React.FC<AddButtonProps> = ({
  currentPath,
  item,
  setData,
}) => {
  const createEmptyItem = () => {
    return Object.keys(item).reduce((acc, key) => {
      if (key !== "_id") acc[key] = "";

      return acc;
    }, {} as { [key: string]: string });
  };

  const addItem = () => {
    setData((prevData) => {
      if (!prevData) return null;
      const newData: MainPageData = { ...(prevData as MainPageData) };
      const keys = currentPath.split(".");
      let currentSection: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        currentSection[keys[i]] = { ...(currentSection[keys[i]] || {}) };
        currentSection = currentSection[keys[i]];
      }
      const lastKey = keys[keys.length - 1];
      currentSection[lastKey] = [
        ...(currentSection[lastKey] || []),
        createEmptyItem(),
      ];
      console.log("newData: ", newData);
      return newData;
    });
  };

  return (
    <div className="flex mb-3 mt-1">
      <button
        onClick={addItem}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
      >
        ДОБАВИТЬ НОВЫЙ БЛОК
      </button>
    </div>
  );
};

export default AddButton;