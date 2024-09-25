"use client";

import { H1, H6, P } from "@/subcomponents/Headings";
import Navbar from "./Navbar";
import Categories from "./Categories";
import CommonTitle from "@/subcomponents/CommonTitle";
import { Form, Input, Texarea } from "@/subcomponents/Forms";
import Comments from "./Comments";
import FeaturedPostSmall from "./FeaturedPostSmall";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { motion } from "framer-motion";

const p = `Chief advisor Professor Muhammad Yunus has sought cooperation from foreign friends to build a new Bangladesh dreamt by youth folks. “Through the sacrifice of lives and indomitable leadership of the youth, revolutionary changes have taken place in Bangladesh. They sacrificed their lives to build a discrimination-free society and a prosperous country,” he said.Dr. Yunus said this at a reception hosted marking the 50th year of Bangladesh's membership in the United Nations Tuesday evening. The chief adviser said: "The sacrifice of young people has created a great opportunity for us.             We don't want to miss this opportunity. The youth want to build a new Bangladesh through a drastic change in the existing state structure and institutions. We need all of your support to implement it.” Pakistan Prime Minister Shahbaz Sharif, US Assistant Secretary of State for Central and South Asia Donald Lu and representatives of various countries attended the event.`;

const tags = ["Bangladesh", "News", "International", "Dr Unus"];

const ArtcleDetailsPage = () => {
  return (
    <>
      <Navbar />
      <Categories />

      <main className="grid grid-cols-12 gap-5 lg:gap-10 py-7">
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-12 lg:col-span-8"
        >
          <CommonTitle text="Bangladesh" />
          <H1
            className="text-2xl md:text-3xl lg:text-4xl font-bold my-4"
            text={
              "Dr Yunus seeks support of foreign friends to build new Bangladesh"
            }
          />
          <div className="py-2 border-b border-brand/20">
            25 Sep, 2024 at 12:04 AM
          </div>

          <div className="w-full h-[250px] md:h-[400px] lg:h-[500px] overflow-hidden my-5">
            <img
              src="https://diony.co.uk/wp-content/themes/diony/assets/images/placeholder-news.jpeg"
              className="w-full h-full object-cover"
              alt="Title"
            />
          </div>

          <div className="p-5">
            <P className="leading-[30px] text-base" text={p} />
          </div>

          <CommonTitle text="Tags" />
          <div className="flex items-center gap-2 my-5">
            {tags?.map((item, i) => (
              <span
                key={i}
                className="bg-brand/30 text-black px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>

          {/* comments */}
          <div className="mt-7">
            <CommonTitle text="Comments" />
            <div className="mt-5">
              {/* comment box */}
              <Form>
                <Input placeholder="Enter Your Name" />
                <Texarea />
                <button
                  type="submit"
                  className="bg-black rounded px-5 py-2 text-white hover:text-black hover:bg-black/10 transition-all duration-200"
                >
                  Publish
                </button>
              </Form>

              {/* recent comments */}
              <div className="flex flex-col gap-2 mt-5">
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="col-span-12 lg:col-span-4"
        >
          <CommonTitle text="Related Articles" />
          <div className="my-5 flex flex-col gap-1">
            <FeaturedPostSmall />
            <FeaturedPostSmall />
            <FeaturedPostSmall />
            <FeaturedPostSmall />
            <FeaturedPostSmall />
            <FeaturedPostSmall />
          </div>

          {/* categories */}
          <CommonTitle text="Categories" />
          <div className="py-5 flex flex-col">
            <Link href="/" className="categori-list">
              <ChevronsRight className="w-4 h-4" />
              <span>Bangladesh</span>
            </Link>
            <Link href="/" className="categori-list">
              <ChevronsRight className="w-4 h-4" />
              <span>Bangladesh</span>
            </Link>
            <Link href="/" className="categori-list">
              <ChevronsRight className="w-4 h-4" />
              <span>Bangladesh</span>
            </Link>
            <Link href="/" className="categori-list">
              <ChevronsRight className="w-4 h-4" />
              <span>Bangladesh</span>
            </Link>
            <Link href="/" className="categori-list">
              <ChevronsRight className="w-4 h-4" />
              <span>Bangladesh</span>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default ArtcleDetailsPage;
