import { message, notification } from "antd";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
  export const useAppDispatch = () => useDispatch<AppDispatch>();
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const Numberformat = function (number: any) {
  return new Intl.NumberFormat("vi-VN", {
    // minimumFractionDigits: 2,
  }).format(number);
};

//Format curency
export const currency = function (number: any) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    // minimumFractionDigits: 2,
  }).format(number);
};

export const success = (text: any) => {
  message.success(text);
};

type NotificationType = "success" | "info" | "warning" | "error";

export const openNotificationWithIcon = (
  type: NotificationType,
  message: string,
  description?: string
) => {
  notification[type]({
    message: message,
    description: description,
  });
};


interface propsNoti {
  type: "success" | "error" | "warning";
  message: string;
  description?: string;
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export const openNotification = (props: propsNoti) => {
  notification[props.type]({
    message: props.message,
    description: props.description,
    placement: props.placement,
  });
};




//Format date
export function getParsedDate(strDate: string) {
  var strSplitDate = String(strDate).split(" ");
  var date = new Date(strSplitDate[0]) as any;
  // alert(date);
  var dd = date.getDate() as any;
  var mm = (date.getMonth() + 1) as any; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  date = dd + "-" + mm + "-" + yyyy;
  return date.toString();
}

//Format date + Time
export function getParsedDateTime(strDate: any) {
  var strSplitDate = String(strDate).split(" ");
  var date = new Date(strSplitDate[0]) as any;
  var hours = date.getUTCHours() as any;
  var min = date.getUTCMinutes() as any;
  var seconds = date.getSeconds() as any;
  var dd = date.getDate() as any;
  var mm = (date.getMonth() + 1) as any; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  date = dd + "-" + mm + "-" + yyyy + " " + hours + ":" + min;
  return date.toString();
}

//Format date + Time
export function getParsedDateTimeSS(strDate: any) {
  var strSplitDate = String(strDate).split(" ");
  var date = new Date(strSplitDate[0]) as any;
  var hours = date.getUTCHours() as any;
  var min = date.getUTCMinutes() as any;
  var seconds = date.getSeconds() as any;
  console.log(date);
  var dd = date.getDate() as any;
  var mm = (date.getMonth() + 1) as any; //January is 0!

  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  date = dd + "-" + mm + "-" + yyyy + " " + hours + ":" + min + ":" + seconds;
  return date.toString();
}
