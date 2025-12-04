"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { getSeoForPath } from "../seo/seo.config";

export default function RouteSeo() {
  const pathname = usePathname() || "/";
  const [currentPath, setCurrentPath] = useState(pathname);
  
  // Listen for route changes from the App component
  useEffect(() => {
    const handleRouteChange = (event) => {
      setCurrentPath(event.detail);
    };
    
    window.addEventListener('app-route-change', handleRouteChange);
    
    return () => {
      window.removeEventListener('app-route-change', handleRouteChange);
    };
  }, []);
  
  // Also listen for Next.js route changes
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);
  
  const seoData = getSeoForPath(currentPath);

  // Update document title
  useEffect(() => {
    if (seoData.title) {
      document.title = seoData.title;
    }
  }, [seoData.title]);

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData.title,
    "description": seoData.description,
  };

  return (
    <>
      {/* Update meta tags dynamically */}
      <Script
        id="route-seo"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Update or create meta tags
              function updateMeta(name, content) {
                var meta = document.querySelector('meta[name="' + name + '"]') || document.createElement('meta');
                meta.name = name;
                meta.content = content;
                if (!meta.parentNode) document.head.appendChild(meta);
              }
              
              function updateProperty(property, content) {
                var meta = document.querySelector('meta[property="' + property + '"]') || document.createElement('meta');
                meta.property = property;
                meta.content = content;
                if (!meta.parentNode) document.head.appendChild(meta);
              }
              
              // Update meta tags
              ${seoData.description ? 'updateMeta("description", "' + seoData.description + '");' : ''}
              
              // Update Open Graph tags
              ${seoData.openGraph?.title ? 'updateProperty("og:title", "' + seoData.openGraph.title + '");' : ''}
              ${seoData.openGraph?.description ? 'updateProperty("og:description", "' + seoData.openGraph.description + '");' : ''}
              ${seoData.openGraph?.url ? 'updateProperty("og:url", "' + seoData.openGraph.url + '");' : ''}
              ${seoData.openGraph?.siteName ? 'updateProperty("og:site_name", "' + seoData.openGraph.siteName + '");' : ''}
              ${seoData.openGraph?.type ? 'updateProperty("og:type", "' + seoData.openGraph.type + '");' : ''}
              
              // Update Twitter tags
              ${seoData.twitter?.card ? 'updateProperty("twitter:card", "' + seoData.twitter.card + '");' : ''}
              ${seoData.twitter?.title ? 'updateProperty("twitter:title", "' + seoData.twitter.title + '");' : ''}
              ${seoData.twitter?.description ? 'updateProperty("twitter:description", "' + seoData.twitter.description + '");' : ''}
            })();
          `,
        }}
      />
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}