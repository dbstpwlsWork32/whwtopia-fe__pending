interface RouteChangeParams {
  path: string
}
interface EventRouteChange extends CustomEvent<RouteChangeParams> {
}

interface RouterStructure {
  routes: [
    {
      path: RegExp | string,
      view?: () => Promise<any> | any,
      exact?: boolean
    }
  ],
  fallback: () => Promise<any> | any
}