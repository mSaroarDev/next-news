import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import CommonTitle from "@/subcomponents/CommonTitle";
import CategoryPage from "./CategoryPage";

const page = ({params}) => {
    // category id
    const {id} = params;

  return (
    <>
      <Navbar />
      <Categories />

      <CategoryPage id={id} /> 
    </>
  );
};

export default page;
