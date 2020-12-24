interface RouteChangeParams {
  path: string
}
interface EventRouteChange extends CustomEvent<RouteChangeParams> {
}

interface RouterStructure {
  [path: string]: {
    view?: () => void,
    fallback?: () => void
  }
}