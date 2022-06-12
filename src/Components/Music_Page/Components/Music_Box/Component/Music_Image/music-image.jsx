import style from'./music-image.module.css';

function Music_Image({image,isPlay}) {
  if(isPlay){
    return (
      <div className={style.image_wrapper}>
        <div className={style.image} style={{ backgroundImage: "url(" + image + ")", animationPlayState: "running"}}></div>
      </div>
    );
  }
  else{
    return (
      <div className={style.image_wrapper}>
        <div className={style.image} style={{ backgroundImage: "url(" + image + ")", animationPlayState: "paused"}}></div>
      </div>
    );
  }
}

export default Music_Image;
