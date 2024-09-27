import { H5, P } from "@/subcomponents/Headings";
import { BookmarkCheck } from "lucide-react";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <>
      <Link href='/dashboard/all-categories/1' className="col-span-6 md:col-span-4 lg:col-span-3 flex items-start justify-between gap-1 px-7 py-5 box-shadow rounded-md">
        <BookmarkCheck className="w-7 h-7 text-brand mt-1" />
        <div>
            <H5 className="text-lg font-bold" text="Bangladesh" />
            <P className="text-sm" text="341 Posts" />
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
