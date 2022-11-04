export interface PaginationProps {
  totalPage: number
  activePage: number
  pagesChunk: number[]
  setActivePage: (value: number) => any
}
