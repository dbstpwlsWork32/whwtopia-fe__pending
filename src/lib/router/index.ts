import type { TemplateResult } from 'lit-html'
import { render } from 'lit-html'

class Router {
  protected router: RouterStructure
  protected containerQuery: string

  constructor(router: RouterStructure, containerQuery: string) {
    this.router = router
    this.containerQuery = containerQuery

    const { pathname } = new URL(window.location.href)
    this.viewChange(pathname)

    window.addEventListener('popstate', this.handlePopstate.bind(this))
  }

  protected async getViews (path: string) {
    const resolveModule = async (val: { default: any } | any) => {
      // @ts-ignore
      if (val.__esModule) return val.default
      else return val
    }
  
    const nowRoute = this.router.routes.find(el => {
      if (el.exact) return path === el.path
      return path.match(el.path)
    })
    let viewOrigin: TemplateResult = (!nowRoute) ? await this.router.fallback() : await nowRoute.view!()
    // @ts-ignore
    let resolveView = await resolveModule(viewOrigin)
    if (!resolveView) throw Error(`can't find router in ${path}`)
  
    return resolveView
  }

  protected handlePopstate() {
    const { pathname } = new URL(window.location.href)
    this.viewChange(pathname)
  }

  protected async viewChange (path: string) {
    const container = document.querySelector(this.containerQuery)
    if (!container) {
      window.removeEventListener('popstate', this.handlePopstate.bind(this))
      return false
    }
    
    const currentRoute = await this.getViews(path)
    render(currentRoute, container)
  }

  async routeLinkClick (e: EventRouteChange) {
    const { pathname } = new URL(window.location.href)

    if (e.detail.path !== pathname) {
      this.viewChange(e.detail.path)
      window.history.pushState({}, '', e.detail.path)
    }
  }
}

export default Router