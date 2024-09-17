import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

interface AdminForm {
  emptyFields: string[];
}

const initialState: AdminForm = {
  emptyFields: [],
};

const adminForm = createSlice({
  name: "adminForm",
  initialState,
  reducers: {
    updateEmptyFields: (
      state,
      action: PayloadAction<{
        isEmpty: boolean;
        fullPath: string;
      }>
    ) => {
      const { isEmpty, fullPath } = action.payload;
      if (isEmpty) {
        if (!state.emptyFields.includes(fullPath)) {
          state.emptyFields.push(fullPath);
        }
      } else {
        state.emptyFields = state.emptyFields.filter(
          (path) => path !== fullPath
        );
      }
    },
    removeEmptyFields: (
      state,
      action: PayloadAction<{
        currentPath: string;
        itemKeys: string[];
      }>
    ) => {
      const { currentPath, itemKeys } = action.payload;

      let updatedEmptyFields = state.emptyFields;

      itemKeys.forEach((key) => {
        const enPath = `${currentPath}.${key}`;
        const ruPath = enPath.includes("languages.en")
          ? enPath.replace("languages.en", "languages.ru")
          : enPath.replace("languages.ru", "languages.en");

        updatedEmptyFields = updatedEmptyFields.filter(
          (path) => path !== enPath && path !== ruPath
        );
      });

      state.emptyFields = updatedEmptyFields;
    },
  },
});

export const { updateEmptyFields, removeEmptyFields } =
  adminForm.actions;
export default adminForm.reducer;
