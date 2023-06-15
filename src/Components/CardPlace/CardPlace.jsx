import { useState } from 'react';
import CardPoup from '../CardPoup/CardPoup';
import './CardPlace.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css'
function CardPlace(props){
    let [visiblePoup,setVisiblePoup]=useState(false)
    function closePoup(){
        setVisiblePoup(false)
    }
    return(
  
        <div className="CardPlace">
                  <Tippy animation={'scale'} content={props.value.name}>
                  <img className='CardPlace__img' onClick={()=>setVisiblePoup(true)} src={props.value.img} alt="" />
            </Tippy>
            <CardPoup value={props.value} closePoup={closePoup} visible={visiblePoup}/>
            </div>
    )
}
export default CardPlace