interface RouteChangeParams {
  path: string
}
interface EventRouteChange extends CustomEvent<RouteChangeParams> {
}

interface routerBase {
  
}

interface RouterStructure {
  routes: {
    path: RegExp | string,
    view?: () => Promise<any> | any,
    exact?: boolean
  }[],
  root?: string,
  fallback: () => Promise<any> | any
}