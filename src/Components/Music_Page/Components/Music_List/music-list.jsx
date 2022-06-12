import style from'./music-list.module.css';

function Music_List({music_lists,click_list_item, music_play_id}) {

  const music_list = music_lists.map((item)=>{
    if(music_play_id==item.id){
      return(
        <div key={item.id.toString()}id={item.id} className={style.active_item} onClick={(e) => {click_list_item(e.target.id)}}>{item.id+1}. {item.name}</div>
      )
    }
    else{
      return(
        <div key={item.id.toString()}id={item.id} className={style.item} onClick={(e) => {click_list_item(e.target.id)}}>{item.id+1}. {item.name}</div>
      )
    }
  });

  return (
    <div className={style.container}>
      <div className={style.name}>Playlist</div>
      {music_list}
    </div>
  );
}

export default Music_List;
