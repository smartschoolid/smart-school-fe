import { ConfigProvider } from "antd";
import "./App.css";
import { theme } from "./config/theme";
import { RouterProvider } from "react-router-dom";
import router from "./config/routes";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
