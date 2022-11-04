import React from "react";
import { AdvertismentLayoutprops } from "./AdvertismentLayout.props";

import styles from "./AdvertismentLayout.module.scss";

const AdveetismentLayout: React.FC<AdvertismentLayoutprops> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default AdveetismentLayout;
