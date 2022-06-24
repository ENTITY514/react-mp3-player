import style from './music-list.module.css';
import { CSSTransition } from 'react-transition-group'
import './container.css'

function Music_List({ music_lists, click_list_item, music_play_id, isListOpen }) {
  console.log(isListOpen)

  const music_list = music_lists.map((item) => {
    if (music_play_id == item.id) {
      return (
        <div key={item.id.toString()} id={item.id} className={style.active_item} onClick={(e) => { click_list_item(e.target.id) }}>{item.id + 1}. {item.name}</div>
      )
    }
    else {
      return (
        <div key={item.id.toString()} id={item.id} className={style.item} onClick={(e) => { click_list_item(e.target.id) }}>{item.id + 1}. {item.name}</div>
      )
    }
  });

  return (
    <CSSTransition in={isListOpen} timeout={500} classNames={"container_music_list"}>
      <div className="container_music_list">
        <div className={style.name}>Playlist</div>
        <div className={style.wrap}>
          {music_list}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Music_List;
