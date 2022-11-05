import cn from "classnames"
import React from "react"
import { toast } from "react-toastify"

import styles from "./Rating.module.scss"
import { RaitingProps } from "./Rating.props"
import { ReactComponent as StarIcon } from "./star.svg"

import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks"
import { postRating } from "../../redux/slice/AdverstaningSlice/AdversteningSlice"

function Raiting({ rating, advertisement, ...props }: RaitingProps) {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>([...Array(5)].fill(<></>))

  const { user } = useAppSelector((store) => store.user)
  const newRating = useAppSelector((store) => store.adverstaning.advertisement?.rating)
  const isEditeble = useAppSelector((store) => store.user.token)

  const dispatch = useAppDispatch()

  const uddatedRating = (current: number) => {
    const updatedArray = ratingArray.map((_, i: number) => (
      <StarIcon
        className={cn(styles.star, {
          [styles.filled]: i < current,
          [styles.editable]: isEditeble,
        })}
      />
    ))
    setRatingArray(updatedArray)
  }

  const confirmAuth = () => {
    toast.error("Sign in to your account")
  }

  const onClick = (rating: number) => {
    if (!isEditeble) {
      return
    }

    const body = {
      value: rating,
      user: user?._id,
      advertisement,
    }

    if (body) {
      dispatch(postRating(body))
    }
  }

  React.useEffect(() => {
    uddatedRating(rating)
  }, [])

  React.useEffect(() => {
    if (newRating) {
      uddatedRating(newRating.value)
    }
  }, [newRating])

  return (
    <div {...props}>
      {ratingArray.map((item: JSX.Element, i: number) => (
        <span key={i} onClick={user ? () => onClick(i + 1) : confirmAuth}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default Raiting
