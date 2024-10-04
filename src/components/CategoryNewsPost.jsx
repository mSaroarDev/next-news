import { H2 } from "@/subcomponents/Headings";
import Link from "next/link";

const CategoryNewsPost = ({ data }) => {
  return (
    <>
      <Link
        href={`/article/${data?._id}?title=${data?.title}&content=${data?.seo}`}
        className="category-news-card w-full h-[200px] lg:h-[250px] rounded-md overflow-hidden relative"
      >
        <img
          src={
            data?.image ||
            "https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
          }
          className="w-full h-full object-cover"
          alt={data?.title}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-black/70 to-transparent p-5">
          <H2 className="text-[20px] text-white px-2" text={data?.title} />
        </div>
      </Link>
    </>
  );
};

export default CategoryNewsPost;
