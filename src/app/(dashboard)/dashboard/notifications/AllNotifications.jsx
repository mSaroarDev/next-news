"use client";
import { H5 } from "@/subcomponents/Headings";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Comments from "@/components/Comments";
import NotificationCard from "@/components/NotificationCard";

const AllNotifications = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-brand/20 rounded-xl p-5"
      >
        <div className="pb-5 border-b border-brand/20 px-5 flex items-center justify-between">
          <H5 text={"All Comments"} />

          {/* search bar */}
          <div className="flex items-center border-2 border-brand/20 rounded-lg px-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Search className="w-4 h-4 text-brand" />
            </div>
            <input
              className="p-2 focus:outline-0"
              placeholder="Search Here..."
            />
          </div>
        </div>

        {/* main contents */}
        <div className="mt-5">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </motion.section>
    </>
  );
};

export default AllNotifications;
