'use client';
import { categories } from "@/data/Categories";
import { motion } from "framer-motion";
import Link from "next/link";

const Categories = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:block border-y border-gray/30 mt-14"
      >
        <main className="text-center">
          {categories?.map((item, i) => (
            <Link
              key={i}
              href={`/categories/${item?.id}?category=${item.name}`}
              className="capitalize py-2.5 px-4 inline-block font-bold hover:bg-brand/10 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
        </main>
      </motion.div>
    </>
  );
};

export default Categories;
