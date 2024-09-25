import BreakingNews from "@/components/BreakingNews";
import Categories from "@/components/Categories";
import CategoryBasedNewsSection from "@/components/CategoryBasedNewsSection";
import CategoryNewsPost from "@/components/CategoryNewsPost";
import FeaturedPost from "@/components/FeaturedPost";
import FeaturedPostSmall from "@/components/FeaturedPostSmall";
import FeaturedSection from "@/components/FeaturedSection";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import PressRealease from "@/components/PressRealease";
import RecentNewsSection from "@/components/RecentNewsSection";
import SportsAndEntertainmentSection from "@/components/SportsAndEntertainmentSection";
import CommonTitle from "@/subcomponents/CommonTitle";

export default function Home() {
  return (
    <>
      <Navbar />
      <Categories />

      <FeaturedSection />
      <CategoryBasedNewsSection />
      <SportsAndEntertainmentSection />
      <RecentNewsSection />
      <PressRealease />
    </>
  );
}
