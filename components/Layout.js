import React from "react";
import Head from "next/head";

export default function Layout({ children ,title}) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="">header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
