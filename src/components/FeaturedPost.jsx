import CommonTitle from "@/subcomponents/CommonTitle";
import FeaturedPostBig from "./FeaturedPostBig";
import FeaturedPostSmall from "./FeaturedPostSmall";
import { useSelector } from "react-redux";

const FeaturedPost = ({ category, heading }) => {
  // get posts
  const { publicPostsData } = useSelector((state) => state.publicPosts);
  const featuredBig = category
    ? publicPostsData?.filter(
        (post, i) => post?.category?.categoryName === category
      )
    : publicPostsData?.filter((post, i) => post?.isFeatured === true);

  return (
    <>
      <div className="col-span-12 lg:col-span-9 grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <CommonTitle text={heading} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <FeaturedPostBig data={featuredBig[0]} />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="w-full h-full flex flex-col items-start justify-between gap-3">
            {featuredBig &&
              featuredBig
                ?.slice(1, 5)
                ?.map((post) => (
                  <FeaturedPostSmall key={post?._id} data={post} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPost;
