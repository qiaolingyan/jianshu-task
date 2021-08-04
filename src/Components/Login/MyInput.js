import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { LockOutlined } from '@ant-design/icons';

function MyInput ({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <>
      <div className="password-wrap">
        <label htmlFor={props.id}>{label}</label>
        <LockOutlined className="site-form-item-icon" />
        <input {...field} {...props} />
      </div>
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </>
  )
}

export default MyInput