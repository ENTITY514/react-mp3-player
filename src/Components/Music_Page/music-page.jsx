import Page from './page'
import { useState, useRef, useEffect } from 'react'

function Music_Page() {
  let trackRef = useRef()

  let [music_play_id, set_music_play_id] = useState(0)
  let [isPlay, set_isPlay] = useState(false)
  let [isListOpen, set_isListOpen] = useState(true)
  let [currentTime, set_currentTime] = useState(0)
  let [duration, set_duration] = useState()

  let music_lists = [{ id: 0, name: 'Alex Holmes & Dark Point - You Are [NCS Release]', img: 'img/AlexHolmes&DarkPoint-YouAre[NCSRelease].jpeg', src: 'music/Alex Holmes & Dark Point - You Are [NCS Release].mp3', youtube_link: "https://youtu.be/9qnRTwfIjE4", ncs_link: "http://ncs.io/YouAre" },
  { id: 1, name: 'Amadeus-legendary-goaul5peld', img: 'img/Amadeus-legendary-goaul5peld.jpeg', src: 'music/Amadeus-legendary-goaul5peld.mp3', youtube_link: "https://youtu.be/cTlshvPrIZo", ncs_link: "https://push.fm/fl/ckynq2fc" },
  { id: 2, name: 'Arlow - Feel So Lucky [NCS Release]', img: 'img/Arlow-FeelSoLucky[NCSRelease].jpeg', src: 'music/Arlow - Feel So Lucky [NCS Release].mp3', youtube_link: "https://youtu.be/1KSiW3GT72c", ncs_link: "http://ncs.io/FeelSoLucky" },
  { id: 3, name: 'Arlow - Freefall [NCS Release]', img: 'img/Arlow-Freefall[NCSRelease].jpeg', src: 'music/Arlow - Freefall [NCS Release].mp3', youtube_link: "https://youtu.be/SxfSpqFWJAg", ncs_link: "http://ncs.io/AFreefall" },
  { id: 4, name: 'Arlow - How Do You Know [NCS Release]', img: 'img/Arlow-HowDoYouKnow[NCSRelease].jpeg', src: 'music/Arlow - How Do You Know [NCS Release].mp3', youtube_link: "https://youtu.be/2mcwNXVHqlI", ncs_link: "http://ncs.io/HowDoYouKnow" },
  { id: 5, name: 'Besomorph x EMM - Afterlife [NCS Release]', img: 'img/BesomorphxEMM-Afterlife[NCSRelease].jpeg', src: 'music/Besomorph x EMM - Afterlife [NCS Release].mp3', youtube_link: "https://youtu.be/2mcwNXVHqlI", ncs_link: "http://ncs.io/HowDoYouKnow" },
  { id: 6, name: 'Brook Xiao - Fire [NCS Release]', img: 'img/BrookXiao-Fire[NCSRelease].jpeg', src: 'music/Brook Xiao - Fire [NCS Release].mp3', youtube_link: "https://youtu.be/2W3Y9KMgNw0", ncs_link: "http://ncs.io/Fire" },
  { id: 7, name: 'Diviners X Riell - Slow', img: 'img/DivinersXRiell-Slow.jpeg', src: 'music/Diviners X Riell - Slow.mp3', youtube_link: "https://youtu.be/kPMLbSXM97U", ncs_link: "http://ncs.io/Slow" },
  { id: 8, name: 'Elektronomia - Breeze [NCS Release]', img: 'img/Elektronomia-Breeze[NCSRelease].jpeg', src: 'music/Elektronomia - Breeze [NCS Release].mp3', youtube_link: "https://youtu.be/abYP-NPLTbw", ncs_link: "http://ncs.lnk.to/Breeze" },
  { id: 9, name: '2 Souls - Lonely (ft. Nara) [NCS Release]', img: 'img/SoulsNaraLonely.jpeg', src: 'music/SoulsNaraLonely.mp3', youtube_link: "https://youtu.be/FyFGUMyoias", ncs_link: "http://ncs.io/Lonely" }]

  useEffect(() => {
    setTimeout(() => {
      set_currentTime(trackRef.current.currentTime)
    }, 500)
    set_duration(trackRef.current.duration)
  })

  const right_click = () => {
    if (music_play_id - 1 + 2 < music_lists.length) {
      set_music_play_id(music_play_id - 1 + 2)
      trackRef.current.src = music_lists[music_play_id].src
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
      trackRef.current.src = music_lists[music_play_id].src
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
    trackRef.current.src = music_lists[music_play_id].src;
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
      <audio ref={trackRef} id="track" src={music_lists[music_play_id].src}></audio>
      <Page music_lists={music_lists} music_play_id={music_play_id} list_open={list_open} isListOpen={isListOpen} isPlay={isPlay} click_play={click_play} click_pause={click_pause} click_list_item={click_list_item} right_click={right_click} left_click={left_click} music_object={music_lists[music_play_id]} currentTime={currentTime} duration={duration} />
    </div>
  );
}

export default Music_Page;
