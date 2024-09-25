import Link from "next/link";

export const ButtonPrimary = ({ text, className = "", onClick, type }) => (
  <button
    onClick={onClick}
    className={`${
      (type === "outline" && "bg-white text-brand") || "bg-brand text-black"
    } rounded-md border border-brand text-main font-semibold px-5 py-2.5 ${className}`}
  >
    {text}
  </button>
);

export const ButtonLink = ({ text, link, type }) => (
  <Link
    href={link}
    className={`${
      type === "outline" ? "bg-white text-brand" : "bg-brand text-black"
    } rounded-md border border-brand text-main font-semibold px-5 py-2.5 cursor-pointer`}
  >
    {text}
  </Link>
);

export const ButtonDark = ({ text, className = "", onClick, type }) => (
  <button
    onClick={onClick}
    className={`${
      (type === "outline" && "bg-white text-black") || "bg-black text-white"
    } rounded-md border border-black text-main font-semibold px-5 py-2.5`}
  >
    {text}
  </button>
);

export const ButtonDarkLink = ({ text, className = "", link, type }) => (
  <Link
    href={link}
    className="bg-black text-white rounded-md border border-black text-main font-semibold px-5 py-2.5 hover:bg-black/10 hover:text-black transition-all duration-200"
  >
    {text}
  </Link>
);
