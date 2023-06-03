import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearch } from '../redux/slices/carSlice';
const CarSearch = () => {
  const {search} = useSelector((state) => state.car)
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeSearch(e.target.value))
  }
  return (
    <div className='list-header'>
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input className="input" value={search} onChange={handleSearch} />
      </div>
    </div>
  )
}

export default CarSearch