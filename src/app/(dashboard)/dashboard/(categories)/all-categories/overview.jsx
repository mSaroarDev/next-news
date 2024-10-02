"use client";
import CategoryCard from "@/components/CategoryCard";
import { fetchCategories } from "@/features/category/categorySlice";
import { H5 } from "@/subcomponents/Headings";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryPage = () => {
  // redux
  const dispatch = useDispatch();
  const allCategory = useSelector((state) => state.categories);
  const { categoriesData } = allCategory;

  // call functions
  useEffect(() => {
    dispatch(fetchCategories())
  }, []);
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "30px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-brand/20 rounded-xl p-5"
      >
        {/* titel and search */}
        <div className="pb-5 border-b border-brand/20 px-5 flex items-center justify-between">
          <H5 text={"All Categories"} />

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

        <div className="mt-5 grid grid-cols-12 gap-5">
          {categoriesData &&
            categoriesData.map((item, i) => (
              <CategoryCard key={i} data={item} />
            ))}
        </div>
      </motion.div>
    </>
  );
};

export default CategoryPage;
