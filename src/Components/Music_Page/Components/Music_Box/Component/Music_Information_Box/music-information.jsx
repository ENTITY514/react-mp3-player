import style from'./music-information.module.css';
import Button from './Components/button'
import Duration from './Components/Duration'

function Music_Information({name,dispatch, isPlay, currentTime, duration}) {
  if(isPlay){
    return (
      <div className={style.information_box}>
        <div className={style.name}>{name}</div>
        <Duration dispatch={dispatch} currentTime={currentTime} duration={duration}/>
        <div className={style.buttons}>
          <Button action={()=>{dispatch({type:"LEFT_CLICK"})}} icon_src='button_icon/music_player.png' isRotate={false}/>
          <Button action={()=>{dispatch({type:"CLICK_PAUSE"})}} icon_src='button_icon/pause.png' isRotate={false}/>
          <Button action={()=>{dispatch({type:"RIGHT_CLICK"})}} icon_src='button_icon/music_player.png' isRotate={true}/>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={style.information_box}>
        <div className={style.name}>{name}</div>
        <Duration dispatch={dispatch} currentTime={currentTime} duration={duration}/>
        <div className={style.buttons}>
        <Button action={()=>{dispatch({type:"LEFT_CLICK"})}} icon_src='button_icon/music_player.png' isRotate={false}/>
        <Button action={()=>{dispatch({type:"CLICK_PLAY"})}} icon_src='button_icon/play.png' isRotate={false} isPlayButton={true}/>
        <Button action={()=>{dispatch({type:"RIGHT_CLICK"})}} icon_src='button_icon/music_player.png' isRotate={true}/>
        </div>
      </div>
    );
  }
}

export default Music_Information;
