import { Image } from 'rebass'

export default ({ size = 32, light = false, ...props }) => (
  <Image
    {...props}
    src={`https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/sfcicon.png?v=1645403303022`}
    alt="HacKnight avatar"
    width={size}
    height={size}
  />
)
