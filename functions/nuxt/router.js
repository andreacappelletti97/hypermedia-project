import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9b7f451a = () => interopDefault(import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */))
const _8cfc1ae4 = () => interopDefault(import('../pages/areas.vue' /* webpackChunkName: "pages/areas" */))
const _3a56c7c6 = () => interopDefault(import('../pages/contactus.vue' /* webpackChunkName: "pages/contactus" */))
const _5ece0237 = () => interopDefault(import('../pages/people.vue' /* webpackChunkName: "pages/people" */))
const _d9e930e0 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _34054a8c = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _09c60bcc = () => interopDefault(import('../pages/area/_singlearea.vue' /* webpackChunkName: "pages/area/_singlearea" */))
const _ae4aad98 = () => interopDefault(import('../pages/member/_singlemember.vue' /* webpackChunkName: "pages/member/_singlemember" */))
const _abb30420 = () => interopDefault(import('../pages/product/_singleproduct.vue' /* webpackChunkName: "pages/product/_singleproduct" */))
const _e357584c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/aboutus",
    component: _9b7f451a,
    name: "aboutus"
  }, {
    path: "/areas",
    component: _8cfc1ae4,
    name: "areas"
  }, {
    path: "/contactus",
    component: _3a56c7c6,
    name: "contactus"
  }, {
    path: "/people",
    component: _5ece0237,
    name: "people"
  }, {
    path: "/privacy",
    component: _d9e930e0,
    name: "privacy"
  }, {
    path: "/products",
    component: _34054a8c,
    name: "products"
  }, {
    path: "/area/:singlearea?",
    component: _09c60bcc,
    name: "area-singlearea"
  }, {
    path: "/member/:singlemember?",
    component: _ae4aad98,
    name: "member-singlemember"
  }, {
    path: "/product/:singleproduct?",
    component: _abb30420,
    name: "product-singleproduct"
  }, {
    path: "/",
    component: _e357584c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
