"use client";
import { Form, Input, Label, Select, Texarea } from "@/subcomponents/Forms";
import { H5, H6 } from "@/subcomponents/Headings";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import { Tags } from "./Tags";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { CldUploadButton } from "next-cloudinary";
import { showError, showSuccess } from "@/utils/toaster";
import { createPosts, deletePosts, editPosts } from "@/libs/post";
import { createNotification } from "@/libs/notification";
import { addPost, deletePost, editPost } from "@/features/posts/postsSlice";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import BackButton from "@/components/BackButton";
import Swal from "sweetalert2";
import ToggleButton from "react-toggle-button";

const CreatePost = ({ type, id }) => {
  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // get user info from redux
  const { postsData } = useSelector((state) => state.posts);
  const { categoriesData } = useSelector((state) => state.categories);
  const { userData } = useSelector((state) => state.currUser);

  // this post
  const filteredPost = postsData?.filter((post) => post?._id === id);
  const thisPost = filteredPost[0];

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
  const handleNotification = async (post, actionType, msg, notification_on) => {
    await createNotification({
      type: actionType,
      created_by: userData?.name,
      text: msg + ` ` + `"${post}"`,
      notification_on
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

  // featured or not
  const [featured, setFeatured] = useState(type === 'edit' ? thisPost?.isFeatured : false);
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
      title: "",
      description: "",
      category: "",
      image: "",
      tags: tags,
      isFeatured: featured,
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
            ? await editPosts(id, values)
            : await createPosts(values);

        if (res.ok) {
          showSuccess(`${type === "edit" ? "Post Updated" : "Post Created"}`);
          resetForm();

          router.push("/dashboard/all-posts");
          const data = await res.json();
          handleNotification(
            data?.data?.title,
            type === "edit" ? "post edit" : "post create",
            type === "edit" ? "updated the post " : "Posted ",
            `/article/${data?.data?._id}?title=${data?.data?.title}&content=${data?.data?.seo}`
          );

          // update store
          if (type === "edit") {
            dispatch(editPost(data.data._id, data.data));
          } else {
            dispatch(addPost(data.data));
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

  // delete post
  const handleDeletePost = async () => {
    Swal.fire({
      title: "Do you want to Delete this post?",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Yes! Delete",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          const res = await deletePosts(id);
          if (res.ok) {
            setLoading(false);
            // update the state
            dispatch(deletePost(id));
            router.push("/dashboard/all-posts");
            showSuccess("Post deleted");

            // create notification
            const data = await res.json();
            handleNotification(
              data?.data?.title,
              "post delete",
              "deleted a post"
            );
          } else {
            showError("You are not eligible to perform this action");
          }
        } catch (error) {
          showError("Internal Server Error");
        } finally {
          setLoading(false);
        }
      }
    });
  };

  // set data if type is edit
  useEffect(() => {
    if (type === "edit") {
      formik.setValues({
        title: thisPost?.title,
        description: thisPost?.description,
        category: thisPost?.category?._id,
        image: thisPost?.image,
        tags: tags,
        isFeatured: thisPost?.isFeatured,
      });
      setImage(thisPost?.image);
      setTags(thisPost?.tags);
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
        {type === "edit" && <BackButton />}
        {/* main form */}
        <H5
          text={type === "edit" ? "Edit Post" : "Create New Post"}
          className="text-lg font-bold"
        />

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

              <div className="w-full col-span-12">
                <Label text={"Featured?"} />
                <ToggleButton value={featured} onToggle={handleFeatured} />
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
                    {type === "edit" ? "Update" : "Publish"}
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

              {/* delete */}
              {type === "edit" && (
                <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                  <H6
                    text={"Delete Post"}
                    className="text-base font-bold border-b border-brand/20 pb-2"
                  />
                  <div className="py-2">
                    {loading ? (
                      <button
                        type="button"
                        onClick={handleDeletePost}
                        className="bg-red-600 text-white rounded-md px-4 py-2 w-full hover:bg-red-600/20 hover:text-red-600 transition-all duration-200 flex items-center justify-center gap-3"
                      >
                        <ButtonSpinner />
                        <span>Deleting ...</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleDeletePost}
                        className="bg-red-600 text-white rounded-md px-4 py-2 w-full hover:bg-red-600/20 hover:text-red-600 transition-all duration-200"
                      >
                        Delete Post
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Form>
      </motion.div>
    </>
  );
};

export default CreatePost;
