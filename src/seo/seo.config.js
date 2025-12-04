// Central SEO registry: define per-path title, description, and Open Graph/Twitter
// Update this file to manage SEO for all pages in one place.

const siteName = "Brit Fintech Awards";
export const siteBaseUrl = "https://bfa26-nextjs-new.vercel.app"; // Update if different

export function toAbsoluteUrl(urlOrPath) {
  if (!urlOrPath) return undefined;
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath;
  return `${siteBaseUrl}${urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`}`;
}

export const defaultSeo = {
  title: siteName,
  description: "Celebrating excellence and innovation in fintech.",
  openGraph: {
    title: siteName,
    description: "Celebrating excellence and innovation in fintech.",
    url: siteBaseUrl,
    siteName,
    images: [
      {
        url: toAbsoluteUrl("/share-thumb.png"),
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Celebrating excellence and innovation in fintech.",
    images: [toAbsoluteUrl("/share-thumb.png")],
  },
};

export const seoByPath = {
  "/": {
    title: "Brit Fintech Awards | Home",
    description: "Explore categories, sponsors, and highlights of the Brit Fintech Awards.",
    openGraph: {
      title: "Brit Fintech Awards | Home",
      description: "Explore categories, sponsors, and highlights of the Brit Fintech Awards.",
      url: `${siteBaseUrl}/`,
      siteName,
      images: [{ url: "/assets/img/og/home.jpg", width: 1200, height: 630, alt: "Home" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Home",
      description: "Explore categories, sponsors, and highlights of the Brit Fintech Awards.",
      images: ["/assets/img/og/home.jpg"],
    },
  },
  "/about": {
    title: "About Brit Fintech Awards 2026",
    description: "Learn about our mission and the team behind the awards.",
    openGraph: {
      title: "About Brit Fintech Awards",
      description: "Learn about our mission and the team behind the awards.",
      url: `${siteBaseUrl}/about#about`,
      siteName,
      images: [{ url: "/assets/img/og/about.jpg", width: 1200, height: 630, alt: "About" }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "About Brit Fintech Awards",
      description: "Learn about our mission and the team behind the awards.",
      images: ["/assets/img/og/about.jpg"],
    },
  },
  "/register": {
    title: "Register for Brit Fintech Awards",
    description: "Enter your nomination or book tickets for the awards night.",
    openGraph: {
      title: "Register for Brit Fintech Awards",
      description: "Enter your nomination or book tickets for the awards night.",
      url: `${siteBaseUrl}/register`,
      siteName,
      images: [{ url: "/assets/img/og/register.jpg", width: 1200, height: 630, alt: "Register" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Register for Brit Fintech Awards",
      description: "Enter your nomination or book tickets for the awards night.",
      images: ["/assets/img/og/register.jpg"],
    },
  },
  "/contact": {
    title: "Contact Brit Fintech Awards",
    description: "Get in touch with the Brit Fintech Awards team.",
    openGraph: {
      title: "Contact Brit Fintech Awards",
      description: "Get in touch with the Brit Fintech Awards team.",
      url: `${siteBaseUrl}/contact`,
      siteName,
      images: [{ url: "/assets/img/og/contact.jpg", width: 1200, height: 630, alt: "Contact" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Brit Fintech Awards",
      description: "Get in touch with the Brit Fintech Awards team.",
      images: ["/assets/img/og/contact.jpg"],
    },
  },
};

function inferFromSlug(path) {
  // Simple inference from last segment if not explicitly defined
  const last = path.split("/").filter(Boolean).pop() || "home";
  const titleCase = last
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const title = `${titleCase} | ${siteName}`;
  return {
    ...defaultSeo,
    title,
    openGraph: { ...defaultSeo.openGraph, title, url: `${siteBaseUrl}${path}` },
    twitter: { ...defaultSeo.twitter, title },
  };
}

export function getSeoForPath(path) {
  return seoByPath[path] || inferFromSlug(path) || defaultSeo;
}

// Map central SEO to next-seo props (DefaultSeo/NextSeo)
function toNextSeoProps(seo) {
  const twitterImage = Array.isArray(seo?.twitter?.images) ? seo.twitter.images[0] : undefined;
  const additionalMetaTags = [];
  if (seo?.twitter?.title) additionalMetaTags.push({ name: "twitter:title", content: seo.twitter.title });
  if (seo?.twitter?.description) additionalMetaTags.push({ name: "twitter:description", content: seo.twitter.description });
  if (twitterImage) additionalMetaTags.push({ name: "twitter:image", content: twitterImage });

  return {
    title: seo.title,
    description: seo.description,
    canonical: seo.openGraph?.url,
    openGraph: seo.openGraph,
    twitter: {
      cardType: seo.twitter?.card || "summary_large_image",
      handle: seo.twitter?.handle,
      site: seo.twitter?.site,
    },
    additionalMetaTags,
  };
}

export function getDefaultNextSeo() {
  return toNextSeoProps(defaultSeo);
}

export function getNextSeoForPath(path) {
  const seo = getSeoForPath(path);
  return toNextSeoProps(seo);
}