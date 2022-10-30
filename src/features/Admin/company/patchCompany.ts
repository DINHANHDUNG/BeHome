import { createAsyncThunk } from '@reduxjs/toolkit';
import companyAdminAPI from '../../../app/commom/api/admin/api-company-admin';
import { UpdateCompany } from '../../../app/types/company';

export const getCompany = createAsyncThunk(
  'company/getcompany',
  // if you type your function argument here
  async () => {
    const response = await companyAdminAPI.getInfoCompany();
    return response;
  }
);

export const updateCompany = createAsyncThunk(
  'company/updatecompany',
  // if you type your function argument here
  async (data: UpdateCompany) => {
    const response = await companyAdminAPI.postUpdateCompanyAdmin(data);
    return await response;
  }
);
