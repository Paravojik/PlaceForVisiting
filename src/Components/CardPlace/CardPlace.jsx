
import CardPoup from '../CardPoup/CardPoup';
import './CardPlace.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css'
import { Link, Route, Routes } from 'react-router-dom';
function CardPlace(props){


    return(
  
        <div className="CardPlace">
            <Link  to={'info/'+props.value.name}>
                  <Tippy animation={'scale'} content={props.value.name}>
                    
                    <img className='CardPlace__img'  src={props.value.img} alt="" />
               
             
       
            </Tippy>
            </Link>
            {/* <Link to={'info/'+props.value.name}>To poup</Link> */}
            <Routes>
                <Route exact path={'info/'+props.value.name} element={ <CardPoup value={props.value}  visible={true}/>}/>
            </Routes>
          
            {/* <CardPoup value={props.value} closePoup={closePoup} visible={visiblePoup}/> */}
            </div>
    )
}
export default CardPlace