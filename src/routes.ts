import Auth from "./pages/Auth/Auth"
import Favorite from "./pages/Favorite/Favorite"
import FullAdverstening from "./pages/FullAdverstening/FullAdverstening"
import Home from "./pages/Home/Home"
import Personal from "./pages/Personal/Personal"
import {
  ADVERTISMENT_ROUTE,
  FAVORITE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PERSONAL_ROUTE,
  REGISTER_ROUTE,
} from "./utils/constants"

export interface Route {
  name: string
  path: string
  element: () => JSX.Element
}

export const menuRoutes: Route[] = [
  {
    name: "Home",
    path: HOME_ROUTE,
    element: Home,
  },
  {
    name: "Auth",
    path: LOGIN_ROUTE,
    element: Auth,
  },
  {
    name: "Register",
    path: REGISTER_ROUTE,
    element: Auth,
  },
]

export const publicRoutes: Route[] = [
  {
    name: "Home",
    path: HOME_ROUTE,
    element: Home,
  },
  {
    name: "Auth",
    path: LOGIN_ROUTE,
    element: Auth,
  },
  {
    name: "Register",
    path: REGISTER_ROUTE,
    element: Auth,
  },
  {
    name: "Favorite",
    path: FAVORITE_ROUTE,
    element: Favorite,
  },
  {
    name: "Full Page",
    path: `${ADVERTISMENT_ROUTE}/:id`,
    element: FullAdverstening,
  },
  {
    name: "Personal",
    path: PERSONAL_ROUTE,
    element: Personal,
  },
]

export const authMenuRoutes: Route[] = [
  {
    name: "Home",
    path: HOME_ROUTE,
    element: Home,
  },
  {
    name: "Favorite",
    path: FAVORITE_ROUTE,
    element: Favorite,
  },
  {
    name: "Personal",
    path: PERSONAL_ROUTE,
    element: Personal,
  },
]
