import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles, {Form, Input, Button} from './styles';

export default function Contact() {
    const handleClick = (e) => {
        e.preventDefault();
    
        // setVideoOpen(true);
      }

    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
        .email("Invalid Email address")
        .required("required"),
        message:Yup.string()
        .max(150, "Must be 150 characters or less")
        .required("Required")
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

    console.log(formik.touched)
    return (
        <form sx={styles.Form} onSubmit={formik.handleSubmit}>
            <div className="input-container">
                <input 
                    sx={styles.Input}
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder=" First Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName} </p> : null}
                    </div>
                     <div className="input-container">
                <input 
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    />
                     {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName} </p> : null}
                    </div>
                     <div className="input-container">
                <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email} </p> : null}
                    </div>
                    <div className="input-container">
                <input 
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    />
                    {formik.errors.message ? <p>{formik.errors.message} </p> : null}
                    </div>
                <button type="submit" sx={styles.Button}>Submit</button>
        </form>
    )
}