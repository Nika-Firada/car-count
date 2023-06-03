import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCost, changeName } from '../redux/slices/formSlice';
import { addCar } from '../redux/slices/carSlice';

const CarForm = () => {
  const { name, cost } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  }
  const handleConstChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch(changeCost(value));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name: name, cost: cost }))
    // dispatch(changeName(''));
    // dispatch(changeCost(0));

  }
  return (
    <div className='car-form panel'>
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ''}
              onChange={handleConstChange}
            />
          </div>
        </div>
        <div className='field'>
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CarForm;