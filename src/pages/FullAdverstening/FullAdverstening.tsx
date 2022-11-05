import React from "react"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"

import { ReactComponent as BookmarkIcon } from "./Bookmark.svg"
import { ReactComponent as FavoriteIcon } from "./Favorite.svg"
import styles from "./FullAdverstening.module.scss"

import Button from "../../components/Button/Button"
import GoogleMap from "../../components/Map/Map"
import Modal from "../../components/Modal/Modal"
import Paragraph from "../../components/Paragraph/Paragraph"
import Raiting from "../../components/Rating/Rating"
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks"
import ApplyLayout from "../../layouts/ApplyLayout/ApplyLayout"
import { Contact } from "../../layouts/ApplyLayout/ApplyLayout.props"
import { ApllyInitialValues, ApllyValidation } from "../../layouts/ApplyLayout/constants"
import { fetchOneAdverstening, handleModal } from "../../redux/slice/AdverstaningSlice/AdversteningSlice"
import { getFavorites, postFavorite } from "../../redux/slice/FavoriteSlice/FavoriteSlise"
import { postContacts } from "../../redux/slice/UserSlice/UserSlice"
import { HOME_ROUTE } from "../../utils/constants"

function FullAdverstening() {
  const { advertisement, status, showModal } = useAppSelector((store) => store.adverstaning)
  const { favorite, activePage } = useAppSelector((store) => store.favorite)
  const { user } = useAppSelector((store) => store.user)

  const dispatch = useAppDispatch()

  const { id } = useParams()

  React.useEffect(() => {
    if (id) {
      dispatch(fetchOneAdverstening({ id: id.substring(1) }))
    }
  }, [])

  const addToFavorite = async (user: string, advertisement: string) => {
    const body = {
      user,
      advertisement,
    }

    await dispatch(postFavorite(body))

    await dispatch(getFavorites({ id: user, count: 20, activePage }))
  }

  const confirmAuth = () => {
    toast.error("Sign in to your account")
  }

  if (status === "loading") {
    return (
      <div className={styles.loading}>
        <img src='/Fullpageloader.svg' alt='loading' />
      </div>
    )
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.main}>
              <div className={styles.header}>
                <h2 className={styles.subtitle}>Job Details</h2>
                <div className={styles.actions}>
                  <div
                    className={styles.favorite}
                    onClick={user && advertisement ? () => addToFavorite(user._id, advertisement?._id) : confirmAuth}
                  >
                    {advertisement && favorite.map((obj) => obj._id).includes(advertisement?._id) ? (
                      <>
                        <FavoriteIcon /> Favorites
                      </>
                    ) : (
                      <>
                        <BookmarkIcon /> Save to my list
                      </>
                    )}
                  </div>
                  <div className={styles.shape}>
                    <img src='/Shape.svg' alt='shape' />
                    Share
                  </div>
                </div>
              </div>

              <div className={styles.aplly} id={styles.apllyTop}>
                <Button variant='fill' size='medium' color='dark-blue' onClick={() => dispatch(handleModal(true))}>
                  Apply now
                </Button>
                <div className={styles.rating}>
                  <Paragraph size='add'>
                    Ratings left:
                    {advertisement?.rating.count}
                  </Paragraph>
                  <Raiting rating={advertisement?.rating.value || 0} advertisement={advertisement?._id} />
                </div>
              </div>
              <div className={styles.subheader}>
                <div className={styles.title}>
                  <Paragraph size='large'>{advertisement?.title}</Paragraph>
                </div>
                <div className={styles.salary}>
                  <Paragraph size='large'>€{advertisement?.salary}</Paragraph>
                </div>
              </div>
              <Paragraph size='small'>
                Posted
                {advertisement?.createdAt[0].substring(0, 10)}
              </Paragraph>
              <br />
              <Paragraph size='medium'>{advertisement?.description}</Paragraph>

              <h3>Responsebility</h3>

              <Paragraph size='medium'>
                Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently
                recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an
                opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
              </Paragraph>
              <br />
              <Paragraph size='medium'>
                Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently
                recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an
                opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
              </Paragraph>
              <br />
              <Paragraph size='medium'>
                Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently
                recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. This is an
                opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
              </Paragraph>

              <h3>Compensation & Benefits:</h3>

              <Paragraph size='medium'>Our physicians enjoy a wide range of benefits, including:</Paragraph>
              <ul className={styles.list}>
                <li>
                  <Paragraph size='medium'>Very competitive compensation package with bonuses</Paragraph>
                </li>
                <li>
                  <Paragraph size='medium'>Medical, Dental, and Vision Insurance</Paragraph>
                </li>
                <li>
                  <Paragraph size='medium'>Occurrence-based Malpractice Coverage</Paragraph>
                </li>
                <li>
                  <Paragraph size='medium'>Short-term and Long-term Disability Insurance and life insurance</Paragraph>
                </li>
              </ul>

              <div className={styles.aplly}>
                <Button variant='fill' size='medium' color='dark-blue' onClick={() => dispatch(handleModal(true))}>
                  Apply now
                </Button>
              </div>

              <h2 className={styles.subtitle}>Aditional info</h2>

              <Paragraph size='medium'>Empoyment type</Paragraph>
              <div className={styles.btns}>
                {advertisement?.employment_type.map((item, i: number) => (
                  <Button size='large' variant='outline' color='light-blue' key={i}>
                    {item}
                  </Button>
                ))}
              </div>

              <Paragraph size='medium'>Benefits</Paragraph>

              <div className={styles.btns}>
                {advertisement?.employment_type.map((item, i: number) => (
                  <Button size='large' variant='outline' color='light-gold' key={i}>
                    {item}
                  </Button>
                ))}
              </div>

              <h2 className={styles.subtitle}>Attached Image</h2>
              <div className={styles.image}>
                {advertisement?.pictures.map((item, i: number) => (
                  <img src={item} alt='img' key={i} />
                ))}
              </div>

              <Link to={HOME_ROUTE}>
                <Button
                  size='large'
                  variant='outline'
                  color='light-blue'
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                  }}
                >
                  <img src='/Arrowleft.svg' alt='back' /> HOME
                </Button>
              </Link>
            </div>
            <div className={styles.media}>
              <GoogleMap lat={advertisement?.location.lat} lng={advertisement?.location.long} />
            </div>
          </div>
        </div>
      </div>
      <Modal open={showModal}>
        <ApplyLayout
          initialValues={ApllyInitialValues}
          validationSchema={ApllyValidation}
          handlerSubmit={(body: Contact) => postContacts(body)}
          advertisement={advertisement?._id}
        />
      </Modal>
    </>
  )
}

export default FullAdverstening
