import Icon from '@/components/Icon'

const SocialMedia = () => {
  return (
    <div className="absolute flex flex-col top-1/3 right-0 pr-4 space-y-4">
        <Icon img={"/linkedin.svg"} altText={"Linkedin icon"} size={40} />
        <Icon img={"/github.svg"} altText={"Github icon"} size={40} />
        <Icon img={"/whatsapp.svg"} altText={"Whatsapp icon"} size={40} />
    </div>
  )
}

export default SocialMedia