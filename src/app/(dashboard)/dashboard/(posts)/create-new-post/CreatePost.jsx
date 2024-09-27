"use client";
import LastPost from "@/components/Lastpost";
import OverviewCard from "@/components/OverviewCard";
import { Form, Input, Label, Select, Texarea } from "@/subcomponents/Forms";
import { H5, H6 } from "@/subcomponents/Headings";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import { Tags } from "./Tags";

// dummy tags
const tags = ['world', 'bangladesh', 'politics', "international"]

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
        <H5 text={"Add New Post"} className="text-lg font-bold" />

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
                <Label text={"Content"} />
                <Texarea />
              </div>

            </div>

            {/* sidebar items */}
            <div className="col-span-12 md:col-span-3">
                {/* publish */}
                <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                    <H6 text={"Publish"} className="text-base font-bold border-b border-brand/20 pb-2" />
                    <div className="py-2">
                        <p className="text-sm text-gray">Status: not Saved</p>
                        <p className="text-sm text-gray">Visibility: Public</p>
                        <p className="text-sm text-gray">Publish: Immidiately</p>
                    </div>
                    <button className="button-dark w-full mt-2 rounded-none">Publish</button>
                </div>

                {/* category */}
                <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                    <H6 text={"Category"} className="text-base font-bold border-b border-brand/20 pb-2" />
                    <div className="py-2">
                        <Select>
                            <option value="">Select Category</option>
                            <option value="">Select Category</option>
                            <option value="">Select Category</option>
                            <option value="">Select Category</option>
                            <option value="">Select Category</option>
                        </Select>
                    </div>
                </div>

                {/* featured image */}
                <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                    <H6 text={"Featured Image"} className="text-base font-bold border-b border-brand/20 pb-2" />
                    <div className="py-2">
                        <div className="border border-dashed border-brand/40 w-full h-[150px] flex flex-col gap-1 items-center justify-center">
                            <Upload className="w-5 h-5" />
                            <p className="text-sm mt-2">Upload Photo</p>
                        </div>
                    </div>
                </div>

                {/* tags */}
                <div className="w-full border border-brand/20 px-4 py-2 mb-5">
                    <H6 text={"Tags"} className="text-base font-bold border-b border-brand/20 pb-2" />
                    <div className="py-2">
                        <div className="flex items-center gap-1">
                            <Input />
                            <button className="bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-1.5 -mt-1.5">Add</button>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-1">
                            {tags?.map((item, i)=> <Tags key={i} text={item} />)}
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
