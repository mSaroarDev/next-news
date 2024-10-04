import CommonTitle from "@/subcomponents/CommonTitle";
import FeaturedPostSmall from "./FeaturedPostSmall";
import { useSelector } from "react-redux";

const BreakingNews = ({category, heading}) => {
  // get posts
  const {publicPostsData} = useSelector((state)=> state.publicPosts);
  const thisCategoryPosts = category
  ? publicPostsData.filter((post) => post?.category?.categoryName === category)
  : publicPostsData;
  const posts = thisCategoryPosts?.slice(6, 12);
  
  return (
    <>
      <div className="col-span-12 lg:col-span-3">
        <CommonTitle text={heading}/>

        <div className="w-full h-full flex flex-col items-start justify-between gap-2 py-5">
          {posts && posts?.map((item)=> <FeaturedPostSmall key={item?._id} type="trending" data={item} />)}
        </div>
      </div>
    </>
  );
};

export default BreakingNews;
