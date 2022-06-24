import style from './playlist_card.module.css';
import { Link } from 'react-router-dom'

function Playlist_card({ name, length, image_source}) {
  return (
    <div className={style.container}>
      <div className={style.image} style={{ backgroundImage: "url(" + image_source + ")" }}></div>
      <div className={style.information_box}>
        <div className={style.name_box}>
          <h4 className={style.name}>{name}</h4>
          <h4 className={style.length}>{length}</h4>
        </div>
        <Link className={style.link} to={"/PlayList_" + name}><div className={style.play}>Play</div></Link>
      </div>
    </div>
  )
}

export default Playlist_card;
