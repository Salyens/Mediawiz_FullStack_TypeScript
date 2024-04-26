import { Button, Box } from "@mui/material";
import _, { forEach } from "lodash";

const DeleteButton = ({
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
        updatedEmptyFields = updatedEmptyFields.filter(
          (path) => path !== `${currentPath}.${key}`
        );
      });

      return updatedEmptyFields;
    });
    setData((prevData) => {
      const newData = _.cloneDeep(prevData);
      const pathArray = lodashPath.split(".");
      const index = parseInt(pathArray.pop(), 10);
      const parentPath = pathArray.join(".");

      const parentArray = _.get(newData, parentPath, []);

      if (index > -1 && parentArray.length > index) {
        parentArray.splice(index, 1);
        _.set(newData, parentPath, parentArray);
      }

      return newData;
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Button
        sx={{ mt: 0.5 }}
        onClick={deleteItem}
        variant="contained"
        color="error"
      >
        Delete block
      </Button>
    </Box>
  );
};

export default DeleteButton;
