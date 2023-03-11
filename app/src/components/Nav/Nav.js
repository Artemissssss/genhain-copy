import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  return (
    <nav className='navSect'>
      <Link href={'/'}><Image className="logo" src={'/img/logo.png'} width="90" height="90" alt='logo'/></Link>
        <div className="linkSect">
            <Link href='/articles'><h3 className="linkText">СТАТТІ</h3></Link>
            <Link href='/heroes'><h3 className="linkText">ПЕРСОНАЖІ</h3></Link>
            <Link href='/bilds'><h3 className="linkText">БІЛДИ</h3></Link>
            <Link href='/geography'><h3 className="linkText">ГЕОГРАФІЯ</h3></Link>
        </div>
        <a href='https://t.me/nevodomyj_yaksha' className='wrapLogoTg'>
        <Image className="tgLogo" src={'/img/telegram-logo.png'} width="64" height="64" alt='telegramlogo'/>
        </a>
    </nav>
  )
}
export default Nav