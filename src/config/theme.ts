import { ThemeConfig } from "antd";

const colors = {
  primary: "#2094FF",
  secondary: "#f2f2f2",
  success: "#52c41a",
  warning: "#faad14",
  danger: "#f5222d",
  info: "#2094FF",
  borderColor: "#EBEBEB",
  textPrimary: "#4E4E4E",
  textSecondary: "#B4B4B4",
  inputBg: "#FDFDFD",
};

const globalStyles = {
  borderRadius: 5,
  controlHeight: 36,
  fontWightStrong: 700,
  fontSize: 14,
};

export const theme: ThemeConfig = {
  token: {
    fontFamily: "Inter",
    fontWeightStrong: globalStyles.fontWightStrong,
    fontSize: globalStyles.fontSize,
    colorPrimary: colors.primary,
    controlHeight: globalStyles.controlHeight,
    borderRadius: globalStyles.borderRadius,
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
      borderRadius: globalStyles.borderRadius + 2,
      borderRadiusOuter: globalStyles.borderRadius + 2,
      headerBg: colors.inputBg,
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
