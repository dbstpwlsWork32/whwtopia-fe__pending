interface RouteChangeParams {
  path: string
}
interface EventRouteChange extends Event, RouteChangeParams {
}

interface RouterViewer extends HTMLElement {
  viewChange: () => void
}