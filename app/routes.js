import { RoutePaths } from "./constants/route-path";
import { route, index, layout} from "@react-router/dev/routes";

export default [
layout('./layout/main.jsx', [
    index('./pages/home.jsx'),
    route(RoutePaths.ABOUT_US, './pages/about-us.jsx')
])
];