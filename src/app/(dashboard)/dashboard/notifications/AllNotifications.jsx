"use client";
import { H5 } from "@/subcomponents/Headings";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import NotificationCard from "@/components/NotificationCard";
import { useDispatch, useSelector } from "react-redux";
import { setNotifications } from "@/features/notifications/notificationSlice";
import { getNotification } from "@/libs/notification";
import { useEffect } from "react";

const AllNotifications = () => {
  // redux store
  const dispatch = useDispatch();
  const notificationsState = useSelector((state) => state.notifications);
  const { notificationData } = notificationsState;

  // fetch notifications
  const getAllNotification = async () => {
    const res = await getNotification();
    if (res.msg === "success") {
      dispatch(setNotifications(res.data));
    }
  };

  useEffect(() => {
    getAllNotification();
  }, []);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-brand/20 rounded-xl p-5"
      >
        <div className="pb-5 border-b border-brand/20 px-5 flex items-center justify-between">
          <H5 text={"Notifications"} />

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
          {notificationData &&
            notificationData?.map((item, i) => (
              <NotificationCard key={i} data={item} />
            ))}
        </div>
      </motion.section>
    </>
  );
};

export default AllNotifications;
