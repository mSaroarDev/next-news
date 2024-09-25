import CommonTitle from "@/subcomponents/CommonTitle";
import FeaturedPostSmall from "./FeaturedPostSmall";

const BreakingNews = () => {
  return (
    <>
      <div className="col-span-12 lg:col-span-3">
        <CommonTitle text="Latest Posts" />

        <div className="w-full h-full flex flex-col items-start justify-between gap-2 py-5">
          <FeaturedPostSmall type="trending" />
          <FeaturedPostSmall type="trending" />
          <FeaturedPostSmall type="trending" />
          <FeaturedPostSmall type="trending" />
          <FeaturedPostSmall type="trending" />
          <FeaturedPostSmall type="trending" />
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
