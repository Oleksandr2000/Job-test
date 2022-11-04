import React from "react"

import styles from "./Pagination.module.scss"
import { PaginationProps } from "./Pagination.props"

import { useAppDispatch } from "../../hooks/useContextHooks"
import Button from "../Button/Button"

function Pagination({ totalPage, activePage, pagesChunk, setActivePage }: PaginationProps) {
  const dispatch = useAppDispatch()

  const handlerPage = (value: number) => {
    dispatch(setActivePage(value))
  }

  return (
    <div className={styles.root}>
      <Button variant='text' color='dark-blue' size='content' onClick={() => handlerPage(activePage - 1)}>
        <img src='Arrowleft.svg' alt='prev' />
      </Button>
      {totalPage < 5 &&
        [...Array(totalPage)].map((_, i) => (
          <Button
            variant={i + 1 === activePage ? "text-active" : "text"}
            color='dark-blue'
            size='content'
            key={i}
            onClick={() => handlerPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      {totalPage >= 5 && (
        <>
          <Button
            variant={activePage === 1 ? "text-active" : "text"}
            color='dark-blue'
            size='content'
            onClick={() => handlerPage(1)}
          >
            1
          </Button>
          {activePage >= 4 && (
            <Button variant='text' color='dark-blue' size='content'>
              ...
            </Button>
          )}
          {pagesChunk.map((item: any, i: number) => (
            <Button
              variant={item === activePage ? "text-active" : "text"}
              color='dark-blue'
              size='content'
              key={i}
              onClick={() => handlerPage(item)}
            >
              {item}
            </Button>
          ))}
          {activePage < totalPage - 2 && (
            <Button variant='text' color='dark-blue' size='content'>
              ...
            </Button>
          )}
          <Button
            variant={totalPage === activePage ? "text-active" : "text"}
            color='dark-blue'
            size='content'
            onClick={() => handlerPage(totalPage)}
          >
            {totalPage}
          </Button>
        </>
      )}

      <Button variant='text' color='dark-blue' size='content' onClick={() => handlerPage(activePage + 1)}>
        <img src='Arrowright.svg' alt='next' />
      </Button>
    </div>
  )
}

export default Pagination
