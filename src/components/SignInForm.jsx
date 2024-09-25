"use client";
import { Form, Input } from "@/subcomponents/Forms";
import { useFormik } from "formik";

const SignInForm = () => {
  // formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="w-full my-5 text-center">
        <Input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          placeholder="Enter Email"
        />
        <Input
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          placeholder="******"
        />
        <button
          type="submit"
          className="bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5"
        >
          Sign In
        </button>
      </Form>
    </>
  );
};

export default SignInForm;
