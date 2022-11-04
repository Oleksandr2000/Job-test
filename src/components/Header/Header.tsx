import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import { logout } from "../../redux/slice/UserSlice/UserSlice";
import { authMenuRoutes, menuRoutes, Route } from "../../routes";
import { FAVORITE_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "../../utils/constants";
import Button from "../Button/Button";

import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

const Header = () => {
	const isAuth = useAppSelector(store => store.user.token);

	const dispatch = useAppDispatch();

	return (
		<header className={styles.root}>
			<div className={styles.container}>
				<div className={styles.routes}>
					<div className={styles.routes}>
						<div className={styles.home}>
							<Link to={HOME_ROUTE}>
								<Button color="light-blue" size="medium" variant="outline">
									Home
								</Button>
							</Link>
						</div>
					</div>
					<div className={styles.flex}>
						{!isAuth &&
							menuRoutes.slice(1, menuRoutes.length).map((route: Route, i: number) => (
								<div key={i}>
									<Link to={route.path}>
										<Button color="light-blue" size="medium" variant="outline">
											{route.name}
										</Button>
									</Link>
								</div>
							))}
						{isAuth &&
							authMenuRoutes.slice(1, menuRoutes.length).map((route: Route, i: number) => (
								<div key={i}>
									<Link to={route.path}>
										<Button color="light-blue" size="medium" variant="outline">
											{route.name}
										</Button>
									</Link>
								</div>
							))}
						{isAuth && (
							<Button
								variant="fill"
								color="exit"
								size="medium"
								style={{ marginLeft: "10px" }}
								onClick={() => dispatch(logout())}>
								Exit
							</Button>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
