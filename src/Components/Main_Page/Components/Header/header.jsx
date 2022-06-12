import style from './header.module.css';

function Header({ }) {
  return (
    <div className={style.container}>
      <h1 className={style.name}>Your playlists</h1>
    </div>
  )
}

export default Header;
