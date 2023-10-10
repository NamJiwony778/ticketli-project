import React from "react";
import { Field, ErrorMessage } from "formik";

interface props {
  label: string,
  name: string,
  type: string,
  className: string,
  component: string
}

const Input: React.FC<props> = (props) => {
    const {label, name, type, className,component} = props
return (
    <div className="form-group">
                  <label htmlFor={name}>{label}</label>
                  <Field name={name} type={type} className={className} />
                  <ErrorMessage
                    name={name}
                    component={component}
                    className="alert alert-danger"
                  />
    </div>
 )
}                

export default Input;