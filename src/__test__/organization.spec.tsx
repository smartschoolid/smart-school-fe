import { render, screen, waitFor } from "@testing-library/react";
import "./watchMedia.mock";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Organization from "@/pages/organization";
import OrganizationForm from "@/pages/organization/drawer/organization-form";
import { ReactNode } from "react";

const InitProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Organization test", () => {
  test("Render Login Page", async () => {
    render(
      <InitProvider>
        <Organization />
      </InitProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Organization")).toBeDefined();
    });
  });

  test("Render Create/Edit Drawer", async () => {
    render(
      <InitProvider>
        <OrganizationForm />
      </InitProvider>
    );

    await waitFor(() => {
      expect(screen.findAllByText(`Organization`)).toContain("Organization");
    });
  });
});
