import ArtcleDetailsPage from "@/components/ArtcleDetailsPage";
import { gettPostDetails } from "@/libs/post";

const ArticleDetailsPage = async ({ params }) => {
  const { id } = params;
  // get post details
  const postDetails = await gettPostDetails(id);

  return (
    <>
      <ArtcleDetailsPage data={postDetails} />
    </>
  );
};

export default ArticleDetailsPage;
