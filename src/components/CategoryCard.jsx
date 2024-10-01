import { H5, P } from "@/subcomponents/Headings";
import { BookmarkCheck } from "lucide-react";
import Link from "next/link";

const CategoryCard = ({ data }) => {
  return (
    <>
      <Link
        href={`/dashboard/all-categories/${data?._id}`}
        className="col-span-6 md:col-span-4 lg:col-span-3 flex items-start gap-3 px-7 py-5 box-shadow rounded-md"
      >
        <BookmarkCheck className="min-w-7 h-7 text-brand mt-1" />
        <div>
          <H5 className="text-base font-bold" text={data?.categoryName} />
          <P className="text-sm" text="341 Posts" />
        </div>
      </Link>
    </>
  );
};

export default CategoryCard;
