import { X } from "lucide-react";

export const Tags = ({ text, handleDeleteTags, index }) => (
  <p className="bg-brand/20 text-black px-2 py-1 rounded-md text-sm flex items-center gap-1">
    {text}
    <button type="button" onClick={(e) => handleDeleteTags(e, index)}>
      <X className="w-3 h-3 text-red-600" />
    </button>
  </p>
);
