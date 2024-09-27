import { categories } from "@/data/Categories";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileNav = ({ show, setShowMenu }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: show ? "0%" : "-100%" }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen mt-5 bg-black opacity-90 text-white flex flex-col items-center justify-center lg:hidden"
    >
      {categories?.map((item, i) => (
        <Link
          onClick={() => setShowMenu(false)}
          key={i}
          href={`/categories/${item?.id}?category=${item.name}`}
          className="capitalize py-2.5 px-4 inline-block font-bold hover:bg-brand/10 transition-all duration-200"
        >
          {item.name}
        </Link>
      ))}
    </motion.div>
  );
};

export default MobileNav;
