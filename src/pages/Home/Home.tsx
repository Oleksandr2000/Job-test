import React from "react"

import styles from "./Home.module.scss"

import Advertisment from "../../components/Advertisment/Advertisment"
import Pagination from "../../components/Pagination/Pagination"
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks"
import AdveetismentLayout from "../../layouts/AdvertisementLayout/AdvertismentLayout"
import { Adverstaning } from "../../redux/slice/AdverstaningSlice/AdverstaningSlice.props"
import { fetchAdverstening, setActivePage } from "../../redux/slice/AdverstaningSlice/AdversteningSlice"
import { getFavorites } from "../../redux/slice/FavoriteSlice/FavoriteSlise"

function Home() {
  const { data, activePage, count, totalPage, pagesChunk } = useAppSelector((store) => store.adverstaning)
  const favoriteActivePage = useAppSelector((store) => store.favorite.activePage)

  const { user } = useAppSelector((store) => store.user)

  const isLoading = useAppSelector((store) => store.adverstaning.status) === "loading"

  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchAdverstening({ count, activePage }))
  }, [activePage])

  React.useEffect(() => {
    dispatch(
      getFavorites({
        id: user?._id,
        count: 20,
        activePage: favoriteActivePage,
      }),
    )
  }, [user])

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
        <AdveetismentLayout>
          {data.map((obj: Adverstaning) => (
            <Advertisment {...obj} key={obj._id} />
          ))}
        </AdveetismentLayout>

        <Pagination
          totalPage={totalPage}
          activePage={activePage}
          pagesChunk={pagesChunk}
          setActivePage={setActivePage}
        />
      </div>
    </div>
  )
}

export default Home
