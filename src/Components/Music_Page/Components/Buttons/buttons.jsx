import style from './buttons.module.css';
import Button from './Button/button'
import { Link } from "react-router-dom"

function Buttons({ music_object }) {
  return (
    <div className={style.container}>
      <Link to={"/"}><Button icon_src='button_icon/arrow-left.png' isRotate={true} /></Link>
      <Button icon_src='button_icon/settings.png' />
      <a href={music_object.youtube_link} target="_blank" ><Button icon_src='button_icon/youtube.png' /></a>
      <a href={music_object.ncs_link} target="_blank" ><Button icon_src='button_icon/cloud-download.png' /></a>
      <a href="https://github.com/ENTITY514/react-mp3-player" target="_blank" ><Button icon_src='button_icon/github.png' /></a>
      <Button icon_src='button_icon/home.png' />
    </div>
  );
}

export default Buttons;
