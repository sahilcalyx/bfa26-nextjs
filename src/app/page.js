"use client";
import dynamic from "next/dynamic";
import RouteSeo from "./RouteSeo";
const App = dynamic(() => import("../react/App"), { ssr: false });

export async function generateMetadata() {
  const { getSeoForPath } = await import("../seo/seo.config");
  return getSeoForPath("/");
}

export default function Home() {
  return (
    <>
      <RouteSeo />
      <App />
    </>
  );
}
