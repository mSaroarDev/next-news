import { H6, P } from "@/subcomponents/Headings";
import { convertDateToCustomFormat } from "@/utils/convertDate";
import {
  CalendarPlus,
  LogIn,
  MessagesSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";

const NotificationCard = ({ data }) => {
  const { type, created_by, notification_on, text, createdAt } = data;
  // generate icon
  const generateIcon = () => {
    if (type === "loggin") {
      return <UserRoundCheck className="w-4 h-4 text-green-600" />;
    } else if (type === "comment") {
      return <MessagesSquare className="w-4 h-4" />;
    } else if (type === "like") {
      return <ThumbsUp className="w-4 h-4" />;
    } else if (type === "unlike") {
      return <ThumbsDown className="w-4 h-4" />;
    } else if (type === "share") {
      return <Share2 className="w-4 h-4" />;
    }else if (type === "category create") {
      return <CalendarPlus className="w-4 h-4 text-purple-600" />;
    }
  };

  return (
    <>
      <div className="p-4 box-shadow">
        <div>
          <div className="flex items-start gap-4">
            <div className="bg-brand/10 text-black min-w-8 h-8 flex items-center justify-center rounded-md mt-1">
              {generateIcon()}
            </div>
            <div>
              <p className="text-black">
                <span className="capitalize font-semibold">{created_by || "a user"}</span> {" "}
                {`${text}
                  ${notification_on ? notification_on : ""}
                `}
              </p>

              <div className="mt-3 flex flex-col md:flex-row gap-1 md:gap-2">
                <p className="text-sm text-gray">on: {convertDateToCustomFormat(createdAt)}</p>

                {notification_on && (
                  <Link href="/" className="text-sm text-black underline">
                    view Post
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
