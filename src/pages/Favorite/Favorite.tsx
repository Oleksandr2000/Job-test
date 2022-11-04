import React from "react";
import Advertisment from "../../components/Advertisment/Advertisment";
import Pagination from "../../components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import AdveetismentLayout from "../../layouts/AdvertisementLayout/AdvertismentLayout";
import { Adverstaning } from "../../redux/slice/AdverstaningSlice/AdverstaningSlice.props";
import { fetchAdverstening, getFavorites } from "../../redux/slice/AdverstaningSlice/AdversteningSlice";

import styles from "./Favorite.module.scss";

const Home = () => {
	const { favorite } = useAppSelector(store => store.adverstaning);
	const { user } = useAppSelector(store => store.user);

	const isLoading = useAppSelector(store => store.adverstaning.status) === "loading";

	if (!user) {
		return (
			<h1
				style={{
					textAlign: "center",
					marginTop: "100px",
					color: "#383838",
				}}>
				Sign in your acount.
			</h1>
		);
	}

	if (isLoading) {
		return (
			<div className={styles.loading}>
				<img src="/Fullpageloader.svg" alt="loading..." />
			</div>
		);
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
			</div>
		</div>
	);
};

export default Home;
