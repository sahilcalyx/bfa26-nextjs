import { toAbsoluteUrl, siteBaseUrl } from "../../seo/seo.config";

export async function generateMetadata({ params }) {
  // Import the SEO config dynamically
  const { getSeoForPath } = await import("../../seo/seo.config");
  
  const slugArray = Array.isArray(params?.slug) ? params.slug : [];
  const path = `/${slugArray.join('/')}` || '/';
  
  // Debug logging
  console.log('Generated path:', path);
  console.log('Slug array:', slugArray);
  
  const seo = getSeoForPath(path);
  
  // Debug logging
  console.log('SEO data for path:', path, seo);

  const og = seo.openGraph || {};
  const tw = seo.twitter || {};
  const img0 = Array.isArray(og.images) ? og.images[0] : undefined;
  const ogImageUrl = img0?.url ? toAbsoluteUrl(img0.url) : undefined;
  const canonical = og.url || siteBaseUrl + path;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: og.title || seo.title,
      description: og.description || seo.description,
      url: canonical,
      siteName: og.siteName || "Brit Fintech Awards",
      images: ogImageUrl ? [
        {
          url: ogImageUrl,
          width: img0?.width || 1200,
          height: img0?.height || 630,
          alt: img0?.alt || seo.title,
        }
      ] : undefined,
      type: og.type || "website",
    },
    twitter: {
      card: tw.card || "summary_large_image",
      title: tw.title || seo.title,
      description: tw.description || seo.description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
      site: tw.site || "@BritFintech",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Head() {
  // This component is for backward compatibility
  return null;
}