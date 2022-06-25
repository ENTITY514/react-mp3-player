import style from './duration.module.css';
import './duration-input-style.css'
import { useRef, useEffect } from 'react'

function Duration({ dispatch, currentTime, duration }) {
  let duration_ref = useRef()

  useEffect(() => {
    duration_ref.current.value = Math.round((currentTime / duration) * 100)
  })

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

  return (
    <div className={style.container}>
      <input type="range" min="0" max="100" step="1" ref={duration_ref} onChange={(e) => { dispatch({ type: "CHANGE_CURRENT_TIME", value: e.target.value }) }} />
      <div className={style.duration}>{get_duration(duration)}</div>
    </div>
  );
}

export default Duration;
