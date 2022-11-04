import React from "react"

import styles from "./Favorite.module.scss"

import Advertisment from "../../components/Advertisment/Advertisment"
import Pagination from "../../components/Pagination/Pagination"
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks"
import AdveetismentLayout from "../../layouts/AdvertisementLayout/AdvertismentLayout"
import { Adverstaning } from "../../redux/slice/AdverstaningSlice/AdverstaningSlice.props"
import { getFavorites, setActiveFavoritePage } from "../../redux/slice/FavoriteSlice/FavoriteSlise"

function Home() {
  const { favorite, totalPage, count, activePage, pagesChunk } = useAppSelector((store) => store.favorite)
  const { user } = useAppSelector((store) => store.user)

  const isLoading = useAppSelector((store) => store.favorite.statusFavorite) === "loading"

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getFavorites({ id: user?._id, count, activePage }))
  }, [activePage])

  if (!user) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          color: "#383838",
        }}
      >
        Sign in your acount.
      </h1>
    )
  }

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <img src='/Fullpageloader.svg' alt='loading...' />
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Favorite</h1>
        <AdveetismentLayout>
          {favorite.map((obj: Adverstaning) => (
            <Advertisment {...obj} key={obj._id} />
          ))}
        </AdveetismentLayout>
        {totalPage > 1 && (
          <Pagination
            totalPage={totalPage}
            activePage={activePage}
            pagesChunk={pagesChunk}
            setActivePage={setActiveFavoritePage}
          />
        )}
      </div>
    </div>
  )
}

export default Home
