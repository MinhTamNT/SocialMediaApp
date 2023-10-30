import { Home } from '~/components/Pages/Home/Home'
import { Popular } from '~/components/Pages/Popular/Popular'
import { RoutePaths } from '~/types/enum'
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
  }
]
const privateRoute: Route[] = []
export { publicRoutes, privateRoute }
