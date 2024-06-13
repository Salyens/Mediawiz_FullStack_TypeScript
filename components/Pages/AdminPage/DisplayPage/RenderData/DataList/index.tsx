import React from "react";
import AddButton from "../../Buttons/AddButton";
import DeleteButton from "../../Buttons/DeleteButton";

interface DataListProps {
  value: (object | string)[];
  renderData: (dataToRender: any, currentPath?: string) => React.ReactNode;
  newPath: string;
}

const DataList: React.FC<DataListProps> = ({ value, renderData, newPath }) => {
  return (
    <>
      {value.map((item, arrayIndex) => (
        <div key={`${newPath}-${arrayIndex}`}>
          <h6>{`№${arrayIndex + 1}`}</h6>

          {typeof item === "object" ? (
            <>
              {renderData(item, `${newPath}[${arrayIndex}]`)}
              <DeleteButton
                currentPath={`${newPath}[${arrayIndex}]`}
                item={item}
              />
            </>
          ) : (
            <p>{item}</p>
          )}
        </div>
      ))}
      <AddButton currentPath={newPath} item={typeof value[0] === "object" ? value[0] : {}} />
    </>
  );
};

export default DataList;
