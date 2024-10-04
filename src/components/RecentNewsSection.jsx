"use client";
import CommonTitle from "@/subcomponents/CommonTitle";
import NewsCard from "./NewsCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

const RecentNewsSection = () => {
  const { ref: recentNews, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // get posts
  const {publicPostsData} = useSelector((state)=> state.publicPosts);
  const posts = publicPostsData?.slice(5, 17);

  return (
    <>
      {/* recent news */}
      <motion.main
        id={recentNews}
        ref={recentNews}
        initial={{ opacity: 0, y: "100px" }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <CommonTitle text="Recent News" />
        <div className="grid grid-cols-12 gap-5 py-14">
          {posts && posts?.map((post)=> <NewsCard key={post?._id} data={post} />)}
        </div>
      </motion.main>
    </>
  );
};

export default RecentNewsSection;
