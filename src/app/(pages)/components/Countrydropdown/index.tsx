import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Countrydropdown = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const countries = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Arabic",
    "Hindi",
    "Portuguese",
  ];

  return (
    <div className="relative">
      {/* Toggle Button */}
      <div
        className="flex items-center gap-1 text-sm text-black cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ChevronDown size={16} />

        <span>{language}</span>
      </div>

      {/* Dropdown List */}
      {open && (
        <div className="absolute z-10 mt-2 w-40 bg-white  rounded shadow-md max-h-40 overflow-y-auto">
          {countries.map((item, idx) => (
            <div
              key={idx}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setLanguage(item);
                setOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Countrydropdown;
