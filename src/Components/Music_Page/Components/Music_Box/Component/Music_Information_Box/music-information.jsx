import style from'./music-information.module.css';
import Button from './Components/button'
import Duration from './Components/Duration'

function Music_Information({name, click_play, click_pause, right_click, left_click, isPlay, currentTime, duration}) {
  if(isPlay){
    return (
      <div className={style.information_box}>
        <div className={style.name}>{name}</div>
        <Duration currentTime={currentTime} duration={duration}/>
        <div className={style.buttons}>
          <Button action={left_click} icon_src='button_icon/music_player.png' isRotate={false}/>
          <Button action={click_pause} icon_src='button_icon/pause.png' isRotate={false}/>
          <Button action={right_click} icon_src='button_icon/music_player.png' isRotate={true}/>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={style.information_box}>
        <div className={style.name}>{name}</div>
        <Duration currentTime={currentTime} duration={duration}/>
        <div className={style.buttons}>
        <Button action={left_click} icon_src='button_icon/music_player.png' isRotate={false}/>
        <Button action={click_play} icon_src='button_icon/play.png' isRotate={false} isPlayButton={true}/>
        <Button action={right_click} icon_src='button_icon/music_player.png' isRotate={true}/>
        </div>
      </div>
    );
  }
}

export default Music_Information;
