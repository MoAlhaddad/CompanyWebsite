import React from 'react';
import Head from 'next/head';
import novigoHeadLogo from 'assets/novigo-head-logo.svg';
export default function SEO({
  description = 'startup product landing page',
  author = 'JSM',
  meta,
  title = 'startup landing title',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
  	  <link rel = "icon" type = "image/png" href ={novigoHeadLogo}></link>
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
