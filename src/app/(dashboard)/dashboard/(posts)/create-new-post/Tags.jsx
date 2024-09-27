import { X } from "lucide-react";

export const Tags = ({ text }) => (
  <p className="bg-brand/20 text-black px-2 py-1 rounded-md text-sm flex items-center gap-1">
    {text}
    <button>
      <X className="w-3 h-3 text-red-600" />
    </button>
  </p>
);
