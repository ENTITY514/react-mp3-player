import style from './main.module.css';
import Playlist_card from './Playlist_card/playlist_card'

function Main({ playlists }) {
  let cards = playlists.map((playlist) => {
    return (
      <Playlist_card key={Math.random().toString().substring(2, 9)} name={playlist.name} length={playlist.length} image_source={playlist.image_source} />
    )
  })
  return (
    <div className={style.container}>
      {cards}
    </div>
  )
}

export default Main;
