/*---------------------------------------Info User---------------------------------------*/


export interface CustomInfoUser {
  fullinfo: InfoUser;
  error: boolean;
  loading: boolean;
}

export interface InfoUser {
  id: Number;
  username: String;
  password: String;
  namecustomer: String;
  phonenumber: String;
  email: String;
  namebank: String;
  nameaccount: String;
  numberaccount: String;
  createdate: String;
}

export interface UpdateInfoUser {
  id: Number;
  namecustomer: String;
  phonenumber: String;
  email: String;
  namebank: String;
  nameaccount: String;
  numberaccount: String;
}

/*---------------------------------------Account/*---------------------------------------*/

export interface Account {
  id: number;
  username: String;
  password: String;
  createdate: String;
  permission: String;
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
