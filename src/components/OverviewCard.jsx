import { H5, P } from "@/subcomponents/Headings";
import { BookmarkCheck } from "lucide-react";

const OverviewCard = () => {
  return (
    <>
      <div className="col-span-6 md:col-span-4 flex flex-col items-start justify-center gap-1 px-7 py-5 box-shadow rounded-md">
        <BookmarkCheck className="w-7 h-7 text-brand" />
        <H5 className="text-xl font-bold mt-3" text="50" />
        <P className="text-sm" text="All Posts" />
      </div>
    </>
  );
};

export default OverviewCard;
