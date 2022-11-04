import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import { getFavorites, postFavorite } from "../../redux/slice/AdverstaningSlice/AdversteningSlice";
import { ADVERTISMENT_ROUTE } from "../../utils/constants";
import Paragraph from "../Paragraph/Paragraph";
import Raiting from "../Rating/Rating";
import { AdvertismentProps } from "./Advertisment.props";
import { ReactComponent as BookmarkIcon } from "./Bookmark.svg";
import { ReactComponent as FavoriteIcon } from "./Favorite.svg";
import styles from "./Advertisment.module.scss";

const Advertisment = ({ _id, title, name, createdAt, pictures, rating }: AdvertismentProps) => {
	const { user } = useAppSelector(store => store.user);
	const { favorite, statusPost } = useAppSelector(store => store.adverstaning);

	const dispatch = useAppDispatch();

	const addToFavorite = async (user: string, advertisement: string) => {
		const body = {
			user,
			advertisement,
		};

		await dispatch(postFavorite(body));

		await dispatch(getFavorites(user));
	};

	const confirmAuth = () => {
		toast.error("Sign in to your account");
	};

	return (
		<div className={styles.root}>
			<div className={styles.image}>
				<img src={pictures[0]} alt="img" />
			</div>
			<div className={styles.info}>
				<Paragraph size="large">
					<Link to={`${ADVERTISMENT_ROUTE}/:${_id}`}>{title}</Link>
				</Paragraph>

				<Paragraph size="small">{name}</Paragraph>

				<Paragraph size="small">Vienna, Austria</Paragraph>
			</div>
			<div className={styles.favorite} onClick={user ? () => addToFavorite(user._id, _id) : confirmAuth}>
				{favorite.map(obj => obj._id).includes(_id) ? <FavoriteIcon /> : <BookmarkIcon />}
			</div>

			<div className={styles.created}>
				<Paragraph size="small">Published {createdAt[0].substring(0, 10)}</Paragraph>
			</div>
		</div>
	);
};

export default Advertisment;
