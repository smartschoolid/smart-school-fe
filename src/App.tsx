import { ConfigProvider } from "antd";
import "./App.css";
import { theme } from "./config/theme";
import { RouterProvider } from "react-router-dom";
import router from "./config/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ConfigProvider>
  );
}

export default App;
