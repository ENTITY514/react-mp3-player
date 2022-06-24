import './App.css';
import Music_Page from './Components/Music_Page/music-page'
import Main_Page from './Components/Main_Page/main-page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  let playlists = [
    {
      name: "NCS",
      length: 20,
      image_source: "/img/playlist_bg_ncs.jpg",
      music_list: [{ id: 0, name: 'Alex Holmes & Dark Point - You Are [NCS Release]', img: 'img/AlexHolmes&DarkPoint-YouAre[NCSRelease].jpeg', src: 'music/Alex Holmes & Dark Point - You Are [NCS Release].mp3', youtube_link: "https://youtu.be/9qnRTwfIjE4", ncs_link: "http://ncs.io/YouAre" },
      { id: 1, name: 'Amadeus-legendary-goaul5peld', img: 'img/Amadeus-legendary-goaul5peld.jpeg', src: 'music/Amadeus-legendary-goaul5peld.mp3', youtube_link: "https://youtu.be/cTlshvPrIZo", ncs_link: "https://push.fm/fl/ckynq2fc" },
      { id: 2, name: 'Arlow - Feel So Lucky [NCS Release]', img: 'img/Arlow-FeelSoLucky[NCSRelease].jpeg', src: 'music/Arlow - Feel So Lucky [NCS Release].mp3', youtube_link: "https://youtu.be/1KSiW3GT72c", ncs_link: "http://ncs.io/FeelSoLucky" },
      { id: 3, name: 'Arlow - Freefall [NCS Release]', img: 'img/Arlow-Freefall[NCSRelease].jpeg', src: 'music/Arlow - Freefall [NCS Release].mp3', youtube_link: "https://youtu.be/SxfSpqFWJAg", ncs_link: "http://ncs.io/AFreefall" },
      { id: 4, name: 'Arlow - How Do You Know [NCS Release]', img: 'img/Arlow-HowDoYouKnow[NCSRelease].jpeg', src: 'music/Arlow - How Do You Know [NCS Release].mp3', youtube_link: "https://youtu.be/2mcwNXVHqlI", ncs_link: "http://ncs.io/HowDoYouKnow" },
      { id: 5, name: 'Besomorph x EMM - Afterlife [NCS Release]', img: 'img/BesomorphxEMM-Afterlife[NCSRelease].jpeg', src: 'music/Besomorph x EMM - Afterlife [NCS Release].mp3', youtube_link: "https://youtu.be/2mcwNXVHqlI", ncs_link: "http://ncs.io/HowDoYouKnow" },
      { id: 6, name: 'Brook Xiao - Fire [NCS Release]', img: 'img/BrookXiao-Fire[NCSRelease].jpeg', src: 'music/Brook Xiao - Fire [NCS Release].mp3', youtube_link: "https://youtu.be/2W3Y9KMgNw0", ncs_link: "http://ncs.io/Fire" },
      { id: 7, name: 'Diviners X Riell - Slow', img: 'img/DivinersXRiell-Slow.jpeg', src: 'music/Diviners X Riell - Slow.mp3', youtube_link: "https://youtu.be/kPMLbSXM97U", ncs_link: "http://ncs.io/Slow" },
      { id: 8, name: 'Elektronomia - Breeze [NCS Release]', img: 'img/Elektronomia-Breeze[NCSRelease].jpeg', src: 'music/Elektronomia - Breeze [NCS Release].mp3', youtube_link: "https://youtu.be/abYP-NPLTbw", ncs_link: "http://ncs.lnk.to/Breeze" },
      { id: 9, name: '2 Souls - Lonely (ft. Nara) [NCS Release]', img: 'img/SoulsNaraLonely.jpeg', src: 'music/SoulsNaraLonely.mp3', youtube_link: "https://youtu.be/FyFGUMyoias", ncs_link: "http://ncs.io/Lonely" },
      { id: 10, name: 'Alex Holmes & Dark Point - You Are [NCS Release]', img: 'img/AlexHolmes&DarkPoint-YouAre[NCSRelease].jpeg', src: 'music/Alex Holmes & Dark Point - You Are [NCS Release].mp3', youtube_link: "https://youtu.be/9qnRTwfIjE4", ncs_link: "http://ncs.io/YouAre" },
      { id: 11, name: 'Amadeus-legendary-goaul5peld', img: 'img/Amadeus-legendary-goaul5peld.jpeg', src: 'music/Amadeus-legendary-goaul5peld.mp3', youtube_link: "https://youtu.be/cTlshvPrIZo", ncs_link: "https://push.fm/fl/ckynq2fc" },
      { id: 12, name: 'Arlow - Feel So Lucky [NCS Release]', img: 'img/Arlow-FeelSoLucky[NCSRelease].jpeg', src: 'music/Arlow - Feel So Lucky [NCS Release].mp3', youtube_link: "https://youtu.be/1KSiW3GT72c", ncs_link: "http://ncs.io/FeelSoLucky" },
      { id: 13, name: 'Arlow - Freefall [NCS Release]', img: 'img/Arlow-Freefall[NCSRelease].jpeg', src: 'music/Arlow - Freefall [NCS Release].mp3', youtube_link: "https://youtu.be/SxfSpqFWJAg", ncs_link: "http://ncs.io/AFreefall" },
      { id: 14, name: 'Arlow - How Do You Know [NCS Release]', img: 'img/Arlow-HowDoYouKnow[NCSRelease].jpeg', src: 'music/Arlow - How Do You Know [NCS Release].mp3', youtube_link: "https://youtu.be/2mcwNXVHqlI", ncs_link: "http://ncs.io/HowDoYouKnow" },
      { id: 15, name: 'Besomorph x EMM - Afterlife [NCS Release]', img: 'img/BesomorphxEMM-Afterlife[NCSRelease].jpeg', src: 'music/Besomorph x EMM - Afterlife [NCS Release].mp3', youtube_link: "https://youtu.be/2mcwNXVHqlI", ncs_link: "http://ncs.io/HowDoYouKnow" },
      { id: 16, name: 'Brook Xiao - Fire [NCS Release]', img: 'img/BrookXiao-Fire[NCSRelease].jpeg', src: 'music/Brook Xiao - Fire [NCS Release].mp3', youtube_link: "https://youtu.be/2W3Y9KMgNw0", ncs_link: "http://ncs.io/Fire" },
      { id: 17, name: 'Diviners X Riell - Slow', img: 'img/DivinersXRiell-Slow.jpeg', src: 'music/Diviners X Riell - Slow.mp3', youtube_link: "https://youtu.be/kPMLbSXM97U", ncs_link: "http://ncs.io/Slow" },
      { id: 18, name: 'Elektronomia - Breeze [NCS Release]', img: 'img/Elektronomia-Breeze[NCSRelease].jpeg', src: 'music/Elektronomia - Breeze [NCS Release].mp3', youtube_link: "https://youtu.be/abYP-NPLTbw", ncs_link: "http://ncs.lnk.to/Breeze" },
      { id: 19, name: '2 Souls - Lonely (ft. Nara) [NCS Release]', img: 'img/SoulsNaraLonely.jpeg', src: 'music/SoulsNaraLonely.mp3', youtube_link: "https://youtu.be/FyFGUMyoias", ncs_link: "http://ncs.io/Lonely" }]
    },
    {
      name: "DOOM",
      length: 5,
      image_source: "/img/playlist_bg_doom.png",
      music_list: [{ id: 0, name: 'DOOM Eternal OST - The Only Thing They Fear Is You (old/new Merged)', img: 'img/doomOne.jpg', src: 'music/doom-eternal-ost-the-only-thing-they-fear-is-you-oldnew-merged.mp3', youtube_link: "https://youtu.be/fOsB5AoKDJc", ncs_link: "https://soundcloud.com/random-anvil/doom-eternal-ost-the-only-thing-they-fear-is-you-oldnew-merged" },
      { id: 1, name: 'Mick Gordon - 11. BFG Division', img: 'img/doomTwo.jpg', src: 'music/mick-gordon-11-bfg-division.mp3', youtube_link: "https://youtu.be/QHRuTYtSbJQ", ncs_link: "https://music.apple.com/us/album/doom-original-game-soundtrack/1157733728" },
      { id: 2, name: 'Doom Eternal Cultist base ending riff looped', img: 'img/doomThree.jpg', src: 'music/doom-eternal-cultist-base-ending-riff-looped.mp3', youtube_link: "https://youtu.be/AHKPQdYDPzo", ncs_link: "https://youtu.be/AHKPQdYDPzo" },
      { id: 3, name: 'DOOM 2016 OST - Rip & Tear', img: 'img/doomFour.jpg', src: 'music/doom-2016-ost-rip-tear.mp3', youtube_link: "https://youtu.be/tITkTp83VRU", ncs_link: "https://youtu.be/tITkTp83VRU" },
      { id: 4, name: 'DOOM (2016) OST - Rip & Tear (HIGH QUALITY) (REMASTERED SOUND)', img: 'img/doomFive.jpg', src: 'music/doom-2016-ost-rip-tear-high-quality-remastered-sound.mp3', youtube_link: "https://youtu.be/tITkTp83VRU", ncs_link: "https://youtu.be/tITkTp83VRU" }]
    },
    {
      name: "Cyberpunk",
      length: 7,
      image_source: "/img/playlist_bg_cyberpunk.jpg",
      music_list: [{ id: 0, name: 'the-encounter-astrid-feat-street-cleaner', img: 'img/cyberpunkOne.jpg', src: 'music/the-encounter-astrid-feat-street-cleaner.mp3', youtube_link: "https://youtu.be/OI4P7Q0jqCI", ncs_link: "https://goo.gl/2a6izf" },
      { id: 1, name: 'social-kid-transmissions-432hz-electro', img: 'img/cyberpunkTwo.jpg', src: 'music/social-kid-transmissions-432hz-electro.mp3', youtube_link: "https://youtu.be/r15foxRS1gM", ncs_link: "https://soundcloud.com/socialkidmusic" },
      { id: 2, name: 'owl-vision-warhogz', img: 'img/cyberpunkThree.jpg', src: 'music/owl-vision-warhogz.mp3', youtube_link: "https://youtu.be/AdqGAJsFNGM", ncs_link: "https://soundcloud.com/owlvision/warhogz" },
      { id: 3, name: 'max-brhon-the-future-ncs-release', img: 'img/cyberpunkFour.jpg', src: 'music/max-brhon-the-future-ncs-release.mp3', youtube_link: "https://youtu.be/dRe_rS19E04", ncs_link: "http://ncs.io/TheFuture " },
      { id: 4, name: 'max-brhon-cyberpunk-ncs-release', img: 'img/cyberpunkFive.jpg', src: 'music/max-brhon-cyberpunk-ncs-release.mp3', youtube_link: "https://youtu.be/iqoNoU-rm14", ncs_link: " http://ncs.io/Cyberpunk" },
      { id: 5, name: 'hyper-clockwork', img: 'img/cyberpunkSix.jpg', src: 'music/hyper-clockwork.mp3', youtube_link: "https://youtu.be/Pt7kmByAPxI", ncs_link: "https://www.soundcloud.com/hyper" },
      { id: 6, name: 'eddie-still-healing', img: 'img/cyberpunkSeven.jpg', src: 'music/eddie-still-healing.mp3', youtube_link: "https://youtu.be/QtCbgadN3Rc", ncs_link: "https://smarturl.it/bad_habits" }]
    },
  ]
  let routes = playlists.map((playlist) => {
    let path = "/PlayList_" + playlist.name
    return (
      <Route key={Math.random().toString().substring(2, 9)}  path={path} element={<Music_Page music_list={playlist.music_list} />} />
    )
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main_Page playlists={playlists} />} />
          {routes}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
