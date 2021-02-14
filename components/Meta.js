import React from 'react';
import Head from 'next/head';

function Meta({ title, keywords, description }) {
  console.log('title in here', title);
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <mata name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Enriques NextJS Site',
  keywords: 'webdev, enrique',
  description: 'Just playing around',
};

export default Meta;
