import style from './tumbler.module.css';
import Button from './Components/Button/button'

function Tumbler({ dispatch }) {
  return (
    <div className={style.container}>
      <Button action={() => { dispatch({ type: "CHANGE_TOGGLE", value: "LIST" }) }} icon_src={'/button_icon/playlist.png'} />
      <Button action={() => { dispatch({ type: "CHANGE_TOGGLE", value: "PLAY" }) }} icon_src={'/button_icon/tone.png'} />
      <Button action={() => { dispatch({ type: "CHANGE_TOGGLE", value: "INFO" }) }} icon_src={'/button_icon/information.png'} />
    </div>
  );
}

export default Tumbler;
