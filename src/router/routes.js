
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    props:true,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'),},
      { path: 'category',
        component: () => import('../components/Category/Category'),
        props:true },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
