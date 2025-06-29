import { route, index, layout } from "@react-router/dev/routes";
import { RoutePaths } from "./constants/route-path";

export default [
  layout("./layouts/main.jsx", [
    index("./pages/home.jsx"),
    route(RoutePaths.ALL_CATEGORIES, './pages/all-categories.jsx')
  ]),   
];
