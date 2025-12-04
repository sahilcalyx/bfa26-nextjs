// Server-side head for catch-all routes, pulling from central SEO config
export default async function Head({ params }) {
  const { getSeoForPath, toAbsoluteUrl, siteBaseUrl } = await import("../../seo/seo.config");
  const slugArray = Array.isArray(params?.slug) ? params.slug : [];
  const path = `/${slugArray.join('/')}` || '/';
  const seo = getSeoForPath(path);

  const og = seo.openGraph || {};
  const tw = seo.twitter || {};
  const img0 = Array.isArray(og.images) ? og.images[0] : undefined;
  const ogImageUrl = img0?.url ? toAbsoluteUrl(img0.url) : undefined;
  const canonical = og.url || siteBaseUrl + path;

  return (
    <>
      <title>{seo.title}</title>
      {seo.description && <meta name="description" content={seo.description} />}
      <link rel="canonical" href={canonical} />

      {/* Essential meta tags for social sharing */}
      <meta property="og:title" content={og.title || seo.title} />
      <meta property="og:description" content={og.description || seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={og.type || "website"} />
      <meta property="og:site_name" content={og.siteName || "Brit Fintech Awards"} />
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {ogImageUrl && <meta property="og:image:width" content={String(img0?.width || 1200)} />}
      {ogImageUrl && <meta property="og:image:height" content={String(img0?.height || 630)} />}
      {img0?.alt && <meta property="og:image:alt" content={img0.alt} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={tw.card || "summary_large_image"} />
      <meta name="twitter:title" content={tw.title || seo.title} />
      <meta name="twitter:description" content={tw.description || seo.description} />
      {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
      
      {/* Additional meta tags for better indexing */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}