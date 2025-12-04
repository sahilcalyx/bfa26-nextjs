// Server-side head for the home route, pulling from central SEO config
export default async function Head() {
  const { getSeoForPath, toAbsoluteUrl, siteBaseUrl } = await import("../seo/seo.config");
  const seo = getSeoForPath("/");

  const og = seo.openGraph || {};
  const tw = seo.twitter || {};
  const img0 = Array.isArray(og.images) ? og.images[0] : undefined;
  const ogImageUrl = img0?.url ? toAbsoluteUrl(img0.url) : undefined;
  const canonical = og.url || siteBaseUrl + "/";

  return (
    <>
      <title>{seo.title}</title>
      {seo.description && <meta name="description" content={seo.description} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      {og.title && <meta property="og:title" content={og.title} />}
      {og.description && <meta property="og:description" content={og.description} />}
      {canonical && <meta property="og:url" content={canonical} />} 
      {og.type && <meta property="og:type" content={og.type} />}
      {og.siteName && <meta property="og:site_name" content={og.siteName} />}
      {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
      {img0?.width && <meta property="og:image:width" content={String(img0.width)} />}
      {img0?.height && <meta property="og:image:height" content={String(img0.height)} />}
      {img0?.alt && <meta property="og:image:alt" content={img0.alt} />}

      {/* Twitter */}
      {tw.card && <meta name="twitter:card" content={tw.card} />}
      {tw.title && <meta name="twitter:title" content={tw.title} />}
      {tw.description && <meta name="twitter:description" content={tw.description} />}
      {Array.isArray(tw.images) && tw.images[0] && (
        <meta name="twitter:image" content={toAbsoluteUrl(tw.images[0])} />
      )}
      {tw.site && <meta name="twitter:site" content={tw.site} />}
      {tw.handle && <meta name="twitter:creator" content={tw.handle} />}
    </>
  );
}