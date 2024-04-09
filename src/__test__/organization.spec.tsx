import { render, screen, waitFor } from "@testing-library/react";
import "./watchMedia.mock";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Organization from "@/pages/organization";
import OrganizationForm from "@/pages/organization/drawer/organization-form";

describe("Organization test", () => {
  test("Render Login Page", async () => {
    render(
      <Provider store={store}>
        <Organization />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Organization")).toBeDefined();
    });
  });

  test("Render Create/Edit Drawer", async () => {
    render(
      <Provider store={store}>
        <OrganizationForm />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.findAllByText(`Organization`)).toContain("Organization");
    });
  });
});
