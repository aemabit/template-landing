import { useState } from "react";
import Link from "next/link";
import "./nav.scss";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

const regLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];

export default function Navigation() {
  const [hamburger, setHamburger] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  return (
    <>
      <div className="header scrolling-nav">
        <div className="container">
          <nav>
            <ul>
              <Link href="/">
                <li className="title">
                  <img
                    src="https://aemabitfolder.sfo2.digitaloceanspaces.com/MIAPLUS/LogoMIAPLUSazul.png"
                    alt="MIAPLUS+"
                  />
                </li>
              </Link>
            </ul>
            <ul className="reg-menu">
              {regLinks.map((link, id) => {
                return (
                  <Link key={id} href={`${link.url}`}>
                    <li>{link.name}</li>
                  </Link>
                );
              })}
            </ul>
            <ul
              className="hamburger-menu"
              onClick={() => setHamburger(!hamburger)}
            >
              <li>
                <div className="wrapper-header">
                  <div className="hamburger-header"></div>
                  <div className="hamburger-header"></div>
                  <div className="hamburger-header"></div>
                  <div className="hamburger-header"></div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {hamburger && (
        <div className="mobileNav">
          <ul className="mobile-nav">
            {links.map((link, id) => {
              return (
                <Link key={id} href={`${link.url}`}>
                  <li onClick={() => setHamburger(!hamburger)}>{link.name}</li>
                </Link>
              );
            })}
            <div>
              <p>
                Ph1: <span>(786) 253 4150</span>
              </p>
              <p>
                Ph2: <span>(786) 853 4520</span>
              </p>
              <p>
                Miami, Florida, <br /> United States
              </p>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
