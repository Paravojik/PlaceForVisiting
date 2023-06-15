import { useState } from 'react';
import './CardPoup.css'
import exit from './img/exit.png'
function CardPoup(props){
    let [disctance,setDisctance]=useState('')

 function getLocation() {
    if (navigator.geolocation) {
        setDisctance('Loading...')
      navigator.geolocation.getCurrentPosition(calculateDistance);
    //   console.log( navigator.geolocation.getCurrentPosition(showPosition))
    } else { 
        setDisctance('Geolocation is not supported by this browser.')
    
    }
  }

    function calculateDistance(position) {
    //    getLocation()
        const R = 6371; // Радіус Землі в кілометрах
      
        // Перетворення градусів у радіани
        const lat1Rad = toRadians(props.value.xCoord);
        const lon1Rad = toRadians(props.value.yCoord);

        const lat2Rad = toRadians(position.coords.latitude);
        const lon2Rad = toRadians(position.coords.longitude);
      
        // Різниці між координатами
        const dLat = lat2Rad - lat1Rad;
        const dLon = lon2Rad - lon1Rad;
      
        // Формула Гаверсіна
        const a =
          Math.sin(dLat / 2) ** 2 +
          Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.asin(Math.sqrt(a));
      
        // Обчислення відстані
        const distance = R * c;
      console.log(distance)
      setDisctance(Math.round((distance) * 1000) / 1000+' км')
    
      }
      
      function toRadians(degrees) {
        return degrees * (Math.PI / 180);
      }
      
      // Приклад використання
    //   const distance = calculateDistance(41, 40, 42, 40);
    //   console.log(distance);
    return(
        <div onClick={props.closePoup} className="CardPoup" style={props.visible?{zIndex:'1'}:{zIndex:'-1'} }>
            <div onClick={(e)=>e.stopPropagation()} style={props.visible?{opacity:'1'}:{opacity:'0'} }  className="CardPoup__main">
                <img onClick={props.closePoup} className='exitBtn' src={exit} alt="" />
                <div className="CardPoup__main__name">{props.value.name}</div>
                <div className="CardPoup__main__box">
                    <div className="CardPoup__main__left">
                        <img className='CardPoup__main__left__img' src={props.value.img} alt="" />
                        <div className="CardPoup__main__left__description"><b>Опис: </b>  {props.value.description}</div>
                        <div className="CardPoup__main__left__description"><b>Враження автора: </b>  {props.value.impression}</div>
                            
                    </div>
                    <div className="CardPoup__main__right">
                        <div className="CardPoup__main__right__price"><b>Ціна:</b> {props.value.price}</div>
                       <iframe className='CardPoup__main__right__map' title={'tileIframe'+props.value.name} src={props.value.iframe}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <button onClick={getLocation} className="CardPoup__main__right__disctance__btn">Прорахувати відстань</button>
                        <div className="CardPoup__main__right__disctance">{disctance}</div>
                        {/* <button onClick={getLocation}>aaaa</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardPoup