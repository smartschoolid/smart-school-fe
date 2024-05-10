import { render, screen, waitFor } from "@testing-library/react";
import "./watchMedia.mock";
import Login from "@/pages/auth/login";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Register from "@/pages/auth/register";

describe("Login & Register test", () => {
  test("Render Login Page", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Masuk")).toBeDefined();
    });
  });

  test("Render Register Page", async () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getAllByText("Daftar")).toBeDefined();
    });
  });
});
