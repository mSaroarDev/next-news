"use client";
import { useDispatch } from "react-redux";
import Categories from "./Categories";
import CategoryBasedNewsSection from "./CategoryBasedNewsSection";
import FeaturedSection from "./FeaturedSection";
import PressRealease from "./PressRealease";
import RecentNewsSection from "./RecentNewsSection";
import SportsAndEntertainmentSection from "./SportsAndEntertainmentSection";
import { useEffect } from "react";
import { fetchPublicPosts } from "@/features/publicPosts/publicPostsSlice";

const AllHomepagePosts = () => {
  // redux store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublicPosts());
  }, []);

  return (
    <>
      <Categories />
      <FeaturedSection />
      <CategoryBasedNewsSection />
      <SportsAndEntertainmentSection />
      <RecentNewsSection />
      <PressRealease />
    </>
  );
};

export default AllHomepagePosts;
