import { route, index, layout } from "@react-router/dev/routes";

export default [
  layout("./layouts/main.jsx", [
    index("./pages/home.jsx"),
  ]),   
];
