import { H1, H3, P } from "@/subcomponents/Headings";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

const AdminTopbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div className="ml-0 md:ml-[250px] w-full md:w-auto shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between md:justify-end p-3">
          <H1 className="text-lg md:hidden" text={"NextNews"} />
          <div className="flex items-center justify-center gap-2">
            <div>
              <H3 className="text-base font-semibold" text="Saroar Jahan" />
              <P className="-mt-2" text="Content Writer" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
                className="w-full h-full object-cover"
                alt="Title"
              />
            </div>
            <button
              onClick={() => setShowMobileMenu((l) => !l)}
              className="md:hidden ml-4"
            >
              {showMobileMenu ? (
                <X className="w-5 h-5" />
              ) : (
                <AlignJustify className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={showMobileMenu ? { opacity: 1, x: 0 } : { x: "100%", display: "none" }}
        transition={{ duration: .5, stiffness: { x: 60 } }}
        className="mt-16 h-[90vh] md:hidden items-center justify-center bg-black overflow-hidden"
      >
        <div className="md:hidden w-full flex flex-col pt-14">
          <Navlink />
        </div>
      </motion.div>
    </>
  );
};

export default AdminTopbar;
