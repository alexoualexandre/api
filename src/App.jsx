import { useState } from 'react'
import './App.css'

function App() {
  const [final, setFinal] = useState("albert");
  const [init, setInit] = useState(0);

  if (init < 1) {
    fetch('https://finalspaceapi.com/api/v0/character').then((response) =>
      response.json()).then((rep) => {
        console.log(rep);
        setInit(init + 1);
        setFinal(rep)
      })
  }

  return (
    <>
      {init < 1 ? "albert" :
        final.map((elem) => {
          return (
            <div key={elem.id} style={{ border: "1px solid red", width: "50%", position: "relative" }}>
              <p>{elem.name}</p>
              <img src={elem.img_url} style={{ position: "relative", width: "100%" }} ></img>
            </div>
          )
        }
        )
      }
    </>
  )
}

export default App
