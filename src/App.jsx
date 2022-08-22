import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
const [inputValue, setInputValue] = useState("")
const [summonerData, setSummonerData] = useState('')

const key = 'RGAPI-bba63c52-cc78-4f65-9ec0-0bf86ba9f789'
const api = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'

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
console.log('XDDDD', summonerData)

return (
  <div className="App">
    <div className="container">
      <h6>SEARCH SUMMONER LEAGUE OF LEGENDS</h6>
      <input type="text" onChange={e => setInputValue(e.target.value)}/>
      <button onClick={e => getSummoner(e)}> search </button>
      {summonerData.length > 0
      ? 
        <p>DONT HAVE PLAYER</p>
      : 
        <p>GREAT HAVE PLAYER</p>
      }
        {summonerData.name
        ? 
          <div className="container-content">
            <h2>Nick: {summonerData.name}</h2>
            <p>Level Account: {summonerData.summonerLevel}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${summonerData.profileIconId}.png`}/>
          </div>
        :
          <p></p>
        }
  
      
    </div>
    
  </div>
)
}

export default App
