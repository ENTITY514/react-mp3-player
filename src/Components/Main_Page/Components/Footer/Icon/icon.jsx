import style from "./icon.module.css"

const Icon = ({ icon_src }) => {
  return (
    <div className={style.container}>
      <div className={style.icon} style={{ backgroundImage: "url("+icon_src+")", position: "absolute", filter: "blur(5px)"  }}></div>
      <div className={style.icon} style={{ backgroundImage: "url("+icon_src+")", position: "absolute"  }}></div>
    </div>
  )
}

export default Icon;
