"use client";
import { Form, Input, Label } from "@/subcomponents/Forms";
import { H5 } from "@/subcomponents/Headings";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { CldUploadButton } from "next-cloudinary";
import { showError, showSuccess } from "@/utils/toaster";
import { useDispatch, useSelector } from "react-redux";
import ButtonSpinner from "@/subcomponents/Button Spinner/ButtonSpinner";
import { updateProfile } from "@/libs/user";
import { setCurrUser } from "@/features/user/currUserSlice";

const ProfileCom = ({ existUserData }) => {
  console.log(existUserData);
  
  // utils
  const [loading, setLoading] = useState(false);

  // redux store
  const existingUserState = useSelector((state) => state.currUser);
  const { userData } = existingUserState;
  const dispatch = useDispatch();

  // fill with existing data
  useEffect(() => {
    formik.setValues({
      name: userData?.name,
      designation: userData?.designation,
      address: userData?.address,
      mobile: userData?.mobile,
      email: userData?.email,
      image: userData?.image,
    });

    setImage(userData?.image);
  }, [userData]);

  // cloudinary
  const [image, setImage] = useState(null);
  const handleImageUpload = function (result) {
    const info = result?.info;
    console.log("info", info);

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
      name: "",
      designation: "",
      address: "",
      mobile: "",
      email: "",
      image: "",
    },
    onSubmit: async (values) => {
      const { name, designation, address, mobile, email, image } = values;
      if (!name || !designation || !address || !mobile || !email || !image) {
        return showError("All Fields Must be Filled");
      }

      try {
        setLoading(true);
        const res = await updateProfile(userData?.id, values);

        if (res.ok) {
          showSuccess("Profile Updated");

          const data = await res.json();
          // update store
          dispatch(setCurrUser(data?.data));
        } else {
          showError("Profile Update Failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: "30px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <H5 text={"My Profile"} className="text-lg font-bold" />

      {/* profile update */}
      <Form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <CldUploadButton
              className="col-span-12 md:col-span-2"
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              options={{
                sources: ["local", "google_drive"],
              }}
              onSuccess={handleImageUpload}
            >
              <div className="w-[150px] h-[150px] border border-dashed border-brand flex flex-col items-center justify-center">
                {image ? (
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="Image"
                  />
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    <p className="text-sm mt-2">Upload Photo</p>
                  </>
                )}
              </div>
            </CldUploadButton>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-5">
            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Name"} />
              <Input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Enter name"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Designation"} />
              <Input
                id="designation"
                name="designation"
                onChange={formik.handleChange}
                value={formik.values.designation}
                placeholder="Enter designation"
              />
            </div>

            <div className="w-full col-span-12">
              <Label text={"Address"} />
              <Input
                id="address"
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                placeholder="Enter address"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Mobile"} />
              <Input
                id="mobile"
                name="mobile"
                onChange={formik.handleChange}
                value={formik.values.mobile}
                placeholder="Enter mobile"
              />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Email"} />
              <Input
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter email"
              />
            </div>
          </div>
        </div>

        <div align="right" className="mt-5">
          {loading ? (
            <button
              type="submit"
              className="bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5 flex items-center justify-center gap-2 pointer-events-none"
            >
              <ButtonSpinner />
              <span>Updating! Please wait</span>
            </button>
          ) : (
            <button type="submit" className="w-fit button-dark me-auto">
              Update
            </button>
          )}
        </div>
      </Form>
    </motion.div>
  );
};

export default ProfileCom;
