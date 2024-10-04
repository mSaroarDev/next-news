import { H6, P } from "@/subcomponents/Headings";
import { convertDateToCustomFormat } from "@/utils/convertDate";
import {
  BookmarkX,
  CalendarPlus,
  ClipboardPen,
  FilePlus,
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
      return <UserRoundCheck className="w-6 h-6 text-green-600" />;
    } else if (type === "comment") {
      return <MessagesSquare className="w-6 h-6" />;
    } else if (type === "like") {
      return <ThumbsUp className="w-6 h-6" />;
    } else if (type === "unlike") {
      return <ThumbsDown className="w-6 h-6" />;
    } else if (type === "share") {
      return <Share2 className="w-6 h-6" />;
    }else if (type === "category create") {
      return <CalendarPlus className="w-6 h-6 text-purple-600" />;
    } else if (type === "post create") {
      return <FilePlus className="w-6 h-6 text-purple-600" />;
    } else if (type === "post delete") {
      return <BookmarkX className="w-6 h-6 text-red-600" />;
    } else if (type === "post edit") {
      return <ClipboardPen className="w-6 h-6 text-purple-600" />;
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
                {`${text}`}
              </p>

              <div className="mt-3 flex flex-col md:flex-row gap-1 md:gap-2">
                <p className="text-sm text-gray">on: {convertDateToCustomFormat(createdAt)}</p>

                {notification_on && (
                  <Link href={notification_on} target="_blank" className="text-sm text-black underline">
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
