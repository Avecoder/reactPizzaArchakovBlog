import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import axios from 'axios'

const FullPizza = (props) => {
  const {id} = useParams()

  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    axios
      .get(`https://6293fbc6089f87a57ac8115f.mockapi.io/api/pizzas/${id}`)
      .then(({data}) => {
        console.log(data)
      })
  }, [])


  return (
    <div className="container">
      <img src={pizza.imageUrl} alt=""/>
      <h2>{pizza.name}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  )
}

export default FullPizza
