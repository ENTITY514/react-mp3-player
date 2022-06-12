import style from'./page.module.css';
import Music_Box from './Components/Music_Box/music-box'
import Music_List from './Components/Music_List/music-list'
import Buttons from './Components/Buttons/buttons'

function Page({music_play_id, music_object, list_open, music_lists, click_play, click_pause, click_list_item, right_click, left_click, isPlay, isListOpen, currentTime, duration}) {
  if(isListOpen){
    return (
      <div>
        <div className={style.container_two}>
          <Music_List music_play_id={music_play_id} music_lists={music_lists} click_list_item={click_list_item}/>
          <Music_Box music_object={music_object} isPlay={isPlay} click_play={click_play} right_click={right_click} left_click={left_click} click_pause={click_pause} currentTime={currentTime} duration={duration}/>
          <Buttons music_object={music_object}/>
        </div>
      </div>
    );
  }
  else{
    return (
      <div>
        <div className={style.container_one}>
          <Music_Box music_object={music_object} isPlay={isPlay} click_play={click_play} right_click={right_click} left_click={left_click} click_pause={click_pause}/>
        </div>
      </div>
    );
  }
}

export default Page;
