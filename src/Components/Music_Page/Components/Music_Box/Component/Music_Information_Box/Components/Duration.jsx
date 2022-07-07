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
    let minutes = Math.trunc(int_duration / 60)
    let seconds = int_duration - 60 * minutes
    if (seconds < 10) {
      seconds = "0" + (int_duration - 60 * minutes)
    }
    let new_duration = String(minutes + ":" + seconds)
    return new_duration
  }

  return (
    <div className={style.container}>
      <input type="range" min="0" max="100" step="1" defaultValue="1" ref={duration_ref} onChange={(e) => { dispatch({ type: "CHANGE_CURRENT_TIME", value: e.target.value }) }} />
      <div className={style.duration}>{get_duration(duration)}</div>
    </div>
  );
}

export default Duration;
