import CommonTitle from "@/subcomponents/CommonTitle";
import FeaturedPostBig from "./FeaturedPostBig";
import FeaturedPostSmall from "./FeaturedPostSmall";

const FeaturedPost = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-9 grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <CommonTitle text="Featured Posts" />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <FeaturedPostBig />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="w-full h-full flex flex-col items-start justify-between gap-3">
            <FeaturedPostSmall />
            <FeaturedPostSmall />
            <FeaturedPostSmall />
            <FeaturedPostSmall />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPost;
