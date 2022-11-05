import GoogleMapReact from "google-map-react"
import React from "react"

import styles from "./Map.module.scss"
import { MapProps } from "./Map.props"

function GoogleMap({ lat, lng }: MapProps) {
  return (
    <div className={styles.root}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(process.env.REACT_APP_GOOGLE_MAP_KEY) }}
        center={{
          lat,
          lng,
        }}
        defaultZoom={1}
        options={{
          ZoomControl: false,
          keyboardShortcuts: false,
          scrollWheel: false,
        }}
      />
    </div>
  )
}

export default GoogleMap
