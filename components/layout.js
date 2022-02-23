import { Box, Flex, Text, Link as A } from 'rebass'
import { Styled, useColorMode } from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

export default props => {
  const [mode, setMode] = useColorMode()

  return (
    <>

      <Flex
        as="header"
        variant="container"
        sx={{
          color: '#000000',
          px: 3,
          py: 3
        }}
      >
        <Avatar light size={44}  sx={{ml:'auto',mr:1}}/>
        <Link href="/">
          <A variant="styles.navitem" 
            sx={{
                fontFamily: 'Orbitron',
                  mr: 'auto'
            }}>Drive Forward</A>
        </Link>
        <Flex sx={{ mx:'auto'}}>
       <A
          href="#schedule"
          variant="styles.navitem"
                  sx={{ fontSize:'80%',mr:3}}

        >
          Schedule
        </A>
       <A
          href="#venue"
          variant="styles.navitem"
         sx={{ mx:'auto',fontSize:'80%',mr:3}}
       >
          Venue
        </A>
       <A
          href="#faq"
          variant="styles.navitem"
                  sx={{  fontSize:'80%', mx:'auto',mr:3}}

       >
          FAQs
        </A>
       <A
          href="#contact"
          variant="styles.navitem"
                  sx={{ fontSize:'80%',mx:'auto'}}

        >
          Contact 
        </A>
        </Flex>
      </Flex>
      <Box
        as="main"
        sx={{
          width: '100%',
          mx: 'auto',
          flex: '1 1 auto'
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto'
        }}
      >
        <Box
          variant="container"
          sx={{
            // display: 'grid',
            // gridGap: [3, 4],
            // gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
            fontSize: 0,
            py: 3
          }}
        >
          <Flex id="contact" sx={{ justifyContent: 'center' }}>
            <A
              href="#"
              title="Twitter"
              sx={{ mx: 2 }}
            >
              <Icon glyph="twitter" size={36} />
            </A>
            <A href="#" title="GitHub" sx={{ mx: 2 }}>
              <Icon glyph="github" size={36} />
            </A>
            <A
              href="https://www.instagram.com/driveforwardhackathon/"
              title="Instagram"
              sx={{ mx: 2 }}
            >
              <Icon glyph="instagram" size={36} />
            </A>
            <A href="mailto:info@hackknight.com" title="Email" sx={{ mx: 2 }}>
              <Icon glyph="email" size={36} />
            </A>
          </Flex>
          <Box
            sx={{
              mt: [3, 4],
              textAlign: 'center',
              a: { fontSize: 1 }
            }}
          >
            Site by 
            <A
              href="https://dinaelhanan.com"
              target="_blank"
              variant="styles.navitem"
              sx={{margin: 1}}
            >
              @dinaelhanan
            </A>💖 
          
          </Box>
        </Box>
      </Box>
    </>
  )
}
