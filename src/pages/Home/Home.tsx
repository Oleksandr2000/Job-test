import React from "react";
import Advertisment from "../../components/Advertisment/Advertisment";
import Pagination from "../../components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import AdveetismentLayout from "../../layouts/AdvertisementLayout/AdvertismentLayout";
import { Adverstaning } from "../../redux/slice/AdverstaningSlice/AdverstaningSlice.props";
import { fetchAdverstening, getFavorites } from "../../redux/slice/AdverstaningSlice/AdversteningSlice";

import styles from "./Home.module.scss";

const Home = () => {
	const { data, activePage, count } = useAppSelector(store => store.adverstaning);
	const { user } = useAppSelector(store => store.user);

	const isLoading = useAppSelector(store => store.adverstaning.status) === "loading";

	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchAdverstening({ count, activePage }));
	}, [activePage]);

	React.useEffect(() => {
		dispatch(getFavorites(user?._id));
	}, [user]);

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
				<AdveetismentLayout>
					{data.map((obj: Adverstaning) => (
						<Advertisment {...obj} key={obj._id} />
					))}
				</AdveetismentLayout>

				<Pagination />
			</div>
		</div>
	);
};

export default Home;
