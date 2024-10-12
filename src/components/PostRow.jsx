import { H5 } from "@/subcomponents/Headings";
import { SquarePen } from "lucide-react";
import Link from "next/link";

const PostRow = ({ data, userData }) => {
  return (
    <>
      <div className="h-auto lg:h-[130px] w-full mb-2 box-shadow flex flex-col md:flex-row relative">
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
            in category: {data?.category?.categoryName}{" "}
          </p>
          <p className="text-sm text-gray">
            posted on: 24 Jun, 2024 - 08.00 PM
          </p>
          <p className="text-sm text-gray">posted by: Saroar</p>
          <p className="text-sm text-gray">comments: 45</p>
        </div>

        {userData?.id == data?.created_by?._id && (
          <Link
            href={`/dashboard/all-posts/edit/${data?._id}`}
            className="absolute top-3 right-3"
          >
            <SquarePen className="w-5 h-5 hover:text-brand transition-all duration-200" />
          </Link>
        )}
      </div>
    </>
  );
};

export default PostRow;
