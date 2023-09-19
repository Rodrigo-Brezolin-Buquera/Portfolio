import Icon from '@/components/Icon'

const SocialMedia = () => {
  return (
    <div className=" flex flex space-x-8 mt-8">
        <Icon img={"/linkedin.svg"} altText={"Linkedin icon"} size={50} />
        <Icon img={"/github.svg"} altText={"Github icon"} size={50} />
        <Icon img={"/whatsapp.svg"} altText={"Whatsapp icon"} size={50} />
    </div>
  )
}

export default SocialMedia