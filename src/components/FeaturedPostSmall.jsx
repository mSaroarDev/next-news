import { H1, P } from "@/subcomponents/Headings";
import { convertDateToCustomFormat } from "@/utils/convertDate";
import Link from "next/link";

const FeaturedPostSmall = ({ type, data }) => {
  return (
    <>
      <Link href={`/article/${data?._id}?title=${data?.title}&content=${data?.seo}`} className="w-full flex items-start gap-3">
        <div
          className={`${
            type === "trending" ? "min-w-24 max-w-10 h-14" : "min-w-40 max-w-40 h-28"
          } rounded-md overflow-hidden`}
        >
          <img
            src={
              data?.image ||
              "https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
            }
            className="w-full h-full object-cover"
            alt={data?.title}
          />
        </div>
        <div className="w-full">
          <H1
            className={`${
              type === "trending"
                ? "text-[14px] leading-5"
                : "text-[16px] leading-6"
            } hover:text-brand transition-all duration-200`}
            text={data?.title}
          />
          {/* {type !== "trending" && (
            <P className="text-black mt-2" text={data?.description.slice(0, 30) + "..."} />
          )} */}
          <P className="mb-3" text={convertDateToCustomFormat(data?.createdAt)} />
        </div>
      </Link>
    </>
  );
};

export default FeaturedPostSmall;
