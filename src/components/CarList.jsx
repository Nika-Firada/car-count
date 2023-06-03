import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../redux/slices/carSlice';

const CarList = () => {
  const { cars, name } = useSelector(({ form, car: { cars, search } }) => {
    const filtered = cars.filter(car => car.name.toLowerCase().includes(search.toLowerCase()));
    return {
      cars: filtered,
      name: form.name
    }
  })
  const dispatch = useDispatch()
  const handleCarRemove = (id) => {
    dispatch(removeCar(id))
  }
  return (
    <div className='car-list'>
      {cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (<div key={car.id} className={`panel ${bold && 'bold'}`}>
          <p>{car.name} - ${car.cost}</p>
          <button onClick={() => handleCarRemove(car.id)} className="button is-danger">
            Remove
          </button>
        </div>)
      }
      )}
      <hr />
    </div>
  )
}

export default CarList