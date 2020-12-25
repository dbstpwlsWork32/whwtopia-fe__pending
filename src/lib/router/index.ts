import type { TemplateResult } from 'lit-html'

export default (router: RouterStructure) =>
  async (path: string) => {
    const resolveModule = async (val: { default: any } | any) => {
      // @ts-ignore
      if (val.__esModule) return val.default
      else return val
    }

    const nowRoute = router.routes[path]
    let viewOrigin: TemplateResult = (!nowRoute) ? await router.fallback() : await nowRoute.view!()
    // @ts-ignore
    let resolveView = await resolveModule(viewOrigin)
    if (!resolveView) throw Error(`can't find router in ${path}`)

    return resolveView
  }