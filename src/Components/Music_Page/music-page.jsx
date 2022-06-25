import Page from './page'
import { useState, useRef, useEffect } from 'react'

function Music_Page({ music_list }) {
  let trackRef = useRef()

  let [music_play_id, set_music_play_id] = useState(0)
  let [isPlay, set_isPlay] = useState(false)
  let [isListOpen, set_isListOpen] = useState(true)
  let [currentTime, set_currentTime] = useState(0)
  let [duration, set_duration] = useState()

  const dispatch = (action) => {
    switch (action.type) {
      case "RIGHT_CLICK":
        right_click();
        break;
      case "LEFT_CLICK":
        left_click()
        break;
      case "CLICK_LIST_ITEM":
        list_item_click(action.value_id)
        break;
      case "CLICK_PAUSE":
        click_pause()
        break;
      case "CLICK_PLAY":
        click_play()
        break;
      case "LIST_OPEN":
        set_isListOpen(!isListOpen)
        break;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      set_currentTime(trackRef.current.currentTime)
      if (trackRef.current.duration == trackRef.current.currentTime) { right_click() }
    }, 300)
    set_duration(trackRef.current.duration)
  })

  const right_click = () => {
    if (music_play_id - 1 + 2 < music_list.length) {
      set_music_play_id((prev) => prev - 1 + 2)
      trackRef.current.src = music_list[music_play_id].src
      trackRef.current.currentTime = 0
      if (isPlay) {
        setTimeout(function() { trackRef.current.play(); }, 100);
      }
      setTimeout(function() {
        set_duration(trackRef.current.duration);
        set_currentTime(trackRef.current.currentTime);
      }, 100);
    }
    else {
      return
    }
  }
  const left_click = () => {
    if (music_play_id - 1 >= 0) {
      set_music_play_id((prev) => prev - 1)
      trackRef.current.src = music_list[music_play_id].src
      trackRef.current.currentTime = 0
      if (isPlay) {
        setTimeout(function() { trackRef.current.play(); }, 100);
      }
      setTimeout(function() {
        set_duration(trackRef.current.duration);
        set_currentTime(trackRef.current.currentTime);
      }, 100);
    }
    else {
      return
    }
  }

  const list_item_click = (id) => {
    set_music_play_id(id)
    trackRef.current.src = music_list[music_play_id].src;
    trackRef.current.currentTime = 0;
    if (isPlay) {
      setTimeout(function() { trackRef.current.play(); }, 100);
    }
    setTimeout(function() { set_duration(trackRef.current.duration); }, 100);
  }
  const click_pause = () => {
    set_isPlay(false)
    trackRef.current.pause()
  }
  const click_play = () => {
    set_isPlay(true)
    trackRef.current.play()
  }

  const list_open = () => {
    set_isListOpen(!isListOpen)
  }

  return (
    <div>
      <audio ref={trackRef} id="track" src={music_list[music_play_id].src}></audio>
      <Page dispatch={dispatch} music_lists={music_list} music_play_id={music_play_id} list_open={list_open} isListOpen={isListOpen} isPlay={isPlay} click_play={click_play} click_pause={click_pause} right_click={right_click} left_click={left_click} music_object={music_list[music_play_id]} currentTime={currentTime} duration={duration} />
    </div>
  );
}

export default Music_Page;
