"use client";
import CommonTitle from "@/subcomponents/CommonTitle";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";
import { useInView } from "react-intersection-observer";

const PressRealease = () => {
  const { ref: pressRealease, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

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
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </motion.main>
    </>
  );
};

export default PressRealease;
