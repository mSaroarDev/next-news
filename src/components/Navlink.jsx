import { AlignJustify, ChevronDown, ChevronUp, Circle, ContactRound, FileText, LayoutPanelLeft, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navlink = () => {
  const navLinks = [
    {
      id: 1,
      name: "overview",
      icon: <LayoutPanelLeft className="w-4 h-4 text-brand" />,
    },
    {
      id: 2,
      name: "profile",
      icon: <ContactRound className="w-4 h-4 text-brand" />,
    },
    {
      id: 3,
      name: "posts",
      icon: <FileText className="w-4 h-4 text-brand" />,
      childrens: ["Create New Post", "All Posts"],
    },
    {
      id: 4,
      name: "comments",
      icon: <MessagesSquare className="w-4 h-4 text-brand" />,
    },
  ];

  const [showSubMenu, setShowSubmenu] = useState(null);

  const handleToggleSubMenu = (id) => {
    setShowSubmenu((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      {navLinks?.map((item, i) => (
        <div key={item.id}>
          <Link
            onClick={
              item?.childrens ? () => handleToggleSubMenu(item.id) : null
            }
            href={`${item?.childrens ? "#" : `/dashboard/${item?.name}`}`}
            className={`nav-link`}
          >
            {item?.icon}
            <span>{item?.name}</span>
            {item?.childrens && (
              <span className="ms-auto">
                {showSubMenu === item.id ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            )}
          </Link>

          <div
            className={`pl-2 submenu ${showSubMenu === item.id ? 'submenu-open' : ''}`}
          >
            {item.childrens?.map((submenu, idx) => (
              <Link key={idx} href="/" className="nav-link">
                <Circle className="w-2 h-2" />
                <span>{submenu}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlink;
