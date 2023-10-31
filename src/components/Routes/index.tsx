import { Home } from '~/components/Pages/Home/Home'
import { Popular } from '~/components/Pages/Popular/Popular'
import { RoutePaths } from '~/types/enum'
import { Login } from '../Pages/Login/Login'

interface Route {
  path: RoutePaths
  component: React.ComponentType
  layout?: React.ComponentType
}
const publicRoutes: Route[] = [
  {
    path: RoutePaths.HOME,
    component: Home
  },
  {
    path: RoutePaths.POPULAR,
    component: Popular
  },
  {
    path: RoutePaths.LOGIN,
    component: Login,
    layout: undefined
  }
]
const privateRoute: Route[] = []
export { publicRoutes, privateRoute }
