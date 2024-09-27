import { H6, P } from "@/subcomponents/Headings";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";

const NotificationCard = () => {
  return (
    <>
      <div className="p-4 box-shadow">
        <div>
          <div className="flex items-start gap-4">
            <div className="bg-brand/40 text-black min-w-8 h-8 flex items-center justify-center rounded-md">
                <MessagesSquare className="w-4 h-4 mt-1" />
            </div>
            <div>
              <p
                className="text-black"
              >
                {`Mustafiz Commented on the post
                  "Dr. Yunus said this at a reception hosted marking the 50th year of Bangladesh's membership in the United Nations Tuesday evening"
                `}
              </p>
              
                <div className="mt-3 flex flex-col md:flex-row gap-1 md:gap-2">
                  <p className="text-sm text-gray">
                    on: 24 Jun, 2024 - 08.00 PM
                  </p>
                  <Link href='/' className="text-sm text-black underline">view Post</Link>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
