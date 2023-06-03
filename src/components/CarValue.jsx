import React from 'react'
import { useSelector } from 'react-redux'

const CarValue = () => {
  const totalCost = useSelector(({car:{cars,search}}) => {
    const filteredCars = cars.filter((car) => {
      return car.name.toLowerCase().includes(search.toLowerCase())
    })
    let cost = 0;
    for (let car of filteredCars) {
      cost += car.cost
    }
    return cost
  })
  return (
    <div className='car-value'>
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue