"use client";
import { Form, Input, Label, Select, Texarea } from "@/subcomponents/Forms";
import { H5, H6 } from "@/subcomponents/Headings";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { Tags } from "./Tags";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { CldUploadButton } from "next-cloudinary";
import { showError, showSuccess } from "@/utils/toaster";
import { editCategory } from "@/libs/category";
import { createPosts } from "@/libs/post";
import { createNotification } from "@/libs/notification";
import { addPost } from "@/features/posts/postsSlice";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";

const CreatePost = ({ type }) => {
  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // get user info from redux
  const categories = useSelector((state) => state.categories);
  const { categoriesData } = categories;

  const currUser = useSelector((state) => state.currUser);
  const { userData } = currUser;

  // tags state
  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState([]);
  const handleAddTags = (e) => {
    e.preventDefault();
    if (inputTag == "") {
      return showError("Please input related keywords");
    }

    const updatedTags = [...tags, inputTag];
    setTags(updatedTags);
    setInputTag("");
    formik.setFieldValue("tags", updatedTags);
  };

  const handleDeleteTags = (e, index) => {
    e.preventDefault();
    const remainingTags = tags.filter((_, i) => i !== index); // Use the index to filter the correct tag
    setTags(remainingTags);
    formik.setFieldValue("tags", remainingTags);
  };

  // create notification
  const handleNotification = async (post) => {
    await createNotification({
      type: "post create",
      created_by: userData?.name,
      text: `${
        type === "edit" ? "updated a post" : `created a post "${post}"`
      }`,
    });
  };

  // cloudinary image
  const [image, setImage] = useState(null);
  const handleImageUpload = function (result) {
    const info = result?.info;

    if ("secure_url" in info && "public_id" in info) {
      const public_id = info.public_id;
      const imgUrl = info.secure_url;
      // setPublicId(public_id);
      setImage(imgUrl);
      formik.setFieldValue("image", imgUrl);
      // formik.setFieldValue("image_public_id", public_id);
    }
  };

  // formik
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      image: "",
      tags: tags,
      created_by: userData?.id,
    },
    onSubmit: async (values, { resetForm }) => {
      const { title, description, category, image } = values;
      if (!title || !description || !category || !image) {
        return showError("Please input all field");
      }

      try {
        setLoading(true);
        const res =
          type === "edit"
            ? await editCategory(id, values)
            : await createPosts(values);

        if (res.ok) {
          showSuccess(`${type === "edit" ? "Post Updated" : "Post Created"}`);
          resetForm();

          router.push("/dashboard/all-posts");
          const data = await res.json();
          handleNotification(data?.data?.title);

          // update store
          if (type === "edit") {
            return dispatch(addPost(data.data._id, data.data));
          } else {
            return dispatch(addPost(data.data));
          }
        } else {
          showError("Failed");
        }
      } catch (error) {
        console.log("error", error);
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
        <H5 text={"Add New Post"} className="text-lg font-bold" />

        {/* profile update */}
        <Form onSubmit={formik.handleSubmit} className="mt-5">
          <div className="grid grid-cols-12 gap-5">
            {/* form */}
            <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-5 h-fit">
              <div className="w-full col-span-12">
                <Label text={"Title"} />
                <Input
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  placeholder="Title"
                />
              </div>

              <div className="w-full col-span-12">
                <Label text={"Content"} />
                <Texarea
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  placeholder="Post Content"
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
                {loading ? (
                  <button
                    type="submit"
                    className="w-full bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5 flex items-center justify-center gap-2 pointer-events-none"
                  >
                    <ButtonSpinner />
                    <span>Posting...</span>
                  </button>
                ) : (
                  <button type="submit" className="w-full button-dark me-auto">
                    Publish
                  </button>
                )}
              </div>

              {/* category */}
              <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                <H6
                  text={"Category"}
                  className="text-base font-bold border-b border-brand/20 pb-2"
                />
                <div className="py-2">
                  <Select
                    id="category"
                    name="category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                  >
                    <option value="">Select Category</option>
                    {categoriesData &&
                      categoriesData?.map((item, i) => (
                        <option key={i} value={item?._id}>
                          {item?.categoryName}
                        </option>
                      ))}
                  </Select>
                </div>
              </div>

              {/* featured image */}
              <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                <H6
                  text={"Featured Image"}
                  className="text-base font-bold border-b border-brand/20 pb-2"
                />
                <div className="py-2">
                  <CldUploadButton
                    className="border border-dashed border-brand/40 w-full h-[150px] flex flex-col gap-1 items-center justify-center"
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                    }
                    options={{
                      sources: ["local", "google_drive"],
                    }}
                    onSuccess={handleImageUpload}
                  >
                    <div className="grid place-items-center">
                      {image ? (
                        <img
                          src={image}
                          className="w-full h-full object-cover"
                          alt="Image"
                        />
                      ) : (
                        <>
                          <Image className="w-5 h-5" />
                          <p className="text-sm mt-2">Click to Upload</p>
                        </>
                      )}
                    </div>
                  </CldUploadButton>
                </div>
              </div>

              {/* tags */}
              <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                <H6
                  text={"Tags"}
                  className="text-base font-bold border-b border-brand/20 pb-2"
                />
                <div className="py-2">
                  <div className="flex items-center gap-1">
                    <Input
                      onChange={(e) => setInputTag(e.target.value)}
                      value={inputTag}
                    />
                    <button
                      type="button"
                      onClick={handleAddTags}
                      className="bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5 -mt-1.5"
                    >
                      Add
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-1">
                    {tags?.map((item, i) => (
                      <Tags
                        key={i}
                        text={item}
                        handleDeleteTags={handleDeleteTags}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </motion.div>
    </>
  );
};

export default CreatePost;
