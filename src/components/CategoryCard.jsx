import { H5, P } from "@/subcomponents/Headings";
import { BookmarkCheck, SquarePen } from "lucide-react";
import Link from "next/link";

const CategoryCard = ({ data }) => {
  return (
    <>
      <Link
        href={`/dashboard/all-categories/${data?._id}`}
        className={`col-span-6 lg:col-span-4 xl:col-span-3 flex items-start gap-3 px-7 py-5 box-shadow rounded-md ${
          data?.isFeatured && "border-s-[3px] border-brand"
        } relative`}
      >
        <BookmarkCheck className="min-w-7 h-7 text-brand mt-1" />
        <div>
          <H5 className="text-base font-bold" text={data?.categoryName} />
          <P className="text-sm" text="341 Posts" />
        </div>

        <Link
          href={`/dashboard/all-categories/edit/${data?._id}`}
          // onClick={(e) => {
          //   // e.preventDefault(); // Prevent default link behavior
          //   // e.stopPropagation(); // Stop event propagation to the parent
          // }}
          className="absolute top-2 right-2"
        >
          <SquarePen className="w-5 h-5 hover:text-brand" />
        </Link>
      </Link>
    </>
  );
};

export default CategoryCard;
