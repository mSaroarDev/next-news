"use client";
import BackButton from "@/components/BackButton";
import { addCategory, setCategories } from "@/features/category/categorySlice";
import { createCategory, editCategory } from "@/libs/category";
import { createNotification } from "@/libs/notification";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { Form, Input, Label, Texarea } from "@/subcomponents/Forms";
import { H5, H6 } from "@/subcomponents/Headings";
import { showError, showSuccess } from "@/utils/toaster";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleButton from "react-toggle-button";

const CreateCategory = ({ type, id }) => {
  // utils
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // redux store
  const currUser = useSelector((state) => state.currUser);
  const { userData } = currUser;

  const categories = useSelector((state) => state.categories);
  const { categoriesData } = categories;
  const filteredCategory = categoriesData.filter((item) => item?._id === id)[0];

  // create notification
  const handleNotification = async (category) => {
    await createNotification({
      type: "category create",
      created_by: userData?.name,
      text: `${
        type === "edit"
          ? "updated a category"
          : `created a category named "${category}"`
      }`,
    });
  };

  // featured or not
  const [featured, setFeatured] = useState(
    type === "edit" ? filteredCategory?.isFeatured : false
  );
  const handleFeatured = () => {
    setFeatured((prev) => {
      const newValue = !prev;
      formik.setFieldValue("isFeatured", newValue);
      return newValue;
    });
  };

  // formik
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      description: "",
      isFeatured: featured,
      created_by: userData?.id,
    },

    onSubmit: async (values, { resetForm }) => {
      const { categoryName } = values;
      if (!categoryName) {
        return showError("Please input all field");
      }

      try {
        setLoading(true);
        const res =
          type === "edit"
            ? await editCategory(id, values)
            : await createCategory(values);

        if (res.ok) {
          showSuccess(
            `${type === "edit" ? "Category Updated" : "Category Created"}`
          );
          resetForm();

          router.push("/dashboard/all-categories");
          const categoryData = await res.json();
          handleNotification(categoryData?.data?.categoryName);

          // update store

          if (type === "edit") {
            return dispatch(
              addCategory(categoryData.data._id, categoryData.data)
            );
          } else {
            return dispatch(addCategory(categoryData.data));
          }
        } else {
          showError("Failed to Create Category");
        }
      } catch (error) {
        console.log("error", error);
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (type === "edit") {
      formik.setValues({
        categoryName: filteredCategory?.categoryName,
        description: filteredCategory?.description,
        isFeatured: filteredCategory?.isFeatured,
      });
    }
  }, [id]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        // className="grid grid-cols-12 gap-2 h-fit"
      >
        <BackButton />
        {/* main form */}
        <H5
          text={`${type == "edit" ? "Edit Category" : "Create New Category"} `}
          className="text-lg font-bold"
        />

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

              <div className="w-full col-span-12">
                <Label text={"Featured?"} />
                <ToggleButton value={featured} onToggle={handleFeatured} />
              </div>

              <p className="w-full col-span-12">
                {featured
                  ? "This will be show on homepage categories list"
                  : "This will not be show on homepage categories list"}
              </p>
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
