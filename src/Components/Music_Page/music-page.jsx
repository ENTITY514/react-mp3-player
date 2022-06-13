import Page from './page'
import { useState, useRef, useEffect } from 'react'

function Music_Page({music_list}) {
  let trackRef = useRef()

  let [music_play_id, set_music_play_id] = useState(0)
  let [isPlay, set_isPlay] = useState(false)
  let [isListOpen, set_isListOpen] = useState(true)
  let [currentTime, set_currentTime] = useState(0)
  let [duration, set_duration] = useState()

  useEffect(() => {
    setTimeout(() => {
      set_currentTime(trackRef.current.currentTime)
    }, 500)
    set_duration(trackRef.current.duration)
  })

  const right_click = () => {
    if (music_play_id - 1 + 2 < music_list.length) {
      set_music_play_id(music_play_id - 1 + 2)
      trackRef.current.src = music_list[music_play_id].src
      trackRef.current.currentTime = 0
      if (isPlay) {
        setTimeout(function() { trackRef.current.play(); }, 1000);
      }
      setTimeout(function() { set_duration(trackRef.current.duration); }, 100);
    }
    else {
      return
    }
  }
  const left_click = () => {
    if (music_play_id - 1 >= 0) {
      set_music_play_id(music_play_id - 1)
      trackRef.current.src = music_list[music_play_id].src
      trackRef.current.currentTime = 0
      if (isPlay) {
        setTimeout(function() { trackRef.current.play(); }, 1000);
      }
      setTimeout(function() { set_duration(trackRef.current.duration); }, 100);
    }
    else {
      return
    }
  }
  const click_list_item = (id) => {
    set_music_play_id(id)
    trackRef.current.src = music_list[music_play_id].src;
    trackRef.current.currentTime = 0;
    if (isPlay) {
      setTimeout(function() { trackRef.current.play(); }, 1000);
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
      <Page music_lists={music_list} music_play_id={music_play_id} list_open={list_open} isListOpen={isListOpen} isPlay={isPlay} click_play={click_play} click_pause={click_pause} click_list_item={click_list_item} right_click={right_click} left_click={left_click} music_object={music_list[music_play_id]} currentTime={currentTime} duration={duration} />
    </div>
  );
}

export default Music_Page;
