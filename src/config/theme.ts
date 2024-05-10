import { ThemeConfig } from "antd";

const colors = {
  primary: "#2094FF",
  secondary: "#f0f0f0",
  success: "#52c41a",
  warning: "#faad14",
  danger: "#f5222d",
  info: "#2094FF",
  borderColor: "#EBEBEB",
  textPrimary: "#4E4E4E",
  textSecondary: "#B4B4B4",
  inputBg: "#FDFDFD",
};

export const theme: ThemeConfig = {
  token: {
    fontFamily: "Inter",
    fontWeightStrong: 700,
    fontSize: 14,
    colorPrimary: colors.primary,
    controlHeight: 36,
    borderRadius: 5,
    colorBorder: colors.borderColor,
    colorText: colors.textPrimary,
    colorLink: colors.primary,
  },
  components: {
    Button: {
      fontWeight: 600,
    },
    Card: {
      padding: 25,
    },
    Form: {
      labelColor: colors.textSecondary,
    },
    Input: {
      colorBgContainer: colors.inputBg,
    },
    Layout: {
      headerBg: colors.secondary,
    },
    Menu: {
      controlItemBgActive: colors.primary,
      itemSelectedColor: "#fff",
    },
  },
};
