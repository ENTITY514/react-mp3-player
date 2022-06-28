import style from './buttons.module.css';
import Button from './Button/button'
import { Link } from "react-router-dom"

function Info({ dispatch, music_object }) {
  return (
    <div className={style.container}>

      <h2 className={style.header}>Info and links</h2>

      <div className={style.links}>
        <div className={style.links_line}>
          <Link to={"/"}><Button icon_src='button_icon/arrow-left.png' isRotate={true} /></Link>
          <div className={style.description}>Back to choice a playlist</div>
        </div>
        <div className={style.links_line}>
          <a href={music_object.youtube_link} target="_blank" ><Button icon_src='button_icon/youtube.png' /></a>
          <div className={style.description}>Youtube links</div>
        </div>
        <div className={style.links_line}>
          <a href={music_object.ncs_link} target="_blank" ><Button icon_src='button_icon/cloud-download.png' /></a>
          <div className={style.description}>Download from cloud</div>
        </div>
        <div className={style.links_line}>
          <a href="https://github.com/ENTITY514/react-mp3-player" target="_blank" ><Button icon_src='button_icon/github.png' /></a>
          <div className={style.description}>Github</div>
        </div>
      </div>
      
    </div>
  );
}

export default Info;
