import React from "react"
import { useLocation } from "react-router"

import styles from "./Auth.module.scss"

import AuthFormLayout from "../../layouts/AuthFormLayout"
import {
  AuthInitialValues,
  AuthValidation,
  RegistryInitialValues,
  RegistryValidation,
} from "../../layouts/AuthFormLayout/constants"
import { fetchLogin, fetchRegistration } from "../../redux/slice/UserSlice/UserSlice"

function Auth() {
  const { pathname } = useLocation()

  const authlocation = pathname === "/login"
  const registrationlocation = pathname === "/register"

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {registrationlocation && (
          <AuthFormLayout
            initialValues={RegistryInitialValues}
            validationSchema={RegistryValidation}
            title='Registration'
            nameField
            numberField
            handlerSubmit={(body) => fetchRegistration(body)}
          />
        )}
        {authlocation && (
          <AuthFormLayout
            initialValues={AuthInitialValues}
            validationSchema={AuthValidation}
            title='Auth'
            handlerSubmit={(body) => fetchLogin(body)}
          />
        )}
      </div>
    </div>
  )
}

export default Auth
