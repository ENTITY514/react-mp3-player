import style from './page.module.css';
import Header from './Components/Header/header'

function Page({}) {
  return(
    <div className={style.container}>
      <Header />
    </div>
  )
}

export default Page;
