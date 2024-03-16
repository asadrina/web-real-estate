import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function UserForm({ user, handleUpdate }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = async (formData) => {
    if (user) {
      handleUpdate(formData);
    } else {
      try {
        const response = await axios.post('http://localhost:3001/users', formData);
        console.log('Data stored', response.data);
      } catch (err) {
        console.error('Error Storing Data', err);
      }
    }
  };

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    website: '',
    company: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input className='form-control' {...register('userName', { required: true, pattern: /^[a-z\s]{5,20}$/i })} value={formData.userName} onChange={handleInputChange} />
          {errors.userName?.type === 'required' && <p className='text-danger'>* User name is required</p>}
          {errors.userName?.type === 'pattern' && <p className='text-danger'>* User name is invalid & must be between 5 and 20 chars.</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input className='form-control' {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} value={formData.email} onChange={handleInputChange} />
          {errors.email?.type === 'pattern' && <p className='text-danger'>* Please enter valid email ID.</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input className='form-control' {...register('phone', { required: true, pattern: /^[0-9]{10}$/ })} value={formData.phone} onChange={handleInputChange} />
          {errors.phone?.type === 'pattern' && <p className='text-danger'>* Please enter valid Phone number.</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="website" className="form-label">Website</label>
          <input className='form-control' {...register('website')} value={formData.website} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company Name</label>
          <input className='form-control' {...register('company')} value={formData.company} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">{user ? 'Update' : 'Add'}</button>
      </form>
    </div>
  )
}