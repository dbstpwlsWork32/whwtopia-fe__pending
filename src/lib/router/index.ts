import type { EventPart, TemplateResult } from 'lit-html'
import { render, directive } from 'lit-html'

const getViews = async (router: RouterStructure, path: string) => {
  const resolveModule = async (val: { default: any } | any) => {
    // @ts-ignore
    if (val.__esModule) return val.default
    else return val
  }

  const nowRoute = router.routes.find(el => {
    if (el.exact) return path === el.path
    return path.match(el.path)
  })
  let viewOrigin: TemplateResult = (!nowRoute) ? await router.fallback() : await nowRoute.view!()
  // @ts-ignore
  let resolveView = await resolveModule(viewOrigin)
  if (!resolveView) throw Error(`can't find router in ${path}`)

  return resolveView
}

const createRouter = (router: RouterStructure, containerQuery: string) => 
  directive(() =>
    async (eventPart: EventPart) => {
      // @ts-ignore
      eventPart.setValue(async (e: EventRouteChange) => {
        const currentRoute = await getViews(router, e.detail.path)
        render(currentRoute, document.querySelector(containerQuery)!)
      })

      const { pathname } = new URL(window.location.href)
      const currentRoute = await getViews(router, pathname)
      render(currentRoute, document.querySelector(containerQuery)!)
    }
  )

export {
  createRouter as default,
  createRouter,
  getViews
}