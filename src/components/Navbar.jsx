"use client";
import { H1 } from "@/subcomponents/Headings";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="bg-white py-4 w-full fixed top-0 left-0 z-50 overflow-hidden">
        <main className="flex items-center justify-between overflow-hidden">
          <motion.div
            initial={{ x: "-150px" }}
            animate={{ x: "0" }}
            transition={{ duration: 1 }}
          >
            <Link href="/">
              <H1
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="text-base font-bold"
                text="NextBlog"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: "150px" }}
            animate={{ x: "0" }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >
            <Link href="/login" className="text-sm">
              Admin
            </Link>
            <button>
              <Image src="/moon.svg" width={16} height={16} alt="Dark mode" />
            </button>
            <button
              onClick={() => setShowMenu((l) => !l)}
              className="block md:hidden ml-5"
            >
              {showMenu ? (
                <X className="h-4 w-4" />
              ) : (
                <AlignJustify className="h-4 w-4" />
              )}
            </button>
          </motion.div>
        </main>

        {showMenu && <MobileNav show={showMenu} />}
      </div>
    </>
  );
};

export default Navbar;
