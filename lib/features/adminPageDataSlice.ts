import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import _ from "lodash";
import axios from "axios";
import { RootState } from "@lib/store";
import ApiService from "@services/ApiService";
import { AdminPageDataType } from "@/types/adminTypes";

interface AdminPageData {
  value: AdminPageDataType | null;
  error: string | null;
  saveError: string | null;
  isLoading: boolean;
  saveResult: "Error" | "Success" | null;
}

const initialState: AdminPageData = {
  value: null,
  error: null,
  isLoading: false,
  saveError: null,
  saveResult: null,
};

export const getAdminPageData = createAsyncThunk(
  "adminPage/getData",
  async (endPoint: string) => {
    const response = await axios.get(`/api/${endPoint}`);
    return response.data;
  }
);

export const saveAdminPageData = createAsyncThunk(
  "adminPage/saveData",
  async (
    {
      endPoint,
      formData,
    }: { endPoint: string; formData: FormData },
    { getState }
  ) => {
    const state = getState() as RootState;
    const { value: data } = state.adminPageData;
    const formDataToSend = new FormData();

    for (let pair of formData.entries()) {
      formDataToSend.append(pair[0], pair[1]);
    }

    formDataToSend.append("jsonData", JSON.stringify(data));

    const response = await ApiService.updatePageData({
      endPoint,
      formDataToSend,
    });

    return response.data;
  }
);

const adminPageDataSlice = createSlice({
  name: "adminPage",
  initialState,
  reducers: {
    textAreaBlock: (
      state,
      action: PayloadAction<{ path: string; value: any }>
    ) => {
      const { path, value } = action.payload;

      if (state.value !== null) {
        const newData = _.cloneDeep(state.value);
        _.set(newData, path, value);
        state.value = newData;
      }
    },
    deleteItemFromData: (
      state,
      action: PayloadAction<string>
    ) => {
      const lodashPath = action.payload;

      if (!state.value) return;

      const newData = _.cloneDeep(state.value);

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

      const basePath = lodashPath
        .split(".")
        .slice(2)
        .join(".");
      const enPath = `languages.en.${basePath}`;
      const ruPath = `languages.ru.${basePath}`;

      deleteItemFromLocale(enPath);
      deleteItemFromLocale(ruPath);

      state.value = newData;
    },
    addItemToData: (
      state,
      action: PayloadAction<{
        currentPath: string;
        emptyItem: { [key: string]: string };
      }>
    ) => {
      const { currentPath, emptyItem } = action.payload;

      if (!state.value) return;

      const newData = _.cloneDeep(state.value);

      const addItemToLocale = (localePath: string) => {
        const keys = localePath.split(".");
        let currentSection: any = newData;

        for (let i = 0; i < keys.length - 1; i++) {
          currentSection[keys[i]] = {
            ...(currentSection[keys[i]] || {}),
          };
          currentSection = currentSection[keys[i]];
        }

        const lastKey = keys[keys.length - 1];
        currentSection[lastKey] = [
          ...(currentSection[lastKey] || []),
          emptyItem,
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

      state.value = newData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdminPageData.pending, (state) => {
        state.error = null;
      })
      .addCase(
        getAdminPageData.fulfilled,
        (
          state,
          action: PayloadAction<AdminPageDataType>
        ) => {
          state.value = action.payload;
        }
      )
      .addCase(getAdminPageData.rejected, (state) => {
        state.error = "Something went wrong";
      })
      .addCase(saveAdminPageData.pending, (state) => {
        state.isLoading = true;
        state.saveResult = null;
      })
      .addCase(
        saveAdminPageData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.saveError = null;
          state.isLoading = false;
          state.saveResult = "Success";
        }
      )
      .addCase(saveAdminPageData.rejected, (state) => {
        state.saveError = "Something went wrong";
        state.isLoading = false;
        state.saveResult = "Error";
      });
  },
});

export const {
  textAreaBlock,
  deleteItemFromData,
  addItemToData,
} = adminPageDataSlice.actions;

export default adminPageDataSlice.reducer;
