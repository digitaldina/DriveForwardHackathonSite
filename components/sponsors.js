import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      ${props => (props.section === 'additionalSupport' ? 128 : 192)}px,
      1fr
    )
  );
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 5 : 3)}rem;
    ${props =>
      props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const data = {
  sponsors: [
    {
      name: 'Smart Freight Centre @ McMaster University',
      link: 'https://smartfreightcentre.ca/',
      image: 'https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/sfclogo.PNG?v=1645484574117'
    },
    {
      name: 'Leading Leaders',
      link: 'https://www.leading-learners.com/',
      image: 'https://leadinglearners.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffb6a9b95-1269-4a9e-9c2f-287e2ebd07e5%2FLeading_Learners_Logo.png?table=block&id=7ed06289-1fdd-4714-80d4-8c6bfbf92a56&spaceId=48b9f00b-4b50-4d41-9df7-58d68d739ec2&width=1790&userId=&cache=v2'
    },
    {
      name: 'Geotab',
      link: 'https://www.geotab.com/',
      image: 'https://www.act-news.com/wp-content/uploads/2020/10/geotab-logofull-colour-cmyk-600x80.png'
    },
    {
      name: 'Gather.town',
      link: 'https://www.gather.town/',
      image: 'https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/gather-logo.png?v=1645637806946'
    }
  ],
  additionalSupport: [
    {
    /*name: 'Hack Club',
      link: 'https://hackclub.com',
      image: 'https://cdn.glitch.com/0ac33e0f-67fc-4d7d-bb15-8c3456d17607%2Fhackclub.png?v=1570570408172'
    */}
    
  ]
}

const Sponsors = props => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} {...props}>
      {data[props.section || 'sponsors'].map(sponsor => (
        <a href={`${sponsor.link}`}>
          <img
            alt={sponsor.name}
            src={sponsor.image}
            key={sponsor.image}
          />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
