"use client";
import { useInView } from "react-intersection-observer";
import BreakingNews from "./BreakingNews";
import FeaturedPost from "./FeaturedPost";
import { motion } from "framer-motion";

const SportsAndEntertainmentSection = () => {
  const { ref: sportsAndEntertainment, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <>
      {/* sports */}
      <motion.main
        initial={{ opacity: 0, y: "100px" }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        ref={sportsAndEntertainment}
        id={sportsAndEntertainment}
        className="grid grid-cols-12 gap-5 py-14"
      >
        <BreakingNews category="Sports" heading="Sports" />
        <FeaturedPost category="Entertainment" heading="Entertainment" />
      </motion.main>
    </>
  );
};

export default SportsAndEntertainmentSection;
