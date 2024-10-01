"use client";
import { addCategory, setCategories } from "@/features/category/categorySlice";
import { createCategory } from "@/libs/category";
import { createNotification } from "@/libs/notification";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { Form, Input, Label, Texarea } from "@/subcomponents/Forms";
import { H5, H6 } from "@/subcomponents/Headings";
import { showError, showSuccess } from "@/utils/toaster";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateCategory = () => {
  // utils
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // redux store
  const currUser = useSelector((state) => state.currUser);
  const { userData } = currUser;

  // create notification
  const handleNotification = async (category) => {
    await createNotification({
      type: "category create",
      created_by: userData?.name,
      text: `created a category named "${category}"`,
    });
  };

  // formik
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      description: "",
      created_by: userData?.id,
    },

    onSubmit: async (values, { resetForm }) => {
      const { categoryName } = values;
      if (!categoryName) {
        return showError("Please input all field");
      }

      try {
        setLoading(true);
        const res = await createCategory(values);

        if (res.ok) {
          showSuccess("Category Created");
          resetForm();

          router.push("/dashboard/all-categories");
          const categoryData = await res.json();
          handleNotification(categoryData?.data?.categoryName);
          // update store
          dispatch(addCategory(categoryData.data));
        } else {
          showError("Failed to Create Category");
        }
      } catch (error) {
        console.log("error", error)
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        // className="grid grid-cols-12 gap-2 h-fit"
      >
        {/* main form */}
        <H5 text={"Create New Category"} className="text-lg font-bold" />

        {/* profile update */}
        <Form onSubmit={formik.handleSubmit} className="mt-5">
          <div className="grid grid-cols-12 gap-5">
            {/* form */}
            <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-5 h-fit">
              <div className="w-full col-span-12">
                <Label text={"Category Name"} />
                <Input
                  id="categoryName"
                  name="categoryName"
                  onChange={formik.handleChange}
                  value={formik.values.categoryName}
                  placeholder={"Enter Category Name"}
                />
              </div>

              <div className="w-full col-span-12">
                <Label text={"Description"} />
                <Texarea
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>
            </div>

            {/* sidebar items */}
            <div className="col-span-12 md:col-span-3">
              {/* publish */}
              <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                <H6
                  text={"Publish"}
                  className="text-base font-bold border-b border-brand/20 pb-2"
                />
                <div className="py-2">
                  <p className="text-sm text-gray">Status: not Saved</p>
                  <p className="text-sm text-gray">Visibility: Public</p>
                  <p className="text-sm text-gray">Publish: Immidiately</p>
                </div>

                <div className="w-full mt-2">
                  {loading ? (
                    <button
                      type="submit"
                      className="w-full bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5 flex items-center justify-center gap-2 pointer-events-none"
                    >
                      <ButtonSpinner />
                      <span>Please wait...</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full button-dark me-auto"
                    >
                      Publish
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Form>
      </motion.div>
    </>
  );
};

export default CreateCategory;
