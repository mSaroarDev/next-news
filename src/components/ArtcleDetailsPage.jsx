"use client";
import { H1, P } from "@/subcomponents/Headings";
import Navbar from "./Navbar";
import Categories from "./Categories";
import CommonTitle from "@/subcomponents/CommonTitle";
import { Form, Input, Texarea } from "@/subcomponents/Forms";
import Comments from "./Comments";
import FeaturedPostSmall from "./FeaturedPostSmall";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";
import { convertDateToCustomFormat } from "@/utils/convertDate";
import { useSelector } from "react-redux";

const ArtcleDetailsPage = ({ data }) => {
  // redux
  const { publicCategoriesData } = useSelector(
    (state) => state.publicCategories
  );
  const { publicPostsData } = useSelector((state) => state.publicPosts);
  const relatedData = publicPostsData?.filter(
    (post) => post?.category?.categoryName === data?.category?.categoryName
  );

  return (
    <>
      <Navbar />
      <Categories />

      <main className="grid grid-cols-12 gap-5 lg:gap-10 py-7">
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-12 lg:col-span-8"
        >
          <CommonTitle text={data?.category?.categoryName} />
          <H1
            className="text-2xl md:text-3xl lg:text-4xl font-bold my-4"
            text={data?.title}
          />
          <div className="py-2 border-b border-brand/20">
            Published at {convertDateToCustomFormat(data?.createdAt)}
          </div>

          <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden my-5">
            <img
              src={
                data?.image ||
                "https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
              }
              className="w-full h-full object-cover"
              alt={data?.title}
            />
          </div>

          <div className="p-5">
            <P className="leading-[30px] text-base" text={data?.description} />
          </div>

          <CommonTitle text="Tags" />
          <div className="flex items-center gap-2 my-5">
            {data?.tags?.map((item, i) => (
              <span
                key={i}
                className="bg-brand/30 text-black px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>

          {/* comments */}
          <div className="mt-7">
            <CommonTitle text="Comments" />
            <div className="mt-5">
              {/* comment box */}
              <Form>
                <Input placeholder="Enter Your Name" />
                <Texarea />
                <button
                  type="submit"
                  className="bg-black rounded px-5 py-2 text-white hover:text-black hover:bg-black/10 transition-all duration-200"
                >
                  Publish
                </button>
              </Form>

              {/* recent comments */}
              <div className="flex flex-col gap-2 mt-5">
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-12 lg:col-span-4"
        >
          <CommonTitle text="Related Articles" />
          <div className="my-5 flex flex-col gap-1">
            {relatedData &&
              relatedData
                ?.slice(0, 6)
                ?.map((item) => (
                  <FeaturedPostSmall key={item?._id} data={item} />
                ))}
          </div>

          {/* categories */}
          <CommonTitle text="Categories" />
          <div className="py-5 flex flex-col">
            {publicCategoriesData &&
              publicCategoriesData?.map((item) => (
                <Link
                  href={`/categories/${item?._id}?category=${item.categoryName}`}
                  className="categori-list"
                >
                  <ChevronsRight className="w-4 h-4" />
                  <span>{item?.categoryName}</span>
                </Link>
              ))}
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default ArtcleDetailsPage;
