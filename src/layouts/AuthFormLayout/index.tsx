import { useFormik } from "formik"
import React from "react"
import { useNavigate } from "react-router"

import styles from "./AuthFormLayout.module.scss"
import { AuthFormLayoutProps } from "./AuthFormLayout.props"

import Button from "../../components/Button/Button"
import FormControl from "../../components/FormControl"
import { useAppDispatch } from "../../hooks/useContextHooks"

function AuthFormLayout({
  handlerSubmit,
  title,
  numberField = false,
  nameField = false,
  validationSchema,
  initialValues,
}: AuthFormLayoutProps) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const AuthForm = useFormik({
    initialValues,
    validationSchema,

    onSubmit(values): any {
      if (values) {
        dispatch(handlerSubmit(values))
      }
      AuthForm.resetForm()
      navigate("/")
    },
  })

  return (
    <div className={styles.root}>
      <form onSubmit={AuthForm.handleSubmit}>
        <h2>{title}</h2>
        <FormControl
          id='email'
          variant='small'
          type='text'
          label='E-mail'
          name='email'
          placeholder='Enter E-mail'
          value={AuthForm.values.email}
          handlerVlue={AuthForm.setFieldValue}
          onBlur={AuthForm.handleBlur}
          error={AuthForm.errors.email}
          touched={AuthForm.touched.email}
        />
        <FormControl
          id='password'
          variant='small'
          type='password'
          label='Password'
          name='password'
          placeholder='Enter password'
          value={AuthForm.values.password}
          handlerVlue={AuthForm.setFieldValue}
          onBlur={AuthForm.handleBlur}
          error={AuthForm.errors.password}
          touched={AuthForm.touched.password}
        />
        {numberField && (
          <FormControl
            id='name'
            variant='small'
            type='text'
            label='Name'
            name='name'
            placeholder='Enter name'
            value={AuthForm.values.name}
            handlerVlue={AuthForm.setFieldValue}
            onBlur={AuthForm.handleBlur}
            error={AuthForm.errors.name}
            touched={AuthForm.touched.name}
          />
        )}
        {nameField && (
          <FormControl
            id='number'
            variant='small'
            type='text'
            label='Number'
            name='number'
            placeholder='Enter number'
            value={AuthForm.values.number}
            handlerVlue={AuthForm.setFieldValue}
            onBlur={AuthForm.handleBlur}
            error={AuthForm.errors.number}
            touched={AuthForm.touched.number}
          />
        )}
        <Button color='dark-blue' variant='fill' size='large' type='submit'>
          Enter
        </Button>
      </form>
    </div>
  )
}

export default AuthFormLayout
