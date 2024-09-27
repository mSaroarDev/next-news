import { H6, P } from "@/subcomponents/Headings";
import Link from "next/link";

const Comments = ({type}) => {
  return (
    <>
      <div className="p-4 box-shadow">
        <div>
          <div className="flex items-start gap-4">
            <div className="min-w-8 max-w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://grameenfoundation.org/images/_460x352_crop_center-center_none/muhammad-yunus-founder.jpg"
                className="w-full h-full object-cover"
                alt="Title"
              />
            </div>
            <div>
              <H6 className="font-bold text-main" text={"Saroar Jahan"} />
              <P
                className="text-sm mt-1"
                text={
                  "Dr. Yunus said this at a reception hosted marking the 50th year of Bangladesh's membership in the United Nations Tuesday evening"
                }
              />
              {type === "Admin" && (
                <div className="mt-3 flex flex-col md:flex-row gap-1 md:gap-2">
                  <p className="text-sm text-gray">
                    posted on: 24 Jun, 2024 - 08.00 PM
                  </p>
                  <p className="text-sm text-gray">posted by: Saroar</p>
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
