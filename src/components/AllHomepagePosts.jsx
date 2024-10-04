"use client";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import CategoryBasedNewsSection from "./CategoryBasedNewsSection";
import FeaturedSection from "./FeaturedSection";
import PressRealease from "./PressRealease";
import RecentNewsSection from "./RecentNewsSection";
import SportsAndEntertainmentSection from "./SportsAndEntertainmentSection";
import { useEffect } from "react";
import { fetchPublicPosts } from "@/features/publicPosts/publicPostsSlice";
import { fetchPublicCategories } from "@/features/publicCategory/publicCategorySlice";

const AllHomepagePosts = () => {
  // redux store
  const dispatch = useDispatch();

  const { publicCategoriesData } = useSelector(
    (state) => state.publicCategories
  );
  const featuredCategories = publicCategoriesData?.filter(
    (category) => category?.isFeatured === true
  );

  useEffect(() => {
    dispatch(fetchPublicPosts());
    dispatch(fetchPublicCategories());
  }, []);

  return (
    <>
      <Categories featuredCategories={featuredCategories} />
      <FeaturedSection />
      <CategoryBasedNewsSection />
      <SportsAndEntertainmentSection />
      <RecentNewsSection />
      <PressRealease />
    </>
  );
};

export default AllHomepagePosts;
