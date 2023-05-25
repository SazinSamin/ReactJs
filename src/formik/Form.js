import React from "react";
import { useFormik } from "formik";
import { object, string, number } from "yup";

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: object({
      name: string().min(5, "Name must have 5 characters").required(),
      email: string().email().required(),
      password: string().min(6, "Password at least 6 characters").required(),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
        </div>
        {formik.touched.name && formik.errors.name && (
          <span>{formik.errors.name}</span>
        )}
        <div>
          <label>Email: </label>
          <input
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
        </div>
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}
        <div>
          <label>Password: </label>
          <input
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
        </div>
        {formik.touched.password && formik.errors.password && (
          <span>{formik.errors.password}</span>
        )}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
