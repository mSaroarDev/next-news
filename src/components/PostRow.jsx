import { H5 } from "@/subcomponents/Headings";
import Link from "next/link";

const PostRow = () => {
  return (
    <>
      <Link href="/" className="h-auto mb-2 box-shadow flex flex-col md:flex-row">
        <div className="w-full md:w-44 h-auto flex-shrink-0">
          <img
            src="https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
            className="w-full h-full object-cover"
            alt="Title"
            style={{ height: "100%" }}
          />
        </div>

        <div className="flex-grow px-4 py-2 flex flex-col justify-between">
          <H5
            className="text-base font-bold mb-2"
            text="Lipsum generator: Lorem Ipsum - All the facts"
          />
          <p className="text-sm text-gray">in category: Bangladesh</p>
          <p className="text-sm text-gray">
            posted on: 24 Jun, 2024 - 08.00 PM
          </p>
          <p className="text-sm text-gray">posted by: Saroar</p>
          <p className="text-sm text-gray">comments: 45</p>
        </div>
      </Link>
    </>
  );
};

export default PostRow;
