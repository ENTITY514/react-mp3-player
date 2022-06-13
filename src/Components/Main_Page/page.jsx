import style from './page.module.css';
import Header from './Components/Header/header'
import Main from './Components/Main/main'
import Footer from './Components/Footer/footer'

function Page({ playlists}) {
  return (
    <div className={style.container}>
      <Header />
      <Main playlists={playlists} />
      <Footer />
    </div>
  )
}

export default Page;
