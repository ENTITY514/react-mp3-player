import style from './tumbler.module.css';
import './tumbler-animations.css'
import Button from './Components/Button/button'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

function Tumbler({ dispatch }) {
  return (
    <div className={style.container}>
    <Button action = {()=>{dispatch({type: "CHANGE_TOGGLE", value: "LIST"})}} icon_src={'/button_icon/menu-button-of-three-horizontal-lines.png'}/>
    <Button action = {()=>{dispatch({type: "CHANGE_TOGGLE", value: "PLAY"})}} icon_src={'/button_icon/play.png'}/>
    <Button action = {()=>{dispatch({type: "CHANGE_TOGGLE", value: "INFO"})}} icon_src={'/button_icon/information.png'}/>
    </div>
  );
}

export default Tumbler;
