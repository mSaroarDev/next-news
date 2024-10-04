"use client";
import BreakingNews from "./BreakingNews";
import FeaturedPost from "./FeaturedPost";
import { motion } from "framer-motion";

const FeaturedSection = () => {
  
  return (
    <>
      {/* featured posts */}
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <main className="grid grid-cols-12 gap-5 py-7">
          <FeaturedPost heading={"Breaking News"}  />
          <BreakingNews heading={"Latest News"} />
        </main>
      </motion.div>
    </>
  );
};

export default FeaturedSection;
