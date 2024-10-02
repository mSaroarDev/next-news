import CreateCategory from "../../../create-new-category/Create";

const EditCategory = ({ params }) => {
  const { id } = params;

  return (
    <>
      <CreateCategory type="edit" id={id} />
    </>
  );
};

export default EditCategory;
