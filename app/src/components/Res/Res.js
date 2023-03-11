import moment from "moment/moment"
import Image from "next/image"
import { useEffect, useState } from "react"
import Slider from "react-slick"

function Res({datares}) {
    const [days] = useState([{
        dayEng:"Monday",
        dayUkr:"Понеділок"
    },{
        dayEng:"Tuesday",
        dayUkr:"Вівторок"
    },{
        dayEng:"Wednesday",
        dayUkr:"Середа"
    },{
        dayEng:"Thursday",
        dayUkr:"Четвер"
    },{
        dayEng:"Friday",
        dayUkr:"П'ятниця"
    },{
        dayEng:"Saturday",
        dayUkr:"Субота"
    },{
        dayEng:"Sunday",
        dayUkr:"Неділя"
    },]);
    const [today] = useState(moment().format('dddd'));
    const [dayArr, setDayArr] = useState([])
    let settings = {
        className: "mainDayResSlider",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover:false,
      };
useEffect(() =>{
    // console.dir(datares)
    setDayArr(datares.filter((arr) =>{if(arr.day === today){return true}}))
},[])

if (dayArr.length === 0) return <div>loading</div>;
  return (
    <>
    <h2 className='mainDayResText'>{days.map((arr)=>{if(today === arr.dayEng){return arr.dayUkr}})}</h2>
    <Slider {...settings}>
<div className="mainDayResSect">
    <div className="mainDayResSectTextPos"></div>
    <h3 className="mainDayResSectText">Мондштадт</h3>
    <div className="mainDayResSectImg">
    <Image  src={"/imgres/"+dayArr[0].mond[0]} width="118" height="118" alt="res img"/>
    <Image  src={"/imgres/"+dayArr[0].mond[1]} className="mainDayResSImg" width="118" height="118" alt="res img"/>
    </div>
</div>
<div className="mainDayResSect">
<div className="mainDayResSectTextPos2"></div>
    <h3 className="mainDayResSectText">Ліюе</h3>
    <div className="mainDayResSectImg">
    <Image  src={"/imgres/"+dayArr[0].li[0]} width="118" height="118" alt="res img"/>
    <Image  src={"/imgres/"+dayArr[0].li[1]} className="mainDayResSImg" width="118" height="118" alt="res img"/>
    </div>
</div>
<div className="mainDayResSect">
<div className="mainDayResSectTextPos3"></div>
    <h3 className="mainDayResSectText">Інадзума</h3>
    <div className="mainDayResSectImg">
    <Image  src={"/imgres/"+dayArr[0].ina[0]} width="118" height="118" alt="res img"/>
    <Image  src={"/imgres/"+dayArr[0].ina[1]} className="mainDayResSImg" width="118" height="118" alt="res img"/>
    </div>
</div>
<div className="mainDayResSect">
<div className="mainDayResSectTextPos4"></div>
    <h3 className="mainDayResSectText">Сумеру</h3>
    <div className="mainDayResSectImg">
    <Image  src={"/imgres/"+dayArr[0].sum[0]} width="118" height="118" alt="res img"/>
    <Image  src={"/imgres/"+dayArr[0].sum[1]} className="mainDayResSImg" width="118" height="118" alt="res img"/>
    </div>
</div>

    </Slider>
    </>
  );
};
export default Res;