import { useState } from "react";
import { ArrowIcon, MenuIcon } from "@cmsgov/design-system";
import { items } from "../../utils/constants";
import "./NavigationBar.scss";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About ASETT",
      link: "/",
    },
    {
      text: "Contact Us",
      link: "/",
    },
    {
      text: "Support",
      link: "/",
      icon: <ArrowIcon className="icon" direction="down" />,
      dropdown: [
        { text: "ASETT Glossary", link: "/" },
        { text: "Frequently Asked Questions", link: "/" },
        { text: "User Manual", link: "/" },
      ],
    },
  ];

  return (
    <header className="header">
      <img
        src="/assets/all-purpose-banner.jpg"
        alt="Logo"
        className="header-banner"
      />
      <nav className="navigation-bar">
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </button>
        <div className={`left-bar ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => item.dropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => item.dropdown && setIsDropdownOpen(false)}
            >
              <a href={item?.link} className="links">
                {item?.text}
                {item?.icon}
              </a>
              {item?.dropdown && (
                <div
                  className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
                >
                  {item.dropdown.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.link}
                      className="dropdown-item"
                    >
                      {subItem.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={`right-bar ${isMenuOpen ? "open" : ""}`}>
          {items.map((item, index) => (
            <a href={item?.link} key={index}>
              {item?.text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
