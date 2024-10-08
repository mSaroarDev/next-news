"use client";
import { fetchPublicCategories } from "@/features/publicCategory/publicCategorySlice";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  // redux store
  const dispatch = useDispatch();

  const { publicCategoriesData } = useSelector(
    (state) => state.publicCategories
  );
  const featuredCategories = publicCategoriesData?.filter(
    (category) => category?.isFeatured === true
  );

  useEffect(() => {
    dispatch(fetchPublicCategories());
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:block border-y border-gray/30 mt-14"
      >
        <main className="text-center">
          <Link
            href={`/`}
            className="capitalize py-2.5 px-4 inline-block font-bold hover:bg-brand/10 transition-all duration-200"
          >
            Latest News
          </Link>
          {featuredCategories &&
            featuredCategories?.map((item, i) => (
              <Link
                key={i}
                href={`/categories/${item?._id}?category=${item.categoryName}`}
                className="capitalize py-2.5 px-4 inline-block font-bold hover:bg-brand/10 transition-all duration-200"
              >
                {item.categoryName}
              </Link>
            ))}
        </main>
      </motion.div>
    </>
  );
};

export default Categories;
