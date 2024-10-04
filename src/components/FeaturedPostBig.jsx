import { ButtonDarkLink } from "@/subcomponents/Buttons";
import { H1, P } from "@/subcomponents/Headings";
import { convertDateToCustomFormat } from "@/utils/convertDate";

const FeaturedPostBig = ({ data }) => {
  return (
    <>
      <div className="w-full h-[250px] rounded-md overflow-hidden">
        <img
          src={
            data?.image ||
            "https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
          }
          className="w-full h-full object-cover"
          alt={data?.title}
        />
      </div>
      <div className="my-5">
        <H1 className="text-[22px] leading-[25px]" text={data?.title} />
        <P className="my-2" text={data?.description.slice(0, 200) + "..."} />
        <P className="text-black" text={data?.category?.categoryName} />
        <P className="mb-5" text={convertDateToCustomFormat(data?.createdAt)} />

        <ButtonDarkLink
          text="Read More"
          link={`/article/${data?._id}?title=${data?.title}&content=${data?.seo}`}
        />
      </div>
    </>
  );
};

export default FeaturedPostBig;
