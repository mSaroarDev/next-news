import { H6, P } from "@/subcomponents/Headings";

const Comments = () => {
  return (
    <>
      <div className="p-4 box-shadow">
        <div>
          <div className="flex items-start gap-4">
            <div className="min-w-8 h-8 rounded-full overflow-hidden">
              <img
                src="https://grameenfoundation.org/images/_460x352_crop_center-center_none/muhammad-yunus-founder.jpg"
                className="w-full h-full object-cover"
                alt="Title"
              />
            </div>
            <div>
              <H6 className="font-bold text-base" text={"Saroar Jahan"} />
              <P
                className="text-sm"
                text={
                  "Dr. Yunus said this at a reception hosted marking the 50th year of Bangladesh's membership in the United Nations Tuesday evening"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
