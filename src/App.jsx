import { useCatImage } from './hooks/usecatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'


function App() {

  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  
  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
      <main>
        <h1>App gatitos</h1>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image eextracted using the first trhee words for ${fact}`}/>}
      </main>
  )
}

export default App
