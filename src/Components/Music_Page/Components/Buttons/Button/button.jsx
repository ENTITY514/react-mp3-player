import style from'./button.module.css';

function Button({action, icon_src, isRotate}) {
  const get_deg = (isRotate) => {
    if(isRotate){
      return 180
    }
    else{
      return 0
    }
  }
  return (
        <div className={style.button_wrapper}>
          <div className={style.button} onClick = {action} style={{backgroundImage: "url(" + icon_src + ")", transform: "rotate(" + get_deg(isRotate) + "deg)"}}>
          </div>
        </div>
  );
}

export default Button;
