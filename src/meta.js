const siteMetadata = {
  title: "ChainSight",
  description:
    "Launch and verify flexible multi-source oracles in minutes with ChainSight—secure, cost-efficient, self-serve",
  author: "ChainSight",
  siteUrl: "https://chainsight.network",
  image: "https://chainsight.network/ogimage.png",
};

export const meta = () => {
  const metaTitle = `${siteMetadata.title}`;
  const metaDescription = siteMetadata.description;
  const metaImage = siteMetadata.image;

  return `
      <title>${metaTitle}</title>
      <meta name="description" content="${metaDescription}" />
      <meta name="author" content="${siteMetadata.author}" />
      <meta property="og:title" content="${metaTitle}" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="${metaDescription}" />
      <meta property="og:image" content="${metaImage}" />
      <meta property="og:url" content="${siteMetadata.siteUrl}" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${metaTitle}" />
      <meta name="twitter:creator" content="${siteMetadata.author}" />
      <meta name="twitter:description" content="${metaDescription}" />
      <meta property="twitter:image" content="${metaImage}" />
      <link rel="canonical" href="${siteMetadata.siteUrl}" />
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#04040e" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#04040e" />
`;
};
