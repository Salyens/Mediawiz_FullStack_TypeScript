import { LocalesType } from "@myTypes/mainTypes";
import styles from "../../displaydata.module.css";

interface DataLocalesProps {
  locale: LocalesType;
  value: any;
  newPath: string;
  renderData: (dataToRender: any, currentPath?: string) => React.ReactNode;
}

const DataLocales: React.FC<DataLocalesProps> = ({
  locale,
  value,
  newPath,
  renderData,
}) => {
  return (
    <div >
      <h3 className="text-center m-3 font-bold">
        {locale === "en" ? "English" : "Russian"}
      </h3>
      <div className={styles.lang_style}>
        {renderData(value, newPath)}
      </div>
    </div>
  );
};

export default DataLocales;
