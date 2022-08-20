import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
const [inputValue, setInputValue] = useState("")
const [summonerData, setSummonerData] = useState({})
console.log('iam data',summonerData)
const key = 'RGAPI-bba63c52-cc78-4f65-9ec0-0bf86ba9f789'

//pegar as variaveis no env

async function getSummoner() {
    const searchSummoner = `${api}${inputValue}?api_key=${key}`
    await axios
      .get(searchSummoner)
      .then((response) => setSummonerData(response.data))
      .catch((err) => {console.error("please no", err)});
  } 
useEffect(() => {
  getSummoner()
}, []);

console.log('test',summonerData);

return (
  <div className="App">
    <div className="container">
      <h6>SEARCH SUMMONER LEAGUE OF LEGENDS</h6>
      <input type="text" onChange={e => setInputValue(e.target.value)}/>
      <button onClick={e => getSummoner(e)}> search </button>
      {!summonerData
      ? 
      <p>DONT HAVE PLAYER</p>
      : 
      <div className="container-content">
      <h2>Nick: {summonerData.name}</h2>
      <p>Level Account: {summonerData.summonerLevel}</p>
      {summonerData.profileIconId
      ? 
      <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${summonerData.profileIconId}.png`}/>
      :
      <p></p>
      }
    </div>
    }
      
    </div>
    
  </div>
)
}

export default App
