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
  "/all-categories": {
    params: {};
  };
};

type RouteFiles = {
  "root.tsx": {
    id: "root";
    page: "/" | "/all-categories";
  };
  "./layouts/main.jsx": {
    id: "layouts/main";
    page: "/" | "/all-categories";
  };
  "./pages/home.jsx": {
    id: "pages/home";
    page: "/";
  };
  "./pages/all-categories.jsx": {
    id: "pages/all-categories";
    page: "/all-categories";
  };
};