
import {  Route, Routes } from 'react-router-dom';
import './App.css';
// import CardPlace from './Components/CardPlace/CardPlace';
import MainPage from './Components/MainPage/MainPage';

function App() {
  //заготовка
// {  id:,
//     name:'',
//     description:'',
//     impression:'',
//   price:'грн',
// img:``,
// iframe:'',
// xCoord:'',
// yCoord:''}


  return (

   <Routes>

    <Route exact path='/*' element={ <MainPage/>}/>
  
    <Route path='/second' element={<p>Second page</p>}/>
    <Route path='/three' element={<p>Third</p>}/>
 
    {/* <Route path='*'>
    <MainPage/>
    </Route> */}
 
   <Route path='*' element={<p>Page not found</p>}/>
 
    
    </Routes>

  )
}

export default App;
