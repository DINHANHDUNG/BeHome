/*---------------------------------------Info User---------------------------------------*/


export interface CustomInfoUser {
  fullinfo: InfoUser;
  error: boolean;
  loading: boolean;
}

export interface InfoUser {
  id: number;
  username: string;
  password: string;
  namecustomer: string;
  phonenumber: string;
  email: string;
  namebank: string;
  nameaccount: string;
  numberaccount: string;
  createdate: string;
}

export interface UpdateInfoUser {
  id: number;
  namecustomer: string;
  phonenumber: string;
  email: string;
  namebank: string;
  nameaccount: string;
  numberaccount: string;
}

/*---------------------------------------Account/*---------------------------------------*/

export interface Account {
  id: number;
  username: string;
  password: string;
  createdate: string;
  permission: string;
}

export interface AccountResponseLogin {
  listuser: Account;
  token: string;
}

export interface AccountResponseRegister {
  listuser: Account;
}

export type AccountResponseChangePassword = AccountResponseRegister;

export interface LoginType {
  username: string;
  password: string;
}

export type Register = LoginType;

export interface CustomesAccount {
  listuser: Account;
  loading: boolean;
  token: string;
  error: boolean;
}
export interface ChangePassword {
  id: number;
  oldpassword: string;
  newpassword: string;
}
export type RegisterType = LoginType & Register;
