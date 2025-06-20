// Generated by React Router

import "react-router"

declare module "react-router" {
  interface Register {
    pages: Pages
    routeFiles: RouteFiles
  }
}

type Pages = {
  "/": {
    params: {};
  };
  "/testing": {
    params: {};
  };
};

type RouteFiles = {
  "root.tsx": {
    id: "root";
    page: "/" | "/testing";
  };
  "./layouts/main.jsx": {
    id: "layouts/main";
    page: "/" | "/testing";
  };
  "./pages/home.jsx": {
    id: "pages/home";
    page: "/";
  };
  "./pages/testing.jsx": {
    id: "pages/testing";
    page: "/testing";
  };
};