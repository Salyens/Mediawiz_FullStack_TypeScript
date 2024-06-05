import { MainPageData } from "@interfaces/mainPage";

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

      const addItemToLocale = (localePath: string) => {
        const keys = localePath.split(".");
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
      };

      const enPath = `languages.en.${currentPath
        .split(".")
        .slice(2)
        .join(".")}`;
      const ruPath = `languages.ru.${currentPath
        .split(".")
        .slice(2)
        .join(".")}`;

      addItemToLocale(enPath);
      addItemToLocale(ruPath);
      
      console.log('newData: ', newData);
      return newData;

    });
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
