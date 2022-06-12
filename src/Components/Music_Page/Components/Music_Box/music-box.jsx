import style from'./music-box.module.css';
import Music_Image from './Component/Music_Image/music-image'
import Music_Information from './Component/Music_Information_Box/music-information'

function Music_Box({music_object, click_play, click_pause, right_click, left_click, isPlay, currentTime, duration}) {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.track_content} >
          <div className={style.name}>Player</div>
          <Music_Image image = {music_object.img} isPlay={isPlay}/>
          <Music_Information name = {music_object.name} isPlay={isPlay} click_play={click_play} click_pause={click_pause} right_click={right_click} left_click={left_click} currentTime={currentTime} duration={duration}/>
        </div>
      </div>
    </div>
  );
}

export default Music_Box;
