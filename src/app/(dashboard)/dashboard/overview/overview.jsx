"use client";
import LastPost from "@/components/Lastpost";
import OverviewCard from "@/components/OverviewCard";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-12 gap-2 h-fit"
      >
        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-2">
          <OverviewCard />
          <OverviewCard />
          <OverviewCard />
        </div>
        <div className="col-span-12 lg:col-span-4">
          {/* last post */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-1 box-shadow rounded-md">
            <LastPost />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Overview;
