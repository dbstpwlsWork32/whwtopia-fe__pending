class Parse<Data> {
  private dataOrigin: Data
  private prefix: string

  constructor(data: Data, prefix: string) {
    this.dataOrigin = data
    this.prefix = prefix
  }
  
  getCssVar (key: keyof Data): string {
    return `${this.prefix}-${key}`
  }

  setCssVar (): string {
    let result = ''
    for (const key in this.dataOrigin) {
      result += `${this.getCssVar(key)}: ${this.dataOrigin[key]};`
    }

    return result
  }
}

export {
  Parse
}