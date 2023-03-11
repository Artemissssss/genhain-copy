import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import Res from '@/components/Res/Res';


import { useEffect, useState } from 'react'

export default function Home() {
  const [banner, setBanner] = useState([])
  const [events, setEvents] = useState([])
  const [interAR, setInterAR] = useState([])
  const [resourse, setResourse] = useState([])
  const [loading, setLoading] = useState(false)
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  useEffect( () => {
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch('/api/banner')
      const data = await res.json()
      const res2 = await fetch('/api/events')
      const data2 = await res2.json()
      const res3 = await fetch('/api/needtoread')
      const data3 = await res3.json()
      const res4 = await fetch('/api/dayres')
      const data4 = await res4.json()
      setBanner(data)
      setEvents(data2)
      setInterAR(data3)
      setResourse(data4)
    }
      fetchData()
      setLoading(false)
  }, [])
  return (
    <>
      <Head>

        <title>Геншин Українською</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="mainSect">
        <Image className='mainBackImg' priority="true" src={'/img/background-main.png'} alt="background" width="1281" height="721"/>
          <section className='mainInfo'>

            <div className='mainBanner'>
              <h2 className='mainBannerH'>Актуальні ігрові баннери</h2>
              {
            loading ? "<p>loading<p/>" : banner.map((arr,i) =>{
              return(
                <div className='mainBannerSect' key={i}>
                    <Image className='mainBannerImg' src={arr.img} alt={arr.name} width={arr.width} height={arr.height} priority={true}/>
                    <h3 className='mainBannerText'>{arr.name}</h3>
                </div>
              )
            })}</div>

            <div className='mainEvents'>
              <h2 className='mainEventsText'>Веб-івенти</h2>
              {loading ? "<p>loading<p/>" : events.map((arr,i) =>{
              return(
                <Link href={arr.url} className='mainEventSect' key={i}>
                    <Image className='mainEventImg' src={arr.img} alt={arr.name} width={arr.width} height={arr.height}/>
                </Link>
              )
            })}</div>

            <div className='mainNeedToRead'>
            <h2 className='mainNeedToReadText'>Варто прочитати:</h2>
            <Slider className='mainNeedToReadSlider' {...settings}>
                {interAR.map((arr,i)=>{
                  return(
                    <div className='mainNeedToReadItem' key={i}>
                      <Link href={arr.route}>
                        <Image className='mainNeedToReadImg' src={arr.imgPost} alt={arr.name} width={arr.width} height={arr.height} />
                      </Link>
                    </div>
                  )
                })}
              </Slider>
            </div>

            <div className='mainDayRecoursse'>
              {resourse.length === 0 ? <p>loading</p> : <Res datares={resourse}/>}
            </div>
          </section>
      </main>
    </>
  )
}
