import { Outlet } from "react-router";
import MainLayout from "./MainLayout";

export default function Main() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}