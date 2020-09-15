import Layout from "components/Layout";
import { NextPage } from "next";
import React from "react";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="heading-1 mt-10">
          Jsem <strong>Pavel Vondrášek</strong> a pomůžu vám s vývojem vašich aplikací
        </h1>
        <p>
          Od roku 2012 vyvíjím a navrhuji aplikace na míru pro firmy různých velikostí a mohu pro vás programovat,{" "}
          poradit s technologiemi a architekturou aplikací nebo&nbsp;připravit školení pro váš tým.
        </p>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div>
            <h2 className="heading-2">Programování & vývoj na míru</h2>
            <p className="mt-2">
              Na začátku se seznámím s vaším nápadem, pochopím váš byznys,{" "}
              domyslím detaily, upozorním na potenciálně slabá místa a připravím zadání.{" "}
              Podle zadání implementuji dílčí funkcionality a doptávám se na jednotlivé detaily.{" "}
              Vše si v průběhu postupně schvalujeme a procházíme, abych se ujistil, že na konci dostanete aplikaci,{" "}
              která vám bude dobře sloužit, vydělávat peníze či šetřit čas.
            </p>
          </div>
          <div>
            <h2 className="heading-2">Konzultace</h2>
          </div>
          <div>
            <h2 className="heading-2">Školení</h2>
          </div>
        </div>
        <h2 className="heading-2 mt-10">
          Technologie
        </h2>
        <p className="mt-2">
          Jelikož jsem posedlý neustálým učením se a objevováním nových technologií,
          tak mám zkušenosti s vývojem v několika jazycích a orientuji se ve frontendu i backendu.
          Kromě&nbsp;zkoušení různých programovacích jazyků jsem velkým fanouškem relačních databází.
        </p>
        <p className="pt-5">
          Specializuji se na:{" "}
          <img className="inline-block align-middle" alt="Typescript logo" src="/typescript.svg"/> Typescript,{" "}
          <img className="inline-block align-middle" alt="React logo" src="/react.svg"/> React a Next.js <i>(frontend)</i>{" "}
          <img className="inline-block align-middle" alt="C#" src="/csharp.svg"/> .NET Core,{" "}
          <img className="inline-block align-middle" alt="PostgreSQL logo" src="/postgresql.svg"/> PostgreSQL <i>(backend)</i>.
        </p>
        <p>
          Už nechci dělat:{" "}
          <img className="inline-block align-middle" alt="PHP logo" src="/php.svg"/> PHP,{" "}
          <img className="inline-block align-middle" alt="Symfony logo" src="/symfony.svg"/> Symfony,{" "}
          Nette
        </p>
        <p>
          Nevadí mi:{" "}
          <img className="inline-block align-middle" alt="Node.js logo" src="/nodejs.svg"/> Node.js{" "}
        </p>
        <p>
          Občas používám:{" "}
          <img className="inline-block align-middle" alt="Xamarin logo" src="/xamarin.svg"/> Xamarin Forms,{" "}
          <img className="inline-block align-middle" alt="MSSQL logo" src="/sql-server.svg"/> Microsoft SQL Server
        </p>
        <p>
          Zajímá mě:{" "}
          Rust
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
