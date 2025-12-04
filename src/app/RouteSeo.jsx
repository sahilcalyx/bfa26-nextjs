"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getNextSeoForPath } from "../seo/seo.config";

export default function RouteSeo() {
  const pathname = usePathname() || "/";
  const props = getNextSeoForPath(pathname);
  const [Comp, setComp] = useState(null);

  useEffect(() => {
    import("next-seo").then((mod) => {
      const C = mod.NextSeo || mod.default;
      setComp(() => C);
    }).catch(() => setComp(null));
  }, []);

  if (!Comp) return null;
  return <Comp {...props} />;
}