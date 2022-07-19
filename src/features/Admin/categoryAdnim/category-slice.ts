import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import queryString from "query-string";
import {
  getCategoryByIdAdmin,
  postAddCategoryByIdAdmin,
  postDeleteCategoryAdmin,
  postEditCategoryByIdAdmin,
} from ".";
import { openNotification } from "../../../app/hooks";
import { Category, CustomesCategory } from "../../../app/types/category";
import {
  getAllCategoryComboAdmin,
  getAllCategoryProductAdmin,
  getAllCategoryTrees,
  hiddenCategoryByIdAdmin,
  showCategoryByIdAdmin,
} from "./patchCategory-api";
const initialStateCategory: CustomesCategory = {
  listcategoryProduct: [] as Array<Category>,
  listcategoryCombo: [] as Array<Category>,
  loading: false,
  error: false,
};

const categorySliceAdmin = createSlice({
  name: "categoryadmin",
  initialState: initialStateCategory,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesCategory>) => {
    // getAll combo
    builder
      .addCase(getAllCategoryComboAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoryComboAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listcategoryCombo = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllCategoryComboAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getAll product
    builder
      .addCase(getAllCategoryProductAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoryProductAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.listcategoryProduct = result;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllCategoryProductAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // show
    builder
      .addCase(showCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(showCategoryByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thao tác thành công",
          type: "success",
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(showCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thao tác không thành công",
          type: "error",
        });
      });

    // hidden
    builder
      .addCase(hiddenCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(hiddenCategoryByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thao tác thành công",
          type: "success",
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(hiddenCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thao tác không thành công",
          type: "error",
        });
      });

    // getAll trees
    builder
      .addCase(getAllCategoryTrees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategoryTrees.fulfilled, (state, action) => {
        const { combo, product } = action.payload;
        let newArrProduct = [] as any;
        let newArrCombo = [] as any;

        product?.map((value: any) => {
          let newArrChildren = [] as any;

          value.categorytrees?.map((val: any) => {
            newArrChildren.push({
              id: val.id,
              id_parent: val.id_parent,
              name: val.name,
              name_parent: val.name_parent,
              show: val.show,
              children: val.categorytrees ? val.categorytrees : null,
            });
          });

          newArrProduct.push({
            id: value.id,
            id_parent: value.id_parent,
            name: value.name,
            name_parent: value.name_parent,
            show: value.show,
            children: newArrChildren.length > 0 ? newArrChildren : null,
          });
        });

        combo?.map((value: any) => {
          let newArrChildren = [] as any;

          value.categorytrees?.map((val: any) => {
            newArrChildren.push({
              id: val.id,
              id_parent: val.id_parent,
              name: val.name,
              name_parent: val.name_parent,
              show: val.show,
              children: val.categorytrees ? val.categorytrees : null,
            });
          });

          newArrCombo.push({
            id: value.id,
            id_parent: value.id_parent,
            name: value.name,
            name_parent: value.name_parent,
            show: value.show,
            children: newArrChildren.length > 0 ? newArrChildren : null,
          });
        });

        state.listcategoryProduct = newArrProduct;
        state.listcategoryCombo = newArrCombo;

        state.loading = false;
        state.error = false;
      })
      .addCase(getAllCategoryTrees.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryByIdAdmin.fulfilled, (state, action) => {
        // const { listuser } = action.payload;
        // state.listcategory = listuser;
        // state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add category
    builder
      .addCase(postAddCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddCategoryByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thêm không thành công",
          type: "error",
        });
      });

    // Sửa category
    builder
      .addCase(postEditCategoryByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEditCategoryByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Sửa thành công",
          type: "success",
        });
        state.loading = false;
        state.error = false;
      })
      .addCase(postEditCategoryByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Sửa không thành công",
          type: "error",
        });
      });

    // Xóa category
    builder
      .addCase(postDeleteCategoryAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteCategoryAdmin.fulfilled, (state, action) => {
        // const { result } = action.payload;
        // state.listcategory = result;
        state.loading = false;
        state.error = false;
        openNotification({
          message: "Xóa thành công",
          type: "success",
        });
        // console.log("Get all category thành công");
      })
      .addCase(postDeleteCategoryAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Xóa thất bại",
          type: "error",
        });
        // console.log("Get category không thành công");
      });
  },
});

const { reducer } = categorySliceAdmin;
export default reducer;
