import { H1, P } from "@/subcomponents/Headings";
import Link from "next/link";

const FeaturedPostSmall = ({ type }) => {
  return (
    <>
      <Link href="/article/1" className="w-full flex items-start gap-4">
        <div
          className={`${
            type === "trending" ? "min-w-20 h-14" : "min-w-40 h-28"
          } rounded-md overflow-hidden`}
        >
          <img
            src="https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
            className="w-full h-full object-cover"
            alt="Title"
          />
        </div>
        <div>
          <H1
            className={`${
              type === "trending"
                ? "text-[14px] leading-5"
                : "text-[16px] leading-6"
            } hover:text-brand transition-all duration-200`}
            text="Lipsum generator: Lorem Ipsum - All the facts"
          />
          {type !== "trending" && (
            <P className="text-black mt-2" text="Bangladesh" />
          )}
          <P className="mb-3" text="20 July, 2024" />
        </div>
      </Link>
    </>
  );
};

export default FeaturedPostSmall;
