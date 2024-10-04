import { H6, P } from "@/subcomponents/Headings";
import { convertDateToCustomFormat } from "@/utils/convertDate";
import Link from "next/link";

const Comments = ({type, data}) => {
  return (
    <>
      <div className="p-4 box-shadow">
        <div>
          <div className="flex items-start gap-4">
            <div className="min-w-8 max-w-8 h-8 rounded-full overflow-hidden">
              <img
                src="/placeholder.jpg"
                className="w-full h-full object-cover"
                alt={data?.user}
              />
            </div>
            <div>
              <H6 className="font-bold text-main" text={data?.user} />
              <P
                className="text-sm mt-1"
                text={data?.comment}
              />
              {type === "Admin" && (
                <div className="mt-3 flex flex-col md:flex-row gap-1 md:gap-2">
                  <p className="text-sm text-gray">
                    posted on: {convertDateToCustomFormat(data?.createdAt)}
                  </p>
                  <p className="text-sm text-gray">posted by: {data?.name}</p>
                  <Link href='/' className="text-sm text-black underline">on this Post</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
