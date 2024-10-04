"use client";
import PostRow from "@/components/PostRow";
import { H5 } from "@/subcomponents/Headings";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "@/features/posts/postsSlice";

const AllPosts = () => {
  // redux state
  const { postsData } = useSelector((state) => state.posts);
  const { userData } = useSelector((state) => state.currUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
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
          <H5 text={"All Posts"} />

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
          {postsData &&
            postsData?.map((item) => <PostRow key={item?._id} data={item} userData={userData} />)}
        </div>
      </motion.section>
    </>
  );
};

export default AllPosts;
