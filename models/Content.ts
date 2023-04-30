interface ILink {
  id?:string,
  title:string,
  url:string,
}

interface IFooter {
  id:string,
  content:string[],
  copyright:string,
  links:ILink[],
}

interface IGlobal {
  id:string,
  brand:string,
  logo:string,
  footer:IFooter,
}

export type { ILink, IFooter, IGlobal }