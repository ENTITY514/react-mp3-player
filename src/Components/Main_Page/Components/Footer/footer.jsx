import style from "./footer.module.css"
import Icon from './Icon/icon'

const Footer = () => {
  return (
    <footer className={style.container}>
      <Icon icon_src="icons/youtube.png"/>
      <Icon icon_src="icons/instagram.png"/>
      <Icon icon_src="icons/vk.png"/>
      <Icon icon_src="icons/free-icon-facebook-174848.png"/>
      <Icon icon_src="icons/premium-icon-twitter-3536424.png"/>
    </footer>
  )
}

export default Footer;
