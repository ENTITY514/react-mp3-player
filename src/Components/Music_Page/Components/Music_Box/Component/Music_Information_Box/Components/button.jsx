import style from'./buttons.module.css';

function Button({action, icon_src, isRotate, isPlayButton}) {
  const get_deg = (isRotate) => {
    if(isRotate){
      return 180
    }
    else{
      return 0
    }
  }
  if(isPlayButton){
    return (
          <div className={style.button_wrapper} onClick = {action}>
            <div className={style.button} style={{backgroundImage: "url(" + icon_src +")", transform: "rotate(" + get_deg(isRotate) + "deg)", marginLeft: "13px"}}>
            </div>
          </div>
    );
  }
  else{
    return (
          <div className={style.button_wrapper} onClick = {action}>
            <div className={style.button} style={{backgroundImage: "url(" + icon_src +")", transform: "rotate(" + get_deg(isRotate) + "deg)" }}>
            </div>
          </div>
    );
  }
}

export default Button;
