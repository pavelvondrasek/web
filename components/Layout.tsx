import Link from "next/link";
import React, { FC } from "react";
import { x } from "@xstyled/emotion";

const Layout: FC = ({ children }) => {
  return (
    <x.div display="flex" flexDirection="column" h="100%">
      <x.div flex="1 0 auto">
        <x.header bg="black" position="sticky" top="0">
          <x.div display="flex" container mx="auto" p="16px 0 16px 0">
            <x.nav flexGrow={1}>
              {/*
              <Link href="/">Úvod</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/kontakt">Kontakt</Link>
              */}
            </x.nav>
            <Link href="/">
              <x.a fontFamily="mono" fontSize="20px" className="flex-grow" color="white">
                <strong>Pavel Vondrášek</strong>, programátor, tvůrce a konzultant
              </x.a>
            </Link>
          </x.div>
        </x.header>
        {children}
      </x.div>
      <x.footer flexShrink={0} bg="black" p="16px 0 16px 0">
        <x.div container mx="auto" color="white">
          &copy; 2021 Pavel Vondrášek
        </x.div>
      </x.footer>
    </x.div>
  );
};

export default Layout;
