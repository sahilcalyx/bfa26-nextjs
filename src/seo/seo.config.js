// Central SEO registry: define per-path title, description, and Open Graph/Twitter
// Update this file to manage SEO for all pages in one place.

const siteName = "Brit Fintech Awards";
export const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://bfa26-nextjs-new.vercel.app";

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
        url: toAbsoluteUrl("/assets/img/og/home.jpg"),
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
    images: [toAbsoluteUrl("/assets/img/og/home.jpg")],
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
      title: "About Brit Fintech Awards 2026",
      description: "Learn about our mission and the team behind the awards.",
      url: `${siteBaseUrl}/about`,
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
    title: "Register for Brit Fintech Awards 2026",
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
  "/privacy-policy": {
    title: "Brit Fintech Awards | Privacy Policy",
    description:
      "Learn about how Brit Fintech Awards handles your privacy and personal information in compliance with privacy laws and regulations.",
    openGraph: {
      title: "Brit Fintech Awards | Privacy Policy",
      description:
        "Learn about how Brit Fintech Awards handles your privacy and personal information in compliance with privacy laws and regulations.",
      url: `${siteBaseUrl}/privacy-policy`,
      siteName,
      images: [
        { url: "/assets/img/og/about.jpg", width: 1200, height: 630, alt: "Privacy Policy" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Privacy Policy",
      description:
        "Learn about how Brit Fintech Awards handles your privacy and personal information in compliance with privacy laws and regulations.",
      images: ["/assets/img/og/about.jpg"],
    },
  },
  "/sponsorship-terms-and-conditions": {
    title: "Brit Fintech Awards | Sponsorship Terms and Conditions",
    description:
      "Read the Sponsorship terms and conditions governing the use of Brit Fintech Awards website and services.",
    openGraph: {
      title: "Brit Fintech Awards | Sponsorship Terms and Conditions",
      description:
        "Read the Sponsorship terms and conditions governing the use of Brit Fintech Awards website and services.",
      url: `${siteBaseUrl}/sponsorship-terms-and-conditions`,
      siteName,
      images: [
        { url: "/assets/img/og/about.jpg", width: 1200, height: 630, alt: "Sponsorship Terms" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Sponsorship Terms and Conditions",
      description:
        "Read the Sponsorship terms and conditions governing the use of Brit Fintech Awards website and services.",
      images: ["/assets/img/og/about.jpg"],
    },
  },
  "/registerfor-startup-pitch": {
    title: "Brit Fintech Awards | Register for Startup Deck",
    description:
      "Register for the Startup Deck at the Brit Fintech Awards and join us in celebrating innovation and excellence in the UK's financial technology sector.",
    openGraph: {
      title: "Brit Fintech Awards | Register for Startup Deck",
      description:
        "Join the Brit Fintech Awards by registering for the Startup Deck to celebrate and showcase innovation in the UK financial technology industry.",
      url: `${siteBaseUrl}/registerfor-startup-pitch`,
      siteName,
      images: [
        { url: "/assets/img/og/register.jpg", width: 1200, height: 630, alt: "Startup Deck" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Register for Startup Deck",
      description:
        "Join the Brit Fintech Awards by registering for the Startup Deck to celebrate and showcase innovation in the UK financial technology industry.",
      images: ["/assets/img/og/register.jpg"],
    },
  },
  "/our-discussion-panel-2025": {
    title: "Discussion Panel | Brit Fintech Awards 2025",
    description:
      "Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers shaping the future of financial technology.",
    openGraph: {
      title: "Discussion Panel | Brit Fintech Awards 2025",
      description:
        "Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers shaping the future of financial technology.",
      url: `${siteBaseUrl}/our-discussion-panel-2025`,
      siteName,
      images: [
        { url: "/assets/img/og/home.jpg", width: 1200, height: 630, alt: "Discussion Panel" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Discussion Panel | Brit Fintech Awards 2025",
      description:
        "Join Brit FinTech Awards UK, celebrating top innovations and achievements in FinTech, and honouring pioneers shaping the future of financial technology.",
      images: ["/assets/img/og/home.jpg"],
    },
  },
  "/blogs": {
    title: "Brit Fintech Awards | Blogs",
    description: "Insights and stories from the Brit Fintech Awards community.",
    openGraph: {
      title: "Brit Fintech Awards | Blogs",
      description: "Insights and stories from the Brit Fintech Awards community.",
      url: `${siteBaseUrl}/blogs`,
      siteName,
      images: [
        { url: "/assets/img/og/home.jpg", width: 1200, height: 630, alt: "Blogs" },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Brit Fintech Awards | Blogs",
      description: "Insights and stories from the Brit Fintech Awards community.",
      images: ["/assets/img/og/home.jpg"],
    },
  },
  "/will-2025-be-the-year-of-stablecoins": {
    title: "Will 2025 Be the Year of Stablecoins?",
    description: "Exploring the potential mainstream adoption of stablecoins in 2025.",
    openGraph: {
      title: "Will 2025 Be the Year of Stablecoins?",
      description: "Exploring the potential mainstream adoption of stablecoins in 2025.",
      url: `${siteBaseUrl}/will-2025-be-the-year-of-stablecoins`,
      siteName,
      images: [
        { url: "/assets/img/blogs/will-2025-be-the-year-of-stablecoins.png", width: 1200, height: 630, alt: "Stablecoins 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Will 2025 Be the Year of Stablecoins?",
      description: "Exploring the potential mainstream adoption of stablecoins in 2025.",
      images: ["/assets/img/blogs/will-2025-be-the-year-of-stablecoins.png"],
    },
  },
  "/beyond-borders-brit-fintech-awards": {
    title: "Beyond Borders: Brit Fintech Awards",
    description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
    openGraph: {
      title: "Beyond Borders: Brit Fintech Awards",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      url: `${siteBaseUrl}/beyond-borders-brit-fintech-awards`,
      siteName,
      images: [
        { url: "/assets/img/blogs/fintech-in-the-uk.jpg", width: 1200, height: 630, alt: "Beyond Borders" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Beyond Borders: Brit Fintech Awards",
      description: "How Brit Fintech Awards celebrates global innovation beyond borders.",
      images: ["/assets/img/blogs/fintech-in-the-uk.jpg"],
    },
  },
  "/mercury-sponsor-details-2025": {
    title: "Mercury Sponsor Details 2025",
    description: "Mercury Danati: London’s Trusted Currency Exchange Specialist",
    openGraph: {
      title: "Mercury Sponsor Details 2025",
      description: "Mercury Danati: London’s Trusted Currency Exchange Specialist",
      url: `${siteBaseUrl}/mercury-sponsor-details-2025`,
      siteName,
      images: [
        { url: "/assets/img/sponsor-logo/Mercury-Danati-25.png", width: 1200, height: 630, alt: "Mercury Sponsor Details 2025" },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mercury Sponsor Details 2025",
      description: "Mercury Danati: London’s Trusted Currency Exchange Specialist",
      images: ["/assets/img/sponsor-logo/Mercury-Danati-25.png"],
    },
  },
};

function selectOgImage(path) {
  const last = path.split("/").filter(Boolean).pop()?.toLowerCase() || "home";
  if (last.includes("about")) return "/assets/img/og/about.jpg";
  if (last.includes("contact")) return "/assets/img/og/contact.jpg";
  if (last.includes("register")) return "/assets/img/og/register.jpg";
  if (last.includes("blog") || path.includes("/blogs")) return "/assets/img/blogs/fintech-in-the-uk.jpg";
  if (path.toLowerCase().includes("award")) return "/assets/img/aword-demo.png";
  if (path.toLowerCase().includes("sponsor")) return "/assets/img/event-conference/sponsor_bg.jpg";
  if (path.toLowerCase().includes("judges")) return "/assets/img/event-conference/bfa-jurry1.png";
  if (path.toLowerCase().includes("gallery")) return "/assets/img/event-conference/post1.jpg";
  return "/assets/img/og/home.jpg";
}

function inferFromSlug(path) {
  const last = path.split("/").filter(Boolean).pop() || "home";
  const titleCase = last
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const title = `${titleCase} | ${siteName}`;
  const image = selectOgImage(path);
  return {
    title,
    description: defaultSeo.description,
    openGraph: {
      title,
      description: defaultSeo.description,
      url: `${siteBaseUrl}${path}`,
      siteName,
      images: [
        { url: image, width: 1200, height: 630, alt: title }
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: defaultSeo.description,
      images: [image],
    },
  };
}

export function getSeoForPath(path) {
  const normalized = String(path || "/").toLowerCase();
  return seoByPath[normalized] || inferFromSlug(path) || defaultSeo;
}

// Map central SEO to next-seo props (DefaultSeo/NextSeo)
function toNextSeoProps(seo) {
  const twitterImage = Array.isArray(seo?.twitter?.images) ? seo.twitter.images[0] : undefined;
  const ogImage = Array.isArray(seo?.openGraph?.images) ? seo.openGraph.images[0] : undefined;
  
  const additionalMetaTags = [];
  if (seo?.twitter?.title) additionalMetaTags.push({ name: "twitter:title", content: seo.twitter.title });
  if (seo?.twitter?.description) additionalMetaTags.push({ name: "twitter:description", content: seo.twitter.description });
  if (twitterImage) additionalMetaTags.push({ name: "twitter:image", content: toAbsoluteUrl(twitterImage) });

  return {
    title: seo.title,
    description: seo.description,
    canonical: seo.openGraph?.url,
    openGraph: {
      ...seo.openGraph,
      images: seo.openGraph?.images?.map(img => ({
        ...img,
        url: toAbsoluteUrl(img.url)
      })) || []
    },
    twitter: {
      cardType: seo.twitter?.card || "summary_large_image",
      site: seo.twitter?.site || "@BritFintech",
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
