import React from "react"

import styles from "./AdvertismentLayout.module.scss"
import { AdvertismentLayoutprops } from "./AdvertismentLayout.props"

const AdveetismentLayout: React.FC<AdvertismentLayoutprops> = ({ children }) => (
  <div className={styles.root}>{children}</div>
)

export default AdveetismentLayout
