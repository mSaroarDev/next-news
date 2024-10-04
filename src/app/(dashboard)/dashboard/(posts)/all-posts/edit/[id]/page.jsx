import CreatePost from "../../../create-new-post/CreatePost";

const page = ({ params }) => {
  const { id } = params;

  return (
    <>
      <CreatePost type="edit" id={id} />
    </>
  );
};

export default page;
