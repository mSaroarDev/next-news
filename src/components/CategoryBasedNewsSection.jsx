"use client";
import CommonTitle from "@/subcomponents/CommonTitle";
import CategoryNewsPost from "./CategoryNewsPost";
import FeaturedPostSmall from "./FeaturedPostSmall";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const CategoryBasedNewsSection = () => {
  const { ref: categoryBasedNews, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // redux store
  const { publicPostsData } = useSelector((state) => state.publicPosts);
  
  const bangladeshPosts = publicPostsData?.filter((post)=> post.category?.categoryName === "Bangladesh")
  const internationalPosts = publicPostsData?.filter((post)=> post.category?.categoryName === "International")
  
  return (
    <>
      {/* category based news */}
      <motion.main
        ref={categoryBasedNews}
        id={categoryBasedNews}
        initial={{ opacity: 0, y: "100px" }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-12 gap-5 py-14"
      >
        {/* bangladesh */}
        <div className="col-span-12 lg:col-span-6">
          <CommonTitle text="Bangladesh" />

          <div className="py-5 w-full flex flex-col gap-4 items-start justify-between">
            <CategoryNewsPost data={bangladeshPosts[0]} />

            {bangladeshPosts && bangladeshPosts.slice(1, 5).map((post)=> <FeaturedPostSmall key={post?._id} data={post} />)}
          </div>
        </div>

        {/* interntoional */}
        <div className="col-span-12 lg:col-span-6">
          <CommonTitle text="International" />

          <div className="py-5 w-full flex flex-col gap-4 items-start justify-between">
            <CategoryNewsPost data={internationalPosts[0]} />
            {internationalPosts && internationalPosts.slice(1, 5).map((post)=> <FeaturedPostSmall key={post?._id} data={post} />)}
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default CategoryBasedNewsSection;
