import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //清除項目的function
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  let fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json()
      setTours(data);
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      {/* 如果loading是true頁面就會呈現Loading的組件，如果loading是false就會呈現Tours組件 */}
      {loading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} />}
    </main>
  )

}

export default App
