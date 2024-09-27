"use client";
import { Form, Input, Label } from "@/subcomponents/Forms";
import { H5 } from "@/subcomponents/Headings";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";

const ProfileCom = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "30px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <H5 text={"My Profile"} className="text-lg font-bold" />

      {/* profile update */}
      <Form className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-2">
            <div className="w-[150px] h-[150px] border border-dashed border-brand flex flex-col items-center justify-center">
              <Upload className="w-5 h-5" />
              <p className="text-sm mt-2">Upload Photo</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-5">
            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Name"} />
              <Input />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"DOB"} />
              <Input />
            </div>

            <div className="w-full col-span-12">
              <Label text={"Address"} />
              <Input />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Mobile"} />
              <Input />
            </div>

            <div className="w-full col-span-12 md:col-span-6">
              <Label text={"Email"} />
              <Input />
            </div>
          </div>
        </div>

        <div align="right" className="mt-5">
          <button className="w-fit button-dark me-auto">Update</button>
        </div>
      </Form>
    </motion.div>
  );
};

export default ProfileCom;
