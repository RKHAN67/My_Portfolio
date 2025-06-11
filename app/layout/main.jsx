import { Outlet } from "@remix-run/react";
import { MinLayout } from "./MinLayout";

export const main = () => {
  return (
    <MinLayout>
      <Outlet />
    </MinLayout>
  );
};
