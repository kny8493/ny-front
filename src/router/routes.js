const routes = [
  {
    path: '/main',
    name: 'DashBoard',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: () => import('@/views/TodoList')
  }
]
export default routes
