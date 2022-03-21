import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49ccba4e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _45fbda84 = () => interopDefault(import('..\\pages\\lend\\index.vue' /* webpackChunkName: "pages/lend/index" */))
const _689055cc = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _5c2123b0 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _364db283 = () => interopDefault(import('..\\pages\\user\\account.vue' /* webpackChunkName: "pages/user/account" */))
const _3d06adec = () => interopDefault(import('..\\pages\\lend\\_id.vue' /* webpackChunkName: "pages/lend/_id" */))
const _69849513 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _49ccba4e,
    name: "about"
  }, {
    path: "/lend",
    component: _45fbda84,
    name: "lend"
  }, {
    path: "/user",
    component: _689055cc,
    children: [{
      path: "",
      component: _5c2123b0,
      name: "user"
    }, {
      path: "account",
      component: _364db283,
      name: "user-account"
    }]
  }, {
    path: "/lend/:id",
    component: _3d06adec,
    name: "lend-id"
  }, {
    path: "/",
    component: _69849513,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
