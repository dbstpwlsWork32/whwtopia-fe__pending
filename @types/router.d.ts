interface RouteChangeParams {
  path: string
}
interface EventRouteChange extends CustomEvent<RouteChangeParams> {
}

interface RouterStructure {
  routes: {
    [path: string]: {
      view?: () => Promise<any> | any
    }
  }
  fallback: () => Promise<any> | any
}