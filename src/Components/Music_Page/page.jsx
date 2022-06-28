import style from './page.module.css';
import Music_Box from './Components/Music_Box/music-box'
import Music_List from './Components/Music_List/music-list'
import Info from './Components/Buttons/buttons'
import Tumbler from './Components/Tumbler/tumbler'
import './music_page_animations.css'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function Page({ dispatch, music_play_id, music_object, toggle, music_lists, isPlay, isListOpen, currentTime, duration }) {
  const get_component = (toggle) => {
    if (toggle=="LIST") {
      return (
        <Music_List dispatch={dispatch} music_play_id={music_play_id} music_lists={music_lists} isListOpen={isListOpen} />
      )
    }
    else if(toggle=="PLAY") {
      return (
        <Music_Box dispatch={dispatch} music_object={music_object} isPlay={isPlay} currentTime={currentTime} duration={duration} />
      )
    }
    else if(toggle=="INFO") {
      return (
        <Info dispatch={dispatch} music_object={music_object} />
      )
    }
  }
  return (
    <div className={style.container}>
      <div className={style.content}>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition timeout={480} classNames={"music_box"} key={toggle}>
            <div>
              {get_component(toggle)}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <Tumbler dispatch={dispatch} />
    </div>
  );
}

export default Page;
