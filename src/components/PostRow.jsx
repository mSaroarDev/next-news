import { H5 } from "@/subcomponents/Headings";
import { SquarePen } from "lucide-react";
import Link from "next/link";

const PostRow = ({ data, userData }) => {
  return (
    <>
      <div className="h-auto lg:h-[130px] w-full mb-2 box-shadow flex flex-col md:flex-row relative overflow-hidden">
        <div className="w-full h-[200px] md:h-full md:w-44">
          <img
            src={
              data?.image ||
              "https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
            }
            className="w-full h-full object-cover"
            alt={data?.title}
          />
        </div>

        <div className="flex-grow px-4 py-2 flex flex-col justify-between">
          <H5 className="text-base font-bold mb-2" text={data?.title} />
          <p className="text-sm text-gray">
            in category: <span className="text-brand font-semibold">{data?.category?.categoryName}</span> {" "}
          </p>
          <p className="text-sm text-gray">
            posted on: 24 Jun, 2024 - 08.00 PM
          </p>
          <p className="text-sm text-gray">posted by: Saroar</p>
          <p className="text-sm text-gray">comments: {data?.comments?.length}</p>
        </div>

        {userData?.id == data?.created_by?._id && (
          <Link
            href={`/dashboard/all-posts/edit/${data?._id}`}
            className="absolute top-3 right-3"
          >
            <SquarePen className="w-5 h-5 hover:text-brand transition-all duration-200" />
          </Link>
        )}

        {data?.isFeatured === true && (
          <div className="absolute w-40 h-fit top-0 -left-9 bg-black text-white -rotate-45 px-7 py-1 text-xs">
            Featured
          </div>
        )}
      </div>
    </>
  );
};

export default PostRow;
