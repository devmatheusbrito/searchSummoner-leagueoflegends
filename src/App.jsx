import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [summonerData, setSummonerData] = useState('')
  const [alertError, setAlertError] = useState(false)

  async function getSummoner() {
    try{
      const searchSummoner = `${api}${inputValue}?api_key=${key}`
    await axios
      .get(searchSummoner)
      .then((response) => setSummonerData(response.data))
    } catch(error) {
        setAlertError(true)
    }
  }

  useEffect(() => {
    getSummoner()
  }, []);

  console.log('aaaaaaaaa', alertError)

  return (
    <div className="App">
      <div className="container">
        <h2>SEARCH SUMMONER LEAGUE OF LEGENDS</h2>
        <div className="inputSearchContent">
          <TextField  size="small" label="User" variant="outlined"type="text" onChange={e => setInputValue(e.target.value)} />
          <Button className="btn-search" size="small" variant="outlined" onClick={e => getSummoner(e)}> search </Button>
        </div>
        {summonerData.name
          ?
            <div className="cardContent">
              <div className="contentAvatar">
                <img className='avatarIcon' src={`http://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/${summonerData.profileIconId}.png`} />
              </div>
              <div className="content-text">
                <div>name: {summonerData.name}</div>
                <div>level: {summonerData.summonerLevel}</div>
              </div>
            </div>
          :
            <p></p>
        }
      </div>
    </div>
  )
}

export default App
