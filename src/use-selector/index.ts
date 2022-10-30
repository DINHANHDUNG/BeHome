import { RootState } from '../app/store';

/* ---------------------------------------ADMIN-------------------------------------------------- */
export const accountAdminStore = (state: RootState) => state.accountAdmin; //acc
export const promotionAdminStore = (state: RootState) => state.promotionAdmin; //Khuyến mại
export const rankAdminStore = (state: RootState) => state.rankAdmin; //Khuyến mại
export const manufacturerAdminStore = (state: RootState) =>
  state.manufacturerAdmin; //Khuyến mại
export const categoryAdminStore = (state: RootState) => state.categoryAdmin; //danh muc
export const productAdminStore = (state: RootState) => state.productAdmin; //Sản phẩm
export const companyAdminStore = (state: RootState) => state.companyAdmin; //Công ty
export const comboAdminStore = (state: RootState) => state.comboAdmin; //Combo
export const commentAdminStore = (state: RootState) => state.commentAdmin; //comment
export const buildAdminStore = (state: RootState) => state.buildAdmin; //build
export const orderAdminStore = (state: RootState) => state.orderAdmin; //order
// export const categoryProductAdminStore = (state: RootState) =>
//   state.categoryProductAdmin; //Danh mục sản phẩm
// export const categoryAdminStore = (state: RootState) => state.categoryAdmin; //Danh mục
// export const wareHouseStore = (state: RootState) => state.warehouse; //Kho

/* ---------------------------------------Home page-------------------------------------------------- */

export const productHomePageStore = (state: RootState) => state.ProductHomePage;
export const CartStore = (state: RootState) => state.CartCustomer;
