import Head from 'next/head'

export default ({
  title = 'Drive Forward',
  description = 'On March 19-20th 2022, ontario students are coming together for a fun filled virtual 24-hours to create sustainable projects solving issues in transportation and logistics',
  image = 'https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/sfcicon.png?v=1645403303022',
  url = 'https://driveforward.live'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Drive Forward Hackathon" />
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
      href="https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/sfcicon.png?v=1645403303022"
    />
    
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#fff" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="apple-mobile-web-app-title" content="@driveforward/site" />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'driveforward',
        url: 'https://driveforward.live',
        logo: 'https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/sfcicon.png?v=1645403303022',
        sameAs: [
          
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'info@driveforward.live',
            contactType: 'support',
            url: 'https://driveforward.live'
          }
        ]
      })}}
    />
  </Head>
)

