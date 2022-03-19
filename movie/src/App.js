import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Beer from './components/Beer';

const API  = "https://api.punkapi.com/v2/beers?"


function App() {

  const [beer,setBeer] = useState([]);
  const [searchText,setSearchText] = useState('');

  useEffect(() => {
   fetch(API)
   .then((res) => res.json())
   .then((data) =>{
    setBeer(data);
   });

  },[])

  const handleSubmit = (e) => {
    e.preventDefault(e) ;
    fetch(API+"beer_name="+searchText)
   .then((res) => res.json())
   .then((data) =>{
    setBeer(data);
   });

   setSearchText('');

  }

  const returnToHome = () => {
     fetch(API)
   .then((res) => res.json())
   .then((data) =>{
    setBeer(data);
   });

  }
  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleAlchoholPopulatiry = () => {
    const orderedBeers = beer.sort(function (a, b) {
    return a - b;
})

setBeer(orderedBeers);
  }
  return (
    <div className='App'>
    <h1 className='logo' onClick={returnToHome}>Beer shop</h1>
    <input 
    type="search" placeholder="Seach..." value={searchText} onChange={handleChange}/>
    <button disabled={!searchText} onClick={handleSubmit}>Go</button>
    <button onClick={handleAlchoholPopulatiry}>Order By Alchohol</button>
    <div className="beer-container">
   {
    beer.map(m => 
     <Beer key={m.id} {...m} />
        )
   }
    </div>
    </div>
  );
}

export default App;
