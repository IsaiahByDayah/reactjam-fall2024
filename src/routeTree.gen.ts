/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as LoginIndexImport } from './routes/login.index'
import { Route as LoginNewUserImport } from './routes/login.new-user'

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/',
  getParentRoute: () => LoginRoute,
} as any)

const LoginNewUserRoute = LoginNewUserImport.update({
  path: '/new-user',
  getParentRoute: () => LoginRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/login/new-user': {
      id: '/login/new-user'
      path: '/new-user'
      fullPath: '/login/new-user'
      preLoaderRoute: typeof LoginNewUserImport
      parentRoute: typeof LoginImport
    }
    '/login/': {
      id: '/login/'
      path: '/'
      fullPath: '/login/'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof LoginImport
    }
  }
}

// Create and export the route tree

interface LoginRouteChildren {
  LoginNewUserRoute: typeof LoginNewUserRoute
  LoginIndexRoute: typeof LoginIndexRoute
}

const LoginRouteChildren: LoginRouteChildren = {
  LoginNewUserRoute: LoginNewUserRoute,
  LoginIndexRoute: LoginIndexRoute,
}

const LoginRouteWithChildren = LoginRoute._addFileChildren(LoginRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRouteWithChildren
  '/login/new-user': typeof LoginNewUserRoute
  '/login/': typeof LoginIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login/new-user': typeof LoginNewUserRoute
  '/login': typeof LoginIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRouteWithChildren
  '/login/new-user': typeof LoginNewUserRoute
  '/login/': typeof LoginIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/login/new-user' | '/login/'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login/new-user' | '/login'
  id: '__root__' | '/' | '/login' | '/login/new-user' | '/login/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx",
      "children": [
        "/login/new-user",
        "/login/"
      ]
    },
    "/login/new-user": {
      "filePath": "login.new-user.tsx",
      "parent": "/login"
    },
    "/login/": {
      "filePath": "login.index.tsx",
      "parent": "/login"
    }
  }
}
ROUTE_MANIFEST_END */
