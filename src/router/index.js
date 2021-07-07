import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: false }
      }
    ]
  },
  {
    path: '/projects',
    component: Layout,
    redirect: '/projects/inventory',
    children: [
      {
        path: 'inventory',
        component: () => import('@/views/project/inventory'),
        name: '项目清单',
        meta: { title: '项目清单', icon: 'nested', affix: false }
      }
    ]
  },
  {
    path: '/work',
    component: Layout,
    redirect: '/work/inventory',
    children: [
      {
        path: 'inventory',
        component: () => import('@/views/work/inventory'),
        name: '工程项清单',
        meta: { title: '工程项清单', icon: 'nested', affix: false }
      }
    ]
  },
  {
    path: '/material',
    component: Layout,
    redirect: '/material/inventory',
    children: [
      {
        path: 'inventory',
        component: () => import('@/views/material/inventory'),
        name: '材料设备价格清单',
        meta: { title: '材料设备价格清单', icon: 'component', affix: false }
      }
    ]
  }
// {
//   path: '/jobs',
//   component: Layout,
//   redirect: '/jobs/inventory',
//   children: [
//     {
//       path: 'inventory',
//       component: () => import('@/views/jobs/inventory'),
//       name: '任务清单',
//       meta: { title: '任务清单', icon: 'excel', affix: true }
//     }
//   ]
// },
// {
//   path: '/items',
//   component: Layout,
//   redirect: '/items/inventory',
//   children: [
//     {
//       path: 'inventory',
//       component: () => import('@/views/items/inventory'),
//       name: '任务项清单',
//       meta: { title: '任务项清单', icon: 'list', affix: true }
//     }
//   ]
// }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/projects',
    component: Layout,
    redirect: '/work/inventory',
    name: '任务清单',
    meta: {
      title: '任务',
      icon: 'el-icon-s-help'
    },
    hidden: true,
    children: [
      {
        path: 'inventory/:id(\\d+)',
        component: () => import('@/views/work/inventory'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/work/inventory' },
        hidden: true
      }
    ]
  },
  {
    path: '/work',
    component: Layout,
    redirect: '/jobs/inventory',
    name: '任务清单',
    meta: {
      title: '任务',
      icon: 'el-icon-s-help'
    },
    hidden: true,
    children: [
      {
        path: 'inventory/:id(\\d+)',
        component: () => import('@/views/jobs/inventory'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/jobs/inventory' },
        hidden: true
      }
    ]
  },
  {
    path: '/jobs',
    component: Layout,
    redirect: '/items/inventory',
    name: '任务项清单',
    meta: {
      title: '任务项',
      icon: 'el-icon-s-help'
    },
    hidden: true,
    children: [
      {
        path: 'inventory/:id(\\d+)',
        component: () => import('@/views/items/inventory'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/items/inventory' },
        hidden: true
      }
    ]
  },
  {
    path: '/items',
    component: Layout,
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    hidden: true,
    children: [
      {
        path: 'list/:id(\\d+)',
        component: () => import('@/views/items/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/items/edit' },
        hidden: true
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/items/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/items/edit' },
        hidden: true
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
