import React from "react";
import { RaitingProps } from "./Rating.props";
import styles from "./Rating.module.scss";
import { ReactComponent as StarIcon } from "./star.svg";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import { store } from "../../redux";
import { postRating } from "../../redux/slice/AdverstaningSlice/AdversteningSlice";

const Raiting = ({ rating, advertisement, ...props }: RaitingProps) => {
	const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>([...Array(5)].fill(<></>));
	const [ratingValue, setRatingValue] = React.useState(rating);

	const { user } = useAppSelector(store => store.user);
	const newRating = useAppSelector(store => store.adverstaning.advertisement?.rating);
	const isEditeble = useAppSelector(store => store.user.token);

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		uddatedRating(ratingValue);
	}, []);

	React.useEffect(() => {
		if (newRating) {
			uddatedRating(newRating.value);
		}
	}, [newRating]);

	const uddatedRating = (current: number) => {
		const updatedArray = ratingArray.map((rating: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < current,
						[styles.editable]: isEditeble,
					})}
				/>
			);
		});
		setRatingArray(updatedArray);
	};

	const onClick = (rating: number) => {
		if (!isEditeble) {
			return;
		}

		const body = {
			value: rating,
			user: user?._id,
			advertisement: advertisement,
		};

		console.log(rating);

		if (body) {
			dispatch(postRating(body));
		}
	};

	return (
		<div {...props}>
			{ratingArray.map((item: JSX.Element, i: number) => (
				<span key={i} onClick={() => onClick(i + 1)}>
					{item}
				</span>
			))}
		</div>
	);
};

export default Raiting;
