"use client";
import NewsCard from "@/components/NewsCard";
import CommonTitle from "@/subcomponents/CommonTitle";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const CategoryPage = ({ id }) => {
  // redux store
  const { publicCategoriesData } = useSelector(
    (state) => state.publicCategories
  );
  const thisCategory = publicCategoriesData?.filter(
    (category) => category?._id === id
  );

  //   this category posts
  const { publicPostsData } = useSelector((state) => state.publicPosts);

  const thisCategoryPosts = publicPostsData?.filter(
    (post) => post?.category?._id === id
  );

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-5"
      >
        <CommonTitle
          text={`Recet News from ` + ` ` + `"${thisCategory[0]?.categoryName}"`}
        />

        <div className="grid grid-cols-12 gap-5 mt-10">
          {thisCategoryPosts &&
            thisCategoryPosts?.map((post) => (
              <NewsCard key={post?._id} data={post} />
            ))}
        </div>
      </motion.main>
    </>
  );
};

export default CategoryPage;
