import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { openNotification } from "../../../app/hooks";
import { CustomesComment } from "../../../app/types/comment";
import {
  getAllCommentAdmin,
  getCommentByIdAdmin,
  postAddCommentByIdAdmin,
  postAddReplyAdmin,
  postDeleteCommentAdmin,
  postDeleteReplyAdmin,
} from "./patchComment-api";
const initialState: CustomesComment = {
  listComment: [],
  loading: false,
  error: false,
  total: 0,
};

const commentSliceAdmin = createSlice({
  name: "commentadmin",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CustomesComment>) => {
    // getAllbycomment
    builder
      .addCase(getAllCommentAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCommentAdmin.fulfilled, (state, action) => {
        const { result , total} = action.payload;
        let newArr = [] as any;

        result?.map((value: any) => {
          // if (value.replys.length > 0) {
          //   newArr.push({
          //     ...value,
          //     children: value.replys,
          //   });
          // } else {
          newArr.push({
            ...value,
            // children: value.replys,
          });
          // }
        });

        console.log(newArr, newArr);

        state.listComment = newArr;
        state.loading = false;
        state.total = total;
        state.error = false;
      })
      .addCase(getAllCommentAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // getbyid
    builder
      .addCase(getCommentByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommentByIdAdmin.fulfilled, (state, action) => {
        const { result } = action.payload;
        state.listComment = [result];
        state.loading = false;
        // console.log("Get category by id thành công");
      })
      .addCase(getCommentByIdAdmin.rejected, (state) => {
        state.loading = false;
        openNotification({
          message: "Lấy dữ liệu thất bại",
          type: "error",
        });
      });

    // Add comment
    builder
      .addCase(postAddCommentByIdAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddCommentByIdAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Thêm thành công",
          type: "success",
        });
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddCommentByIdAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Thêm không thành công",
          type: "error",
        });
      });

    // Xóa comment
    builder
      .addCase(postDeleteCommentAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteCommentAdmin.fulfilled, (state, action) => {
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
      .addCase(postDeleteCommentAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Xóa thất bại",
          type: "error",
        });
        // console.log("Get category không thành công");
      });

    // Xóa reply
    builder
      .addCase(postDeleteReplyAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postDeleteReplyAdmin.fulfilled, (state, action) => {
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
      .addCase(postDeleteReplyAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Xóa thất bại",
          type: "error",
        });
        // console.log("Get category không thành công");
      });

    // Add Reply
    builder
      .addCase(postAddReplyAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(postAddReplyAdmin.fulfilled, (state, action) => {
        openNotification({
          message: "Trả lời thành công",
          type: "success",
        });
        const { result } = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(postAddReplyAdmin.rejected, (state) => {
        state.loading = false;
        state.error = true; //Show lỗi
        openNotification({
          message: "Trả lời thành công",
          type: "error",
        });
      });
  },
});

const { reducer } = commentSliceAdmin;
// export const { SortAscendingState, SortDecreaseState } =
//   commentSliceAdmin.actions;
export default reducer;
