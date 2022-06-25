import style from './page.module.css';
import Music_Box from './Components/Music_Box/music-box'
import Music_List from './Components/Music_List/music-list'
import Buttons from './Components/Buttons/buttons'

function Page({ dispatch, music_play_id, music_object, list_open, music_lists, isPlay, isListOpen, currentTime, duration }) {
  return (
    <div className={style.container}>
      <div className={style.list_box}>
        <div className={style.button} onClick={list_open} style={{ backgroundImage: "url(button_icon/menu-button-of-three-horizontal-lines.png)" }}></div>
        <Music_List dispatch={dispatch} music_play_id={music_play_id} music_lists={music_lists} isListOpen={isListOpen} />
      </div>
      <Music_Box dispatch={dispatch} music_object={music_object} isPlay={isPlay} currentTime={currentTime} duration={duration} />
      <Buttons dispatch={dispatch} music_object={music_object} />
    </div>
  );
}

export default Page;
