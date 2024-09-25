import { H1, P } from "@/subcomponents/Headings";
import Link from "next/link";

const NewsCard = () => {
    return (
        <>
            <div className="col-span-12 md:col-span-4 lg:col-span-3 rounded-md recent-news-card">
            <Link href="/article/1" className="w-full ">
              <div className="w-full h-[150px] rounded-md overflow-hidden">
                <img
                  src="https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
                  className="w-full h-full object-cover"
                  alt="Title"
                />
              </div>
              <div className="p-4">
                <H1
                  className="text-[18px] leading-[25px]"
                  text="How to create a lorem ipsum text into webpage"
                />
                <P
                  className="my-3"
                  text="lorem ipsum symply dumm text wheenr you need dolor"
                />
                <P className="text-black" text="Bangladesh" />
                <P text="20 July, 2024" />
              </div>
            </Link>
          </div>
        </>
    );
};

export default NewsCard;