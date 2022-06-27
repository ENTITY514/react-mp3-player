import style from './music-list.module.css';

function Music_List({ dispatch, music_lists, music_play_id }) {
  const music_list = music_lists.map((item) => {
    if (music_play_id == item.id) {
      return (
        <div key={item.id.toString()} id={item.id} className={style.active_item} onClick={(e) => { dispatch({type: "CLICK_LIST_ITEM", value_id: e.target.id}) }}>{item.id + 1}. {item.name}</div>
      )
    }
    else {
      return (
        <div key={item.id.toString()} id={item.id} className={style.item} onClick={(e) => { dispatch({type: "CLICK_LIST_ITEM", value_id: e.target.id}) }}>{item.id + 1}. {item.name}</div>
      )
    }
  });

  return (
      <div className={style.container}>
        <h2 className={style.name}>Playlist</h2>
        <div className={style.wrap}>
          {music_list}
        </div>
      </div>
  );
}

export default Music_List;
