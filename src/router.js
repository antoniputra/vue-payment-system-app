// Page Content
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import Register from '@/pages/Register'
import Employee from '@/pages/Employee'
import Profile from '@/pages/Profile'
import NotFound from '@/pages/NotFound'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/employee',
    name: 'employee',
    component: Employee,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '**',
    name: 'notfound',
    component: NotFound
  }
]