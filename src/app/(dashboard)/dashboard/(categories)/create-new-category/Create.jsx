"use client";
import { Form, Input, Label, Texarea } from "@/subcomponents/Forms";
import { H5, H6 } from "@/subcomponents/Headings";
import { motion } from "framer-motion";

// dummy tags
const tags = ["world", "bangladesh", "politics", "international"];

const CreatePost = () => {
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
        <Form className="mt-5">
          <div className="grid grid-cols-12 gap-5">
            {/* form */}
            <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-5 h-fit">
              <div className="w-full col-span-12">
                <Label text={"Title"} />
                <Input />
              </div>

              <div className="w-full col-span-12">
                <Label text={"Description"} />
                <Texarea />
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
                <button className="button-dark w-full mt-2 rounded-none">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </Form>
      </motion.div>
    </>
  );
};

export default CreatePost;
