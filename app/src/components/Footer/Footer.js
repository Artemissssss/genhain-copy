import Link from "next/link"
import { StatusContext } from "@/context/context";
import { useContext } from "react";
function Footer() {
  const { status } = useContext(StatusContext);
  return (
    <footer className="footerSect">
        <div className="footerCont">
          <h2 className="footerName">Невідомий Якша</h2>
          <ul className="footerList">
            <li className="footerItem">
              <div className="footerItemSect">
                <a href='https://t.me/nevodomyj_yaksha'>
                  <img className="footerItemSectImg" src='/img/telegram-logo.png' alt="telegram channel"/>
                </a>
                  <h3 className="footerItemSectText">Телеграм канал</h3>
              </div>
              <div className="footerItemSect">
              <a href='https://t.me/nevodomyj_yaksha'>
                  <img className="footerItemSectImg" src='/img/telegram-logo.png' alt="telegram channel"/>
              </a>
                  <h3 className="footerItemSectText">Телеграм бот</h3>
              </div>
              <div className="footerItemSect">
              <a href='https://t.me/nevodomyj_yaksha'>
                  <img className="footerItemSectImg" src='/img/telegram-logo.png' alt="telegram channel"/>
              </a>
                  <h3 className="footerItemSectText">Телеграм канал</h3>
              </div>
            </li>
            <li className="footerItem">
              <Link href='/articles' className="footerItemLink">
                <h3>Статті</h3>    
              </Link>


              <Link href='/heroes' className="footerItemLink">
                <h3>Персонажі</h3>  
              </Link>

              <Link href='/bilds' className="footerItemLink">
                <h3>Білди</h3>  
              </Link>

              <Link href='/geography' className="footerItemLink">
                <h3>Географія</h3>    
              </Link>

            </li>
            <li className="footerItem">

              <Link href='#' className="footerItemLink">
                <h3>Ресурси</h3>  
              </Link>
              <Link href='#' className="footerItemLink">
                <h3>Політика</h3> 
              </Link>
              {
                status ? (<Link href='/admin' className="footerItemLink">
                <h3>Адмін панель</h3> 
              </Link>) : (<div className="footerItemLink"></div>)
              }
              <div className="footerItemLink"></div>
            </li>
          </ul>
          <div className="CommentsSectLineFooter"></div>
          <h3 className="footerCopyrigth">&#169; Невідомий Якша</h3>
        </div>
    </footer>
  )
}
export default Footer