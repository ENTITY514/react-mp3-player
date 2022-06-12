import style from'./duration.module.css';

function Duration({currentTime, duration}) {
  const get_percent_of_time= (currentTime, duration) => {
    console.log(duration)
    console.log(currentTime)
    return (String((currentTime/duration)*100)+"%")
  }
  const get_duration = (duration) => {
    if(isNaN(duration)){
      return
    }
    let new_dur = Math.trunc(duration)
    let minut = Math.trunc(new_dur/60)
    let second = new_dur - 60*minut
    if(second<10){
      second = "0"+(new_dur - 60*minut)
    }
    let durati = String(minut + ":" + second)
    return durati
  }

  return (
    <div className={style.container}>
      <div className={style.line}>
        <div className={style.line_duration} style={{width: get_percent_of_time(currentTime, duration)}}></div>
        <div className={style.point} style={{marginLeft: get_percent_of_time(currentTime, duration)}}>
        </div>
      </div>
      <div className={style.duration}>{get_duration(duration)}</div>
    </div>
  );
}

export default Duration;
