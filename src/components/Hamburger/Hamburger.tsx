import React from "react";
import { Link } from "react-router-dom";
import { authMenuRoutes, menuRoutes, Route } from "../../routes";
import { CSSTransition } from "react-transition-group";

import styles from "./Hamburger.module.scss";
import { HamburgerProps } from "./Hamburger.props";
import { useAppDispatch, useAppSelector } from "../../hooks/useContextHooks";
import Button from "../Button/Button";
import { HOME_ROUTE } from "../../utils/constants";
import { logout } from "../../redux/slice/UserSlice/UserSlice";

const Hamburger = () => {
	const isAuth = useAppSelector(store => store.user.token);

	const dispatch = useAppDispatch();

	const [activeHamburger, setActiveHamburger] = React.useState(false);

	const handlerHamburger = () => {
		setActiveHamburger(!activeHamburger);
	};

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.hamburger} onClick={handlerHamburger}>
					<div>
						<h2>Menu</h2>
					</div>
					<div>
						{activeHamburger ? (
							<i style={{ color: "black", fontSize: "30px" }} className="material-icons" onClick={handlerHamburger}>
								close
							</i>
						) : (
							<i style={{ fontSize: "30px", color: "black" }} className="large material-icons">
								format_align_justify
							</i>
						)}
					</div>
				</div>
				<CSSTransition in={activeHamburger} classNames="menu" timeout={400} unmountOnExit>
					<ul className={styles.content}>
						<Link to={HOME_ROUTE}>
							<li>Home</li>
						</Link>
						{!isAuth &&
							menuRoutes.slice(1, menuRoutes.length).map((route: Route, i: number) => (
								<div key={i}>
									<Link to={route.path}>
										<li>{route.name}</li>
									</Link>
								</div>
							))}
						{isAuth &&
							authMenuRoutes.slice(1, menuRoutes.length).map((route: Route, i: number) => (
								<div key={i}>
									<Link to={route.path}>
										<li>{route.name}</li>
									</Link>
								</div>
							))}
						{isAuth && (
							<li className={styles.exit} onClick={() => dispatch(logout())}>
								Exit
							</li>
						)}
					</ul>
				</CSSTransition>
			</div>
		</div>
	);
};

export default Hamburger;
