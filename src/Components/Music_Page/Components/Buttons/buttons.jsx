import style from'./buttons.module.css';
import Button from './Button/button'

function Buttons({music_object}) {
  return (
        <div className={style.container}>
          <Button icon_src='button_icon/arrow-left.png' isRotate={true}/>
          <Button icon_src='button_icon/settings.png'/>
          <a href = {music_object.youtube_link} target="_blank" ><Button icon_src='button_icon/youtube.png'/></a>
          <a href = {music_object.ncs_link} target="_blank" ><Button icon_src='button_icon/cloud-download.png'/></a>
          <Button icon_src='button_icon/github.png'/>
          <Button icon_src='button_icon/home.png'/>
        </div>
  );
}

export default Buttons;
