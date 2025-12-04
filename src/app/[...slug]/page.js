"use client";
import dynamic from "next/dynamic";
import RouteSeo from "../RouteSeo";
import PageSeo from "../PageSeo";
const App = dynamic(() => import("../../react/App"), { ssr: false });

export default function CatchAllPage() {
  return (
    <>
      <PageSeo path="dynamic" />
      <RouteSeo />
      <App />
    </>
  );
}