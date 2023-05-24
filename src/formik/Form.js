import React from "react";
import { useFormik } from "formik";

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: "Put your name",
      email: "___@gmail.com",
      password: "***",
    },
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
        <div>
          <label>Email: </label>
          <input
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
        </div>
        <div>
          <label>Password: </label>
          <input
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
