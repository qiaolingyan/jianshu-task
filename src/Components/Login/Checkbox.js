import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import React from 'react'

function Checkbox ({ label, ...props }) {
  const [field, meta, helper] = useField(props)
  const { value } = meta
  const { setValue } = helper
  const handleChange = () => {
    const set = new Set(value)
    if (set.has(props.value)) {
      set.delete(props.value)
    } else {
      set.add(props.value)
    }
    setValue([...set])
  }
  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" checked={value.includes(props.value)} {...props} onChange={handleChange} />{label}
      </label>
    </div>
  )
}

export default Checkbox