import { Image } from 'rebass'

export default ({ size = 10, light = false, ...props }) => (
  <Image
    {...props}
    src={`https://cdn.glitch.global/c5a0f0ae-5652-4bbd-a8f5-486ad2f1afba/sfclogo.PNG?v=1645484574117`}
    alt="Smart Freight Centre avatar"
    width={100}
    height={30}
  />
)
