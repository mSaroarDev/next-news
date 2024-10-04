"use client"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <button
        className="mb-5 button-dark flex items-center gap-3"
        onClick={router.back}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>
    </>
  );
};

export default BackButton;
