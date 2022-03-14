import { Box, Button, Flex, Link } from 'rebass'


export const Banner = props => (
  <Box
    sx={{
      backgroundImage:'https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/main_image_bus.jpg?v=1645403241417',
      color: 'white',
      fontFamily: 'Segoe UI',
      textShadow: '0 2px 4px rgba(0,0,0,.I 75)',
      py: [4, 5, 6, 7],
      mb: [4, 5],
      alignItems: 'center'

    }}
  >
    <Box
      {...props}
      variant="container"
      sx={{
        maxWidth: 'wide',
        textAlign: 'center',
        h1: {
          fontSize: [5, 6, 7],
          lineHeight: 'tight',
            fontFamily: 'Orbitron',
          mt: [0, -2, -4, -5],
          mb: 3
        },
        h2: {
          fontSize: [2, 3, 4],
          fontFamily: 'Segoe UI',
          lineHeight: 'body',
          fontWeight: 'body',
          color: '#1985C5',
          mb: 2,
          a: {
              color: '#1985C5'
          }
        },
        p: {
          mb: 4         
        },
        ul: {
          listStyle: 'none',
          display: 'flex',
          p: 0,
          m: 0
        },
        li: {
          mr: 3
        },
          a: {
          color: '#1985C5'
          }
      }}
    />
    <Flex
      sx={{
          justifyContent: 'center'
      }}
      >
      <Link href="https://docs.google.com/forms/d/1VDTavQTA5wQOQloMfL7S4sDQLRMRTZ3Mu1-HxxbDG7k/">
        <Button
          sx={{
          bg: '#1985C5',
          color: 'white',
          fontFamily: 'Segoe UI',
          marginBottom: 3, 
          }}>Register Now</Button>
      </Link>
    </Flex>
  </Box>
)

 
export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: wide ? 'wide' : 'container',
      h2: {
        fontSize: [3, 4, 5],
        mt: [4, 5],
        mb: [2, 3]
      },
      h3: {
        fontSize: [2, 3, 4],
        mt: [3, 4],
        mb: [2, 3],
      },
        a: {
          color: '#1985C5',
        textDecoration: 'none'
        },
          p: {
            fontSize: [1, 2],
              fontFamily: 'Segoe UI'
          },
      ...props.sx,
      
    }}
  />
)

export const Callout = props => (
  <Box
    {...props}
    sx={{
      bg: 'elevated',
      px: [3, 4],
      py: [2, 3, 4],
      borderRadius: 'extra',
      boxShadow: 'sheet',
      mb: [4, 5],
      h2: {
        fontFamily: 'Segoe UI',
        lineHeight: 'body',
        fontWeight: 'body',
        mb: 2},
        fontSize: [2, 3],
      ...props.sx
    }}
  />
)

export const Venue = props => (
  <Box
    {...props}
    sx={{
      bg: 'elevated',
      px: [3, 4],
      py: [2, 3, 4],
      borderRadius: 'extra',
      boxShadow: 'sheet',
      mb: [4, 5],
      h2: {
        fontFamily: 'Segoe UI',
        lineHeight: 'body',
        fontWeight: 'body',
        mb: 2},
        fontSize: [1, 2],
      ...props.sx
    }}>
Drive Forward will be running on <Link href="https://www.gather.town/">gather.town</Link>, a platform that allows for the hackathon experience of walking around from booth to booth! As a back-up to this platform and to allow you to discuss with other participants, mentors, and organizers, we also have a discord!  
  <Flex
      sx={{
          justifyContent: 'center'
      }}
      >
      <Link href="https://discord.gg/MWeeSWcd">
        <Button
          sx={{
          bg: '#1985C5', 
          color: 'white',
          fontFamily: 'Segoe UI',
          mt: '1rem'
          }}>Join the Discord</Button>
      </Link>
    </Flex>
  </Box>
)

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: '#1985C5',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'Segoe UI',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 0
      },
      ...props.sx
    }}
  />
)
export const Gallery = props => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', null, 'repeat(2, 1fr)'],
      gridGap: [2, 3, null, 4],
      width: '100%',
      px: [2, 3, null, 4],
      mb: [2, 3, 4, 5],
      'ul, ol': {
        textAlign: [null, 'right'],
        listStyle: 'none',
        pl: 0
      },
      'p, ol, ul': {
        maxWidth: 1080 / 2,
        p: [2, 3]
      },
      'p, li': {
        color: 'muted',
        fontFamily: 'Segoe UI',
        fontSize: [1, 2],
        mt: 0,
        mb: 2
      },
      ...props.sx
    }}
  />
)

export const Team = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      li: {
        display: 'flex',
        alignItems: 'center'
      },
      p: {
        my: 0,
        '&:first-child': {
          lineHeight: 0
        }
      },
      strong: {
        fontSize: [1, 2]
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'Segoe UI',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: [0, 1],
        my: 0,
        a: {
          color: '#1985C5'
        }
      },
      img: {
        flexShrink: 'none',
        borderRadius: 'circle',
        objectFit: 'cover',
        objectPosition: 'center',
        width: [64, 72],
        height: [64, 72],
        mr: 3
      },
      ...props.sx
    }}
  />
)
