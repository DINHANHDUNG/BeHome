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
