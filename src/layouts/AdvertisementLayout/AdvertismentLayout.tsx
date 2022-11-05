import React from "react"

import styles from "./AdvertismentLayout.module.scss"
import { AdvertismentLayoutprops } from "./AdvertismentLayout.props"

function AdveetismentLayout({ children }: AdvertismentLayoutprops) {
  return <div className={styles.root}>{children}</div>
}

export default AdveetismentLayout
