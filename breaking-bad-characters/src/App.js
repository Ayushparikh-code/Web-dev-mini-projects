import React , {useEffect, useState} from 'react'
import Header from './Components/UI/Header'
import CharacterGrid from './Components/Characters/CharacterGrid'
import Search from './Components/UI/Search'
import axios from 'axios'
import './App.css'


const App = () => {

  const [items , setItems] = useState([]);
  const [isLoading, setIsLoading] =  useState(true);
  const [query, setQuery] = useState('')

  useEffect( ()=>{
 
    const fetchItems = async ()=>{
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
        )
      // console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();
  }, [query])

  return (
    <div className="">
      <Header />
      <Search getQuery={ (q)=> setQuery(q)} />
      < CharacterGrid isLoading={isLoading} items= {items}/>
    </div>
  );
}

export default App;
