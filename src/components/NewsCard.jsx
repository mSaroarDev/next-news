import { H1, P } from "@/subcomponents/Headings";
import { convertDateToCustomFormat } from "@/utils/convertDate";
import Link from "next/link";

const NewsCard = ({data}) => {
    return (
        <>
            <div className="col-span-12 md:col-span-4 lg:col-span-3 rounded-md recent-news-card">
            <Link href={`/article/${data?._id}?title=${data?.title}&content=${data?.seo}`} className="w-full ">
              <div className="w-full h-[150px] rounded-md overflow-hidden">
                <img
                  src={
                    data?.image ||
                    "https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
                  }
                  className="w-full h-full object-cover"
                  alt={data?.title}
                />
              </div>
              <div className="p-4">
                <H1
                  className="text-[18px] leading-[25px]"
                  text={data?.title}
                />
                <P
                  className="my-3"
                  text={data?.description.slice(0, 50) + "..."}
                />
                <P className="text-black" text={data?.category?.categoryName} />
                <P text={convertDateToCustomFormat(data?.createdAt)} />
              </div>
            </Link>
          </div>
        </>
    );
};

export default NewsCard;