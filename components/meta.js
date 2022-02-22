import Head from 'next/head'

export default ({
  title = 'HacKnight',
  description = 'On November 2019, students are coming together for a fun filled 24-hours in Milton, Ontario, Canada in order to help their communities using technology.',
  image = 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Flogo(3).png?v=1572646181748',
  url = 'https://hackknight.com'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Hack Knight" />
    <meta name="twitter:site" content="#" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <meta name="theme-color" content="#2b34b6" />
    <link
      rel="shortcut icon"
      href="https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2FGroup.svg?v=1572625597700"
    />
    
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#fff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="@hackknight/site" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'hackknight',
        url: 'https://hackknight.com',
        logo: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Flogo(3).png?v=1572646181748',
        sameAs: [
          
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'info@hackknight.com',
            contactType: 'customer support',
            url: 'https://hackknight.com'
          }
        ]
      })}}
    />
  </Head>
)

