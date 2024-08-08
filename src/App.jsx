import { useEffect, useState } from 'react'

import './App.css'
import useDebounce from './hooks/useDebounce'

function App() {
  const [serchTerm, setserchTerm] = useState("")
  const debouncedValue = useDebounce(serchTerm, 2000)

  console.log(serchTerm)
  const handleSearchTerm = (e) => {
    setserchTerm(e.target.value)
  }


  useEffect(() => {

    console.log("debouncedValue")
    return () => {
      console.log("object")
    }

  })


  return (
    <>
      <input type='text' placeholder='Text...' onChange={handleSearchTerm} />
      <p>{debouncedValue}</p>
    </>
  )
}

export default App
