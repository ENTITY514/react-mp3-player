import style from './duration.module.css';

function Duration({ currentTime, duration }) {
  let percent_duration = 0

  const get_percent_of_duration = (currentTime, duration) => {
    return (String((currentTime / duration) * 100) + "%")
  }

  const get_duration = (duration) => {
    if (isNaN(duration)) {
      return
    }
    let int_duration = Math.trunc(duration)
    let minut = Math.trunc(int_duration / 60)
    let second = int_duration - 60 * minut
    if (second < 10) {
      second = "0" + (int_duration - 60 * minut)
    }
    let durati = String(minut + ":" + second)
    return durati
  }

  percent_duration = get_percent_of_duration(currentTime, duration)

  return (
    <div className={style.container}>
      <div className={style.line}>
        <div className={style.line_duration} style={{ width: get_percent_of_duration(currentTime, duration) }}></div>
        <div className={style.point} style={{ marginLeft: percent_duration }}>
        </div>
      </div>
      <div className={style.duration}>{get_duration(duration)}</div>
    </div>
  );
}

export default Duration;
