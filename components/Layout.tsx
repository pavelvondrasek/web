import Link from "next/link";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <header className="header">
        <div className="flex flex-row container mx-auto items-center">
          <Link href="/">
            <a className="flex-grow">
            Pavel Vondrášek, programátor, tvůrce a konzultant
            </a>
          </Link>
          <nav className="navigation">
            <Link href="/o-mne">O mně</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
