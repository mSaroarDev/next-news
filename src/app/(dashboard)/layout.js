"use client";
import AdminTopbar from "@/components/AdminTopbar";
import Navlink from "@/components/Navlink";
import { H1 } from "@/subcomponents/Headings";
import { ChevronDown, ChevronUp, Circle, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Layout() {
  return (
    <>
      {/* sidebar */}
      <div className="hidden md:block">
        <div className="fixed top-0 bottom-0 left-0 w-[250px] bg-black overflow-y-auto">
          <H1 text={"NextNews"} className="text-lg text-white m-5" />

          {/* navlinks */}
          <div className="flex flex-col">
            <Navlink />
          </div>
        </div>
      </div>

      {/* topbar */}
      <AdminTopbar />
    </>
  );
}
