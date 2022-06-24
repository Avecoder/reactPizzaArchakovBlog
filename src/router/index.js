import Cart from '../pages/Cart'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import FullPizza from '../pages/FullPizza'


export const publicRoutes = [
  {
    path: '/',
    Component: Home,
    name: 'Home'
  },
  {
    path: '/cart',
    Component: Cart,
    name: 'Cart'
  },
  {
    path: '/pizza/:id',
    Component: FullPizza,
    name: 'FullPizza'
  },
  {
    path: '*',
    Component: NotFound,
    name: 'NotFound'
  },
]
