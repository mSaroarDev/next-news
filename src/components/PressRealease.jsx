"use client";
import CommonTitle from "@/subcomponents/CommonTitle";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const PressRealease = () => {
  const { ref: pressRealease, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // get posts
  const {publicPostsData} = useSelector((state)=> state.publicPosts);
  const thisCategoryPosts = publicPostsData?.filter((post)=> post?.category?.categoryName === 'Press Release')
  const posts = thisCategoryPosts?.slice(0, 4);

  return (
    <>
      {/* press realease news */}
      <motion.main
        id={pressRealease}
        ref={pressRealease}
        initial={{ opacity: 0, y: "100px" }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <CommonTitle text="Press Realease" />
        <div className="grid grid-cols-12 gap-5 py-14">
          {posts && posts?.map((item)=> <NewsCard key={item?._id} data={item} />)}
        </div>
      </motion.main>
    </>
  );
};

export default PressRealease;
