import style from './page.module.css';
import Music_Box from './Components/Music_Box/music-box'
import Music_List from './Components/Music_List/music-list'
import './music_page_animations.css'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function Page({ dispatch, music_play_id, music_object, toggle, music_lists, isPlay, isListOpen, currentTime, duration }) {
  const get_component = (toggle) => {
    if (toggle) {
      return (
        <Music_List dispatch={dispatch} music_play_id={music_play_id} music_lists={music_lists} isListOpen={isListOpen} />
      )
    }
    else {
      return (
        <Music_Box dispatch={dispatch} music_object={music_object} isPlay={isPlay} currentTime={currentTime} duration={duration} />
      )
    }
  }
  return (
    <div className={style.container}>
      <div className={style.content}>
        <SwitchTransition mode={"out-in"}>
          <CSSTransition timeout={980} classNames={"music_box"} key={toggle}>
            <div onClick={() => { dispatch({ type: "CHANGE_TOGGLE" }) }}>
              {get_component(toggle)}
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default Page;
